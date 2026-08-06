import type { ComponentType } from "react";
import { Trophy, ShieldCheck, Truck, Headphones, type LucideProps } from "lucide-react";
import { Heading } from "@react-workshop/ui/heading";
import { Text } from "@react-workshop/ui/text";

export interface FeaturePerk {
  id?: string;
  icon: ComponentType<LucideProps>;
  title: string;
  description: string;
}

export interface SectionFeaturePerksProps {
  perks?: FeaturePerk[];
}

const defaultPerks: FeaturePerk[] = [
  {
    id: "high-quality",
    icon: Trophy,
    title: "High Quality",
    description: "crafted from top materials"
  },
  {
    id: "warranty-protection",
    icon: ShieldCheck,
    title: "Warranty Protection",
    description: "Over 2 years"
  },
  {
    id: "free-shipping",
    icon: Truck,
    title: "Free Shipping",
    description: "Order over 150 $"
  },
  {
    id: "support",
    icon: Headphones,
    title: "24 / 7 Support",
    description: "Dedicated support"
  }
];

export function SectionFeaturePerks({ perks = defaultPerks }: SectionFeaturePerksProps) {
  return (
    <section className="bg-[#faf3ea] py-9.5">
      <div className="mx-auto grid w-[min(1334px,calc(100%-32px))] gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((perk, index) => {
          const Icon = perk.icon;
          return (
            <div key={perk.id || index} className="flex items-center gap-3 text-[#242424]">
              <Icon className="h-12 w-12 shrink-0" strokeWidth={1.5} />
              <div>
                <Heading asComponent="h3" className="text-[25px] font-semibold leading-tight">
                  {perk.title}
                </Heading>
                <Text variant="muted" weight="medium" className="text-xl">
                  {perk.description}
                </Text>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
