import { Heading } from "@react-workshop/ui/heading";
import { Text } from "@react-workshop/ui/text";

export interface SectionAboutStudioProps {
  subtitle?: string;
  title?: string;
  description1?: string;
  description2?: string;
  imageUrl?: string;
}

export function SectionAboutStudio({
  subtitle = "Furniro Studio",
  title = "Designed around calm, useful rooms.",
  description1 = "Furniro brings together room-ready furniture, soft materials, and simple silhouettes inspired by the original interior commerce design.",
  description2 = "The collection covers living, dining, bedroom, and decorative essentials with consistent quality and support.",
  imageUrl = "images/home/home-07.jpg"
}: SectionAboutStudioProps) {
  return (
    <section className="py-20">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-12 lg:grid-cols-2">
        <img
          className="h-130] w-full rounded-[10px] object-cover"
          src={imageUrl}
          alt="Furniro showroom"
        />
        <div>
          <Text weight="semibold" className="mb-3 tracking-[3px] text-brand">
            {subtitle}
          </Text>
          <Heading
            asComponent="h2"
            size="4xl"
            weight="bold"
            className="mb-6 text-[42px] leading-tight"
          >
            {title}
          </Heading>
          <Text variant="muted" className="mb-5 leading-8">
            {description1}
          </Text>
          <Text variant="muted" className="leading-8">
            {description2}
          </Text>
        </div>
      </div>
    </section>
  );
}
