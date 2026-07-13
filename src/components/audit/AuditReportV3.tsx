import type { AuditContentV3, ContentBlock } from "@/lib/audit/types";
import { HeadingBlock } from "./HeadingBlock";
import { ParagraphBlock } from "./ParagraphBlock";
import { ListBlock } from "./ListBlock";
import { TableBlock } from "./TableBlock";
import { CalloutBlock } from "./CalloutBlock";
import { ImageBlock } from "./ImageBlock";
import { QuoteBlock } from "./QuoteBlock";
import { MetricCard } from "./MetricCard";
import { GlossaryGrid } from "./GlossaryGrid";
import { FaqSection } from "./FaqSection";

type AuditReportV3Props = {
  content: AuditContentV3;
};

type GlossaryBlock = Extract<ContentBlock, { type: "glossary" }>;
type FaqBlock = Extract<ContentBlock, { type: "faq" }>;

type Section =
  | { kind: "glossary"; block: GlossaryBlock }
  | { kind: "faq"; block: FaqBlock }
  | { kind: "generic"; heading: string | null; blocks: ContentBlock[] };

/**
 * Renders a flattened HTML-sourced (schemaVersion 3) deliverable. Blocks are
 * grouped into `.audit-page` sections at each top-level (level 2) heading so
 * the report reads like every other section in the portal instead of one
 * long unbroken card. `glossary`/`faq` blocks break out into the existing
 * GlossaryGrid/FaqSection components directly - they already own their own
 * `.audit-page` wrapper.
 */
export function AuditReportV3({ content }: AuditReportV3Props) {
  const sections = groupBlocks(content.blocks);

  return (
    <main className="mx-auto my-10 max-w-[1160px] px-4 sm:px-0">
      {sections.map((section, index) => {
        if (section.kind === "glossary") {
          return <GlossaryGrid key={index} terms={section.block.terms} />;
        }

        if (section.kind === "faq") {
          return <FaqSection key={index} items={section.block.items} />;
        }

        return (
          <div className="audit-page" key={index}>
            {section.heading ? (
              <h2 className="audit-section-title">{section.heading}</h2>
            ) : null}
            {section.blocks.map((block, blockIndex) => (
              <BlockRenderer block={block} key={blockIndex} />
            ))}
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
      sections.push({ block, kind: "glossary" });
      continue;
    }

    if (block.type === "faq") {
      flushCurrent();
      sections.push({ block, kind: "faq" });
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
        <div className="audit-metric-grid my-8 grid grid-cols-4 gap-[18px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {block.cards.map((card, index) => (
            <MetricCard
              change={card.change}
              key={index}
              label={card.label}
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
      return <CalloutBlock text={block.text} tone={block.tone} />;
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
