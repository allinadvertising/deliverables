export function ImageBlock({
  alt,
  caption,
  src,
}: {
  alt: string;
  caption: string | null;
  src: string;
}) {
  return (
    <figure className="mb-4 last:mb-0">
      {/* eslint-disable-next-line @next/next/no-img-element -- arbitrary uploaded sources (data: URIs or external hosts) can't go through next/image */}
      <img alt={alt} className="max-w-full rounded-lg border border-slate-200" src={src} />
      {caption ? (
        <figcaption className="mt-2 text-sm text-slate-500">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
