import { randomUUID } from "node:crypto";
import { appendFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

type LogLevel = "info" | "warn" | "error";

export type AuditEnhancerLogger = {
  error: (message: string, data?: unknown) => Promise<void>;
  filePath: string;
  id: string;
  info: (message: string, data?: unknown) => Promise<void>;
  rawDir: string;
  saveRaw: (name: string, data: unknown) => Promise<string>;
  warn: (message: string, data?: unknown) => Promise<void>;
};

const root = process.cwd();
const secretValuePattern = /\b(sk-[A-Za-z0-9_-]{8,}|Bearer\s+[A-Za-z0-9._-]{12,})\b/g;
const secretKeyPattern =
  /^(authorization|proxy-authorization|x-api-key|api[-_]?key|openai[-_]?api[-_]?key|deepseek[-_]?api[-_]?key|secret|password|cookie|set-cookie)$/i;
const tokenSecretKeyPattern = /(^|[-_])(access|refresh|id)[-_]?token($|[-_])/i;

export function createAuditEnhancerLogger(): AuditEnhancerLogger {
  const day = new Date().toISOString().slice(0, 10);
  const id = `${day}-${randomUUID().slice(0, 8)}`;
  const directory = path.join(getLogRoot(), day);
  const filePath = path.join(directory, `${id}.jsonl`);
  const rawDir = path.join(directory, `${id}-raw`);

  async function write(level: LogLevel, message: string, data?: unknown) {
    const entry = {
      data: redact(data),
      level,
      logId: id,
      message,
      timestamp: new Date().toISOString(),
    };

    try {
      await mkdir(directory, { recursive: true });
      await appendFile(filePath, `${JSON.stringify(entry)}\n`, "utf8");
    } catch (error) {
      const method = level === "error" ? "error" : level === "warn" ? "warn" : "log";
      console[method](
        `[audit-enhancer:${id}] ${message}`,
        redact({ data, logWriteError: serializeLogWriteError(error) }),
      );
    }
  }

  return {
    error: (message, data) => write("error", message, data),
    filePath,
    id,
    info: (message, data) => write("info", message, data),
    rawDir,
    saveRaw: async (name, data) => {
      const safeName = name.replace(/[^a-z0-9._-]+/gi, "-").toLowerCase();
      const rawPath = path.join(rawDir, `${safeName}.txt`);
      const body =
        typeof data === "string"
          ? redactString(data)
          : JSON.stringify(redact(data), null, 2);

      try {
        await mkdir(rawDir, { recursive: true });
        await writeFile(rawPath, truncate(body), "utf8");
      } catch (error) {
        console.warn(
          `[audit-enhancer:${id}] raw response log write failed`,
          redact({
            name: safeName,
            logWriteError: serializeLogWriteError(error),
          }),
        );
      }

      return rawPath;
    },
    warn: (message, data) => write("warn", message, data),
  };
}

export function serializeError(error: unknown) {
  if (error instanceof Error) {
    return serializeErrorObject(error);
  }

  return redact(error);
}

function getLogRoot() {
  if (process.env.VERCEL) {
    return path.join("/tmp", "audit-enhancer-logs");
  }

  return path.join(root, "audit-enhancer-logs");
}

function serializeLogWriteError(error: unknown) {
  if (error instanceof Error) {
    const errorRecord = error as Error & Record<string, unknown>;

    return {
      code: errorRecord.code,
      message: error.message,
      name: error.name,
    };
  }

  return String(error);
}

function redact(value: unknown, depth = 0): unknown {
  if (depth > 6) {
    return "[Max depth reached]";
  }

  if (typeof value === "string") {
    return truncate(redactString(value));
  }

  if (
    typeof value === "number" ||
    typeof value === "boolean" ||
    value === null ||
    value === undefined
  ) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.slice(0, 100).map((item) => redact(item, depth + 1));
  }

  if (typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, entry]) => [
        key,
        secretKeyPattern.test(key) || tokenSecretKeyPattern.test(key)
          ? "[redacted]"
          : redact(entry, depth + 1),
      ]),
    );
  }

  return String(value);
}

function redactString(value: string) {
  return value.replace(secretValuePattern, (match) =>
    match.startsWith("Bearer ") ? "Bearer [redacted]" : "sk-[redacted]",
  );
}

function truncate(value: string) {
  const maxChars = Number(process.env.AUDIT_ENHANCER_LOG_MAX_CHARS);
  const limit =
    Number.isFinite(maxChars) && maxChars > 1000 ? Math.floor(maxChars) : 200000;

  if (value.length <= limit) {
    return value;
  }

  return `${value.slice(0, limit)}\n[truncated ${value.length - limit} chars]`;
}

function serializeErrorObject(error: Error, depth = 0): Record<string, unknown> {
  const errorRecord = error as Error & Record<string, unknown>;

  return redact({
    address: errorRecord.address,
    cause:
      error.cause && depth < 4
        ? error.cause instanceof Error
          ? serializeErrorObject(error.cause, depth + 1)
          : error.cause
        : undefined,
    code: errorRecord.code,
    constructorName: error.constructor.name,
    errno: errorRecord.errno,
    message: error.message,
    name: error.name,
    port: errorRecord.port,
    stack: error.stack,
    syscall: errorRecord.syscall,
  }) as Record<string, unknown>;
}
