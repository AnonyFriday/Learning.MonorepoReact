import { api } from "@/api";
import { HttpError } from "@react-workshop/http-client";

type ProductDisplay = {
  id: string | number;
  name: string;
  category?: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  badge?: string;
};

export type ProductDisplayResponse = { items: ProductDisplay[]; total: number | string };

export async function getProductsDisplay() {
  try {
    return await api.get<ProductDisplayResponse>("/c/dcf2-213f-4173-ab26");
  } catch (error) {
    if (error instanceof HttpError) {
      throw new Error(error.message);
    }
    throw error;
  }
}
