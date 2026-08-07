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

export async function getProductDetails(id: string | number) {
  try {
    return await api.get<ProductDetail>("/c/9be0-8e8d-43b7-8432");
  } catch (error) {
    if (error instanceof HttpError) {
      throw new Error(error.message);
    }
    throw error;
  }
}
