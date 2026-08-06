import { api } from "@/api";
import { HttpError } from "@react-workshop/http-client";

type Product = {
  id: string | number;
  name: string;
  category?: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  badge?: string;
};

export type ProductResponse = { items: Product[]; total: number | string };

export async function getProductsDisplay() {
  try {
    return await api.get<ProductResponse>("https://dummyjson.com/c/2d4a-99bb-4ae3-8799");
  } catch (error) {
    if (error instanceof HttpError) {
      throw new Error(error.message);
    }
    throw error;
  }
}
