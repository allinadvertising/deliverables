import { EditorialText } from "@/components/shared/EditorialText";

type SuiteSectionProps = {
  children: React.ReactNode;
  eyebrow: string;
  id: string;
  intro?: string;
  title: string;
};

export function SuiteSection({
  children,
  eyebrow,
  id,
  intro,
  title,
}: SuiteSectionProps) {
  return (
    <section
      aria-labelledby={`${id}-title`}
      className="audit-page story-report-page"
      id={id}
    >
      <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
        {eyebrow}
      </p>
      <h2 className="audit-section-title" id={`${id}-title`}>
        {title}
      </h2>
      {intro ? (
        <p className="audit-copy mb-7">
          <EditorialText text={intro} />
        </p>
      ) : null}
      {children}
    </section>
  );
}
