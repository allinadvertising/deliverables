export function HeadingBlock({
  level,
  text,
}: {
  level: 2 | 3;
  text: string;
}) {
  if (level === 2) {
    return <h2 className="audit-section-title">{text}</h2>;
  }

  return <h3 className="audit-category-title">{text}</h3>;
}
