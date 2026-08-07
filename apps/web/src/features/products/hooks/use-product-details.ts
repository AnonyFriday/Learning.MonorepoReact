import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../api/get-product-details";

export function useProductDetails(productId: string | number) {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductDetails(productId),
    enabled: Boolean(productId)
  });
}
