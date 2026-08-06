import { Heading } from "@react-workshop/ui/heading";
import { Text } from "@react-workshop/ui/text";

export interface HighlightItem {
  id?: string;
  title: string;
  description: string;
}

export interface SectionAboutHighlightsProps {
  highlights?: HighlightItem[];
}

const defaultHighlights: HighlightItem[] = [
  {
    id: "material",
    title: "Premium Material",
    description: "Durable surfaces and textiles made for daily use."
  },
  {
    id: "collections",
    title: "Room Collections",
    description: "Coordinated pieces for fast and confident styling."
  },
  {
    id: "support",
    title: "Reliable Support",
    description: "Delivery, warranty, and care help when you need it."
  }
];

export function SectionAboutHighlights({
  highlights = defaultHighlights
}: SectionAboutHighlightsProps) {
  return (
    <section className="bg-beige py-16">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 md:grid-cols-3">
        {highlights.map((item, index) => (
          <article key={item.id || index} className="bg-white p-8">
            <Heading asComponent="h3" size="xl" weight="semibold" className="mb-3 text-2xl">
              {item.title}
            </Heading>
            <Text variant="muted">{item.description}</Text>
          </article>
        ))}
      </div>
    </section>
  );
}
