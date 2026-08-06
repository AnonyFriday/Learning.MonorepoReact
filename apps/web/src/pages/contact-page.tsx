import { SectionPageHero, SectionPageHeroProps } from "@/components/sections/section-page-hero";
import { SectionFeaturePerks } from "@/components/sections/section-feature-perks";
import { SectionContactForm } from "@/features/contact/components/section-contact-form";
import { AppCts } from "@/appcts";

const sectionPageHeroProps: SectionPageHeroProps = {
  currentPageTitle: "Contact",
  fromPageTitle: "Contact",
  fromPageUrl: AppCts.Routes.Home,
  logoUrl: "images/common/common-01.png",
  bgImageUrl: "images/home/home-20.png"
};

export function ContactPage() {
  return (
    <>
      <SectionPageHero {...sectionPageHeroProps} />
    

      <SectionContactForm />
      <SectionFeaturePerks />
    </>
  );
}
