import { SectionPageHero, SectionPageHeroProps } from "@/components/sections/section-page-hero";
import { SectionFeaturePerks } from "@/components/sections/section-feature-perks";
import { SectionCartItems } from "@/features/cart/components/section-cart-items";
import { SectionCartTotals } from "@/features/cart/components/section-cart-totals";
import { AppCts } from "@/appcts";

const sectionPageHeroProps: SectionPageHeroProps = {
  currentPageTitle: "Cart",
  fromPageTitle: "Cart",
  fromPageUrl: AppCts.Routes.Home,
  logoUrl: "images/common/common-01.png",
  bgImageUrl: "images/common/common-10.jpg"
};

export function CartPage() {
  return (
    <div className="bg-white">
      <SectionPageHero {...sectionPageHeroProps} />

      <section className="py-18">
        <div className="mx-auto w-[min(1240px,calc(100%-32px))] grid gap-8 lg:grid-cols-[1fr_393px] items-start">
          <SectionCartItems />
          <SectionCartTotals />
        </div>
      </section>

      <SectionFeaturePerks />
    </div>
  );
}
