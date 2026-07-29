type EditorialTextProps = {
  compact?: boolean;
  text: string;
};

export function EditorialText({
  compact = false,
  text,
}: EditorialTextProps) {
  const tokens = text.split(
    /(https?:\/\/[^\s,;)]+|\/[A-Za-z0-9][^\s,;)]*|\b\dxx\b|\b\d[\d,]*(?:\.\d+)?%?(?!\w))/gi,
  );

  return tokens.map((token, index) => {
    if (/^(?:https?:\/\/|\/)/i.test(token)) {
      return (
        <span
          className={`audit-mono inline rounded-md bg-slate-100 font-semibold text-[#2f65a7] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] ${
            compact
              ? "break-all px-1.5 py-0.5 text-[0.84em]"
              : "break-words px-2 py-0.5 text-[0.82em]"
          }`}
          key={`${index}-${token}`}
        >
          {token}
        </span>
      );
    }

    if (/^(?:\dxx|\d[\d,]*(?:\.\d+)?%?)$/i.test(token)) {
      return (
        <span
          className={`audit-mono rounded-sm bg-[linear-gradient(transparent_58%,rgba(246,198,79,0.55)_58%)] px-[3px] font-bold tabular-nums text-slate-950 [box-decoration-break:clone] [-webkit-box-decoration-break:clone] ${
            compact ? "text-[0.94em]" : "tracking-[-0.02em]"
          }`}
          key={`${index}-${token}`}
        >
          {token}
        </span>
      );
    }

    return token;
  });
}
