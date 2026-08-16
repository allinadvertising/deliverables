import type { AuditContentV3, ContentBlock } from "@/lib/audit/types";
import { HeadingBlock } from "./HeadingBlock";
import { ParagraphBlock } from "./ParagraphBlock";
import { ListBlock } from "./ListBlock";
import { TableBlock } from "./TableBlock";
import { CalloutBlock } from "./CalloutBlock";
import { ImageBlock } from "./ImageBlock";
import { QuoteBlock } from "./QuoteBlock";
import { MetricCardV3 } from "./MetricCardV3";
import { AuditGlossaryV3 } from "./AuditGlossaryV3";
import { AuditFaqV3 } from "./AuditFaqV3";
import { AuditSectionHeaderV3 } from "./AuditSectionHeaderV3";
import { InsightBox } from "./InsightBox";

type AuditReportV3Props = {
  content: AuditContentV3;
};

type GlossaryBlock = Extract<ContentBlock, { type: "glossary" }>;
type FaqBlock = Extract<ContentBlock, { type: "faq" }>;

type Section =
  | { kind: "glossary"; block: GlossaryBlock; heading: string }
  | { kind: "faq"; block: FaqBlock; heading: string }
  | { kind: "generic"; heading: string | null; blocks: ContentBlock[] };

type NumberedSection = Section & { sectionNumber: number };

function numberSections(sections: Section[]): NumberedSection[] {
  let sectionNumber = 0;

  return sections.map((section) => {
    if (section.heading != null) sectionNumber += 1;
    return { ...section, sectionNumber };
  });
}

/**
 * Renders a flattened HTML-sourced (schemaVersion 3) deliverable. Blocks are
 * grouped into `.audit-page` sections at each top-level (level 2) heading so
 * the report reads like every other section in the portal instead of one
 * long unbroken card. Every section (including glossary/faq) gets a shared
 * numbered header (01, 02, ...) per the v3 fine-tuning design.
 */
export function AuditReportV3({ content }: AuditReportV3Props) {
  const sections = numberSections(groupBlocks(content.blocks));

  return (
    <main className="mx-auto my-10 max-w-[1160px] px-4 sm:px-0">
      {content.insightBox ? <InsightBox insight={content.insightBox} /> : null}

      {sections.map((section, index) => {
        return (
          <div className="audit-page" key={index}>
            {section.heading ? (
              <AuditSectionHeaderV3
                index={section.sectionNumber}
                title={section.heading}
              />
            ) : null}

            {section.kind === "glossary" ? (
              <AuditGlossaryV3 terms={section.block.terms} />
            ) : section.kind === "faq" ? (
              <AuditFaqV3 items={section.block.items} />
            ) : (
              section.blocks.map((block, blockIndex) => (
                <BlockRenderer block={block} key={blockIndex} />
              ))
            )}
          </div>
        );
      })}
    </main>
  );
}

function groupBlocks(blocks: ContentBlock[]): Section[] {
  const sections: Section[] = [];
  let current: { heading: string | null; blocks: ContentBlock[] } | null = null;

  function flushCurrent() {
    if (current && (current.blocks.length > 0 || current.heading)) {
      sections.push({
        blocks: current.blocks,
        heading: current.heading,
        kind: "generic",
      });
    }
    current = null;
  }

  for (const block of blocks) {
    if (block.type === "glossary") {
      flushCurrent();
      sections.push({
        block,
        heading: "Glossary: Technical Terms, Simplified",
        kind: "glossary",
      });
      continue;
    }

    if (block.type === "faq") {
      flushCurrent();
      sections.push({
        block,
        heading: "Frequently Asked Questions",
        kind: "faq",
      });
      continue;
    }

    if (block.type === "heading" && block.level === 2) {
      flushCurrent();
      current = { blocks: [], heading: block.text };
      continue;
    }

    if (!current) {
      current = { blocks: [], heading: null };
    }

    current.blocks.push(block);
  }

  flushCurrent();

  return sections;
}

function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return <HeadingBlock level={block.level} text={block.text} />;
    case "paragraph":
      return <ParagraphBlock text={block.text} />;
    case "stat_cards":
      return (
        <div className="audit-metric-grid my-8 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {block.cards.map((card, index) => (
            <MetricCardV3
              change={card.change}
              key={index}
              label={card.label}
              sentiment={card.sentiment}
              value={card.value}
            />
          ))}
        </div>
      );
    case "list":
      return <ListBlock items={block.items} ordered={block.ordered} />;
    case "table":
      return (
        <TableBlock
          caption={block.caption}
          headers={block.headers}
          rows={block.rows}
        />
      );
    case "callout":
      return (
        <CalloutBlock label={block.label} text={block.text} tone={block.tone} />
      );
    case "image":
      return (
        <ImageBlock alt={block.alt} caption={block.caption} src={block.src} />
      );
    case "quote":
      return <QuoteBlock attribution={block.attribution} text={block.text} />;
    case "glossary":
    case "faq":
      // Handled as their own top-level sections in groupBlocks/render above.
      return null;
    default:
      return null;
  }
}
