import { NavLink } from "react-router";
import { Heading } from "@react-workshop/ui/heading";
import { Text } from "@react-workshop/ui/text";
import { CardCategory } from "./card-category";

const categories = [
  {
    navLink: "shop?category=Dining",
    categoryName: "Dining",
    cateogyrImgUrl: "images/home/home-04.png"
  },
  {
    navLink: "shop?category=Living",
    categoryName: "Living",
    cateogyrImgUrl: "images/home/home-08.png"
  },
  {
    navLink: "shop?category=Bedroom",
    categoryName: "Bedroom",
    cateogyrImgUrl: "images/home/home-12.png"
  }
];

export function SectionCategories() {
  return (
    <section className="py-14">
      <div className="mx-auto w-[min(1183px,calc(100%-32px))]">
        <div className="mb-12 text-center">
          <Heading
            asComponent="h2"
            variant="section"
            size="3xl"
            weight="bold"
            className="text-[32px]"
          >
            Browse The Range
          </Heading>
          <Text size="xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((e, idx) => (
            <CardCategory
              key={idx}
              asComponent={NavLink}
              categoryName={e.categoryName}
              categoryImgUrl={e.cateogyrImgUrl}
              to={e.navLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
