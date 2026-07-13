export function ListBlock({
  items,
  ordered,
}: {
  items: string[];
  ordered: boolean;
}) {
  const Tag = ordered ? "ol" : "ul";

  return (
    <Tag
      className={`audit-copy mb-4 space-y-1.5 pl-6 last:mb-0 ${
        ordered ? "list-decimal" : "list-disc"
      }`}
    >
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </Tag>
  );
}
