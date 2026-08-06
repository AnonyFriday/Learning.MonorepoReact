import { api } from "@/api";
import { HttpError } from "@react-workshop/http-client";

type ProductFull = {
  id: string | number;
  name: string;
  category?: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  badge?: string;
};

export type ProductFullResponse = { items: ProductFull[]; total: number };

export async function getProductsFull(page: number = 1) {
  try {
    switch (page) {
      case 1:
        return await api.get<ProductFullResponse>("/c/8cfe-2d9f-4534-8c2e");
      case 2:
        return await api.get<ProductFullResponse>("/c/0ae5-f8b5-43d7-a561");
      default:
        return await api.get<ProductFullResponse>("/c/8cfe-2d9f-4534-8c2e");
    }
  } catch (error) {
    if (error instanceof HttpError) {
      throw new Error(error.message);
    }
    throw error;
  }
}
