import { api } from "@/api";
import { HttpError } from "@react-workshop/http-client";

export type ProductDetailColor = {
  name: string;
  hex: string;
};

export type ProductDetail = {
  id: string | number;
  name: string;
  price: string;
  originalPrice?: string;
  rating?: number;
  reviewCount?: number;
  description: string;
  sizes: string[];
  colors: ProductDetailColor[];
  images: string[];
  sku?: string;
  category?: string;
  tags?: string[];
  longDescription?: string;
  additionalInfo?: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getProductDetails(id: string | number) {
  // For testing purpose, only use the static link, don't use the statis file
  try {
    return await api.get<ProductDetail>("/c/9be0-8e8d-43b7-8432");
  } catch (error) {
    if (error instanceof HttpError) {
      throw new Error(error.message);
    }
    throw error;
  }
}
