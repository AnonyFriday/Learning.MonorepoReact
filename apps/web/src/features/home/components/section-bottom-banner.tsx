import { Button as UIButton } from "@react-workshop/ui/button";
import { Heading } from "@react-workshop/ui/heading";
import { Image } from "@react-workshop/ui/image";
import { Text } from "@react-workshop/ui/text";
import { NavLink } from "react-router";

export interface SectionBottomBannerProps {
  banner1ImgUrl: string;
  banner2ImgUrl: string;
  shopNavLinkUrl: string;
  shopNavLabel: string;
}

export function SectionBottomBanner({
  banner1ImgUrl,
  banner2ImgUrl,
  shopNavLinkUrl: shopLinkUrl,
  shopNavLabel: shopLabel
}: SectionBottomBannerProps) {
  return (
    <section className="bg-[#fcf8f3] py-11">
      <div className="mx-auto grid w-[min(1240px,calc(100%-32px))] items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <Heading asComponent="h2" size="4xl" weight="bold" className="text-[40px]">
            50+ Beautiful rooms inspiration
          </Heading>
          <Text
            variant="muted"
            weight="medium"
            className="mt-2 max-w-92.5 leading-6 text-[#616161]"
          >
            Our designer already made a lot of beautiful prototype of rooms that inspire you.
          </Text>
          <NavLink to={shopLinkUrl} className="mt-6 inline-block">
            <UIButton variant="primary" className="px-9 py-3 font-semibold">
              {shopLabel || "Explore More"}
            </UIButton>
          </NavLink>
        </div>
        <div className="grid gap-6 md:grid-cols-[404px_1fr]">
          <div className="relative">
            <Image
              className="h-145.5"
              variant="card"
              src={banner1ImgUrl || "images/home/home-10.png"}
              alt="Room inspiration"
            />
            <div className="absolute bottom-6 left-6 flex">
              <div className="bg-white/80 px-8 py-8">
                <Text variant="muted">01 - Bed Room</Text>
                <Heading asComponent="h3" size="2xl" weight="semibold" className="mt-2 text-[28px]">
                  Inner Peace
                </Heading>
              </div>
              <div className="grid w-12 place-items-center self-end bg-brand py-4 text-white">
                -&gt;
              </div>
            </div>
          </div>
          <Image
            className="hidden h-121.5 md:block"
            variant="card"
            src={banner2ImgUrl || "images/home/home-11.png"}
            alt="Room"
          />
        </div>
      </div>
    </section>
  );
}
