import { SectionHero, SectionHeroProps } from "@/features/home/components/section-hero";
import { Fragment } from "react/jsx-runtime";
import { AppCts } from "@/appcts";
import { SectionCategories } from "@/features/home/components/section-categories";
import {
  SectionBottomBanner,
  SectionBottomBannerProps
} from "@/features/home/components/section-bottom-banner";
import {
  SectionOurProducts,
  SectionOurProductsProps
} from "@/features/home/components/section-our-products";

const sectionHeroData: SectionHeroProps = {
  bgImageUrl: "images/home/home-22.jpg",
  shopNavLabel: "Buy Now",
  shopNavLinkUrl: AppCts.Routes.Shop
};

const sectionBottomBannerData: SectionBottomBannerProps = {
  shopNavLinkUrl: AppCts.Routes.Shop,
  shopNavLabel: "Explore More",
  banner1ImgUrl: "images/home/home-08.png",
  banner2ImgUrl: "images/home/home-12.png"
};

const sectionOurProductsProps: SectionOurProductsProps = {
  shopNavLinkUrl: AppCts.Routes.Shop,
  shopNavLabel: "Show More"
};

export function HomePage() {
  return (
    <Fragment>
      <SectionHero {...sectionHeroData} />
      <SectionCategories />
      <SectionOurProducts {...sectionOurProductsProps} />
      <SectionBottomBanner {...sectionBottomBannerData}></SectionBottomBanner>
    </Fragment>
  );
}
