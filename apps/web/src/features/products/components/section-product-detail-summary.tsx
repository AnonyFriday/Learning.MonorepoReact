import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Heading } from "@react-workshop/ui/heading";
import { Text } from "@react-workshop/ui/text";
import { Button } from "@react-workshop/ui/button";
import { Image } from "@react-workshop/ui/image";
import { useToastStore } from "@/stores/use-toast-store";
import { LoadingSpinner } from "@/components/spinner/loading-spinner";
import { useProductDetails } from "../hooks/use-product-details";

export function SectionProductDetailSummary() {
  const { id = "1" } = useParams<{ id: string }>(); // fake id, for testing purpose
  const { data: product, isLoading, isError } = useProductDetails(id);

  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  const toast = useToastStore();

  useEffect(() => {
    if (product) {
      if (product.images?.[0]) setSelectedImage(product.images[0]);
      if (product.sizes?.[0]) setSelectedSize(product.sizes[0]);
      if (product.colors?.[0]?.name) setSelectedColor(product.colors[0].name);
    }
  }, [product]);

  if (isLoading) {
    return <LoadingSpinner label="Loading product details..." />;
  }

  if (isError || !product) {
    return (
      <section className="py-24 text-center">
        <Text variant="muted" className="text-danger">
          Failed to load product details.
        </Text>
      </section>
    );
  }

  const handleAddToCart = () => {
    toast.success(
      "Added to Cart!",
      `${product.name} (${selectedSize}, ${selectedColor}, qty: ${quantity}) added.`
    );
  };

  return (
    <section className="py-9">
      <div className="mx-auto grid w-[min(1240px,calc(100%-32px))] gap-20 lg:grid-cols-[553px_1fr]">
        <div className="grid gap-8 sm:grid-cols-[76px_1fr]">
          <div className="grid grid-cols-4 gap-8 sm:grid-cols-1">
            {product.images?.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(img)}
                className={`cursor-pointer rounded-[10px] overflow-hidden border-2 transition-all ${
                  selectedImage === img ? "border-brand" : "border-transparent"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="h-20 w-20 bg-beige object-cover"
                />
              </button>
            ))}
          </div>
          <div className="grid min-h-125 place-items-center rounded-[10px] bg-beige p-8">
            <Image
              src={selectedImage || product.images?.[0] || ""}
              alt={product.name}
              className="max-h-107.5 w-full object-contain"
            />
          </div>
        </div>

        <div>
          <Heading asComponent="h1" size="4xl" weight="normal" className="text-[42px]">
            {product.name}
          </Heading>
          <Text size="2xl" weight="medium" variant="muted" className="mt-2 text-2xl">
            {product.price}
          </Text>

          {product.rating ? (
            <div className="mt-4 flex items-center gap-5">
              <span className="text-xl font-medium text-[#ffc700]">{product.rating}.0 / 5</span>
              <span className="h-8 w-px bg-muted" />
              <Text variant="muted" size="sm">
                {product.reviewCount ?? 0} Customer Review
              </Text>
            </div>
          ) : null}

          <Text variant="body" className="mt-5 max-w-106 text-sm leading-6">
            {product.description}
          </Text>

          {product.sizes?.length ? (
            <div className="mt-6">
              <Text variant="muted" size="sm" className="mb-3">
                Size
              </Text>
              <div className="flex gap-4">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`h-7.5 w-7.5 rounded text-sm font-medium transition-colors cursor-pointer ${
                      selectedSize === sz
                        ? "bg-brand text-white"
                        : "bg-beige text-black hover:bg-line"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {product.colors?.length ? (
            <div className="mt-5">
              <Text variant="muted" size="sm" className="mb-3">
                Color
              </Text>
              <div className="flex gap-4">
                {product.colors.map((clr) => (
                  <button
                    key={clr.name}
                    type="button"
                    onClick={() => setSelectedColor(clr.name)}
                    aria-label={clr.name}
                    style={{ backgroundColor: clr.hex }}
                    className={`h-7.5 w-7.5 rounded-full transition-transform cursor-pointer ${
                      selectedColor === clr.name ? "ring-2 ring-brand ring-offset-2 scale-110" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-5 border-b border-line pb-14">
            <div className="flex h-16 items-center rounded-[10px] border border-muted">
              <button
                type="button"
                className="px-4 text-xl cursor-pointer hover:text-brand"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="px-5 font-medium">{quantity}</span>
              <button
                type="button"
                className="px-4 text-xl cursor-pointer hover:text-brand"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="h-16 px-12 text-xl font-normal"
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          </div>

          <div className="mt-10 grid gap-3">
            {product.sku ? (
              <Text variant="muted" size="sm">
                SKU : {product.sku}
              </Text>
            ) : null}
            {product.category ? (
              <Text variant="muted" size="sm">
                Category : {product.category}
              </Text>
            ) : null}
            {product.tags?.length ? (
              <Text variant="muted" size="sm">
                Tags : {product.tags.join(", ")}
              </Text>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
