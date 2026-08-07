import { useState } from "react";
import { useParams } from "react-router";
import { Text } from "@react-workshop/ui/text";
import { Image } from "@react-workshop/ui/image";
import { useProductDetails } from "../hooks/use-product-details";

type TabKey = "description" | "additionalInfo" | "reviews";

export function SectionProductTabs() {
  const { id = "1" } = useParams<{ id: string }>();
  const { data: product } = useProductDetails(id);

  const [activeTab, setActiveTab] = useState<TabKey>("description");

  if (!product) return null;

  return (
    <section className="border-y border-line py-12">
      <div className="mx-auto w-[min(1026px,calc(100%-32px))]">
        <div className="mb-9 flex flex-wrap justify-center gap-14 text-2xl">
          <button
            type="button"
            onClick={() => setActiveTab("description")}
            className={`cursor-pointer transition-colors ${
              activeTab === "description" ? "font-medium text-black" : "text-muted hover:text-black"
            }`}
          >
            Description
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("additionalInfo")}
            className={`cursor-pointer transition-colors ${
              activeTab === "additionalInfo"
                ? "font-medium text-black"
                : "text-muted hover:text-black"
            }`}
          >
            Additional Information
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("reviews")}
            className={`cursor-pointer transition-colors ${
              activeTab === "reviews" ? "font-medium text-black" : "text-muted hover:text-black"
            }`}
          >
            Reviews [{product.reviewCount ?? 0}]
          </button>
        </div>

        {activeTab === "description" ? (
          <div>
            <Text variant="muted" className="mb-7 text-justify leading-relaxed">
              {product.longDescription || product.description}
            </Text>
            {product.images?.length ? (
              <div className="grid gap-7 md:grid-cols-2">
                {product.images.slice(0, 2).map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt={`Detail view ${idx + 1}`}
                    className="h-87 w-full rounded-[10px] bg-beige object-cover"
                  />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}

        {activeTab === "additionalInfo" ? (
          <div className="rounded-lg bg-beige p-6">
            <Text variant="body" className="leading-relaxed">
              {product.additionalInfo || "No additional information available."}
            </Text>
          </div>
        ) : null}

        {activeTab === "reviews" ? (
          <div className="grid gap-4">
            <Text weight="medium">Customer Reviews ({product.reviewCount ?? 0})</Text>
          </div>
        ) : null}
      </div>
    </section>
  );
}
