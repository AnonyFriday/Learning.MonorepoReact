import { NavLink } from "react-router";
import { Button as UIButton } from "@react-workshop/ui/button";
import { Heading } from "@react-workshop/ui/heading";
import { Image } from "@react-workshop/ui/image";
import { Text } from "@react-workshop/ui/text";

export type SectionHeroProps = {
  bgImageUrl: string;
  shopNavLinkUrl: string;
  shopNavLabel: string;
};

export function SectionHero({ bgImageUrl, shopNavLabel, shopNavLinkUrl }: SectionHeroProps) {
  return (
    <section className="relative min-h-716px overflow-hidden bg-beige">
      <Image src={bgImageUrl} alt="Interior room" variant="banner" />
      <div className="relative mx-auto grid grid-cols-2 min-h-716px] w-[min(1240px,calc(100%-32px))] items-center justify-items-end py-12">
        <div className="w-full col-start-2 max-w-643px rounded-[10px] bg-cream px-8 py-12 md:px-14 md:py-16">
          <Text weight="semibold" className="mb-1 tracking-[3px]">
            New Arrival
          </Text>
          <Heading
            asComponent="h1"
            variant="hero"
            weight="bold"
            className="mb-4 text-[40px] md:text-[52px]"
          >
            Discover Our New Collection
          </Heading>
          <Text size="lg" weight="medium" className="mb-11 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis.
          </Text>
          <NavLink to={shopNavLinkUrl}>
            <UIButton variant="primary" className="px-18 py-8 uppercase">
              {shopNavLabel}
            </UIButton>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
