import { cp, mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const source = path.resolve(root, "audits");
const publicDir = path.resolve(root, "public");
const target = path.resolve(publicDir, "audits");

function isInside(child, parent) {
  const relative = path.relative(parent, child);
  return relative && !relative.startsWith("..") && !path.isAbsolute(relative);
}

if (!isInside(target, publicDir)) {
  throw new Error(`Refusing to sync audits outside public: ${target}`);
}

const sourceStats = await stat(source).catch((error) => {
  if (error.code === "ENOENT") {
    return null;
  }

  throw error;
});

await mkdir(publicDir, { recursive: true });
await rm(target, { recursive: true, force: true });

if (!sourceStats) {
  console.log("No audits directory found; skipped audit sync.");
  process.exit(0);
}

if (!sourceStats.isDirectory()) {
  throw new Error("The audits path exists but is not a directory.");
}

await cp(source, target, { recursive: true });
console.log(`Synced audits to ${path.relative(root, target) || target}`);
