import { Link } from "react-router";

export interface SectionPageHeroProps {
  currentPageTitle: string;
  fromPageTitle: string;
  fromPageUrl: string;
  bgImageUrl?: string;
  logoUrl?: string;
}

export function SectionPageHero({
  currentPageTitle,
  fromPageTitle,
  fromPageUrl,
  bgImageUrl = "/images/common/common-10.jpg",
  logoUrl = "/images/common/common-01.png"
}: SectionPageHeroProps) {
  return (
    <section className="relative grid min-h-79 place-items-center overflow-hidden">
      <img className="absolute inset-0 h-full w-full object-cover" src={bgImageUrl} alt="" />
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[1px]"></div>
      <div className="relative text-center">
        {logoUrl && <img className="mx-auto mb-1 h-12 w-12 object-contain" src={logoUrl} alt="" />}
        <h1 className="text-5xl font-medium">{fromPageTitle}</h1>
        <p className="mt-3 font-medium">
          <Link to={fromPageUrl} className="hover:text-brand">
            Home
          </Link>{" "}
          <span className="mx-1">&gt;</span>
          <span className="font-light">{currentPageTitle}</span>
        </p>
      </div>
    </section>
  );
}
