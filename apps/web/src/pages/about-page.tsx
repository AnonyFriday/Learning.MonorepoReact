import { SectionPageHero, SectionPageHeroProps } from "@/components/sections/section-page-hero";
import { SectionFeaturePerks } from "@/components/sections/section-feature-perks";
import { SectionAboutStudio } from "@/features/about/components/section-about-studio";
import { SectionAboutHighlights } from "@/features/about/components/section-about-highlights";
import { AppCts } from "@/appcts";

const sectionPageHeroProps: SectionPageHeroProps = {
  currentPageTitle: "About",
  fromPageTitle: "About",
  fromPageUrl: AppCts.Routes.Home,
  logoUrl: "images/common/common-01.png",
  bgImageUrl: "images/home/home-20.png"
};

export function AboutPage() {
  return (
    <>
      <SectionPageHero {...sectionPageHeroProps} />
      <SectionAboutStudio />
      <SectionAboutHighlights />
      <SectionFeaturePerks />
    </>
  );
}
