import { api } from "@/api";
import { CartItem } from "@/stores/use-cart-store";
import { SectionBillingFormValues } from "../schemas/section-billing-form-schema";
import { HttpError } from "@react-workshop/http-client";

export type CreateOrderPayload = {
  billingDetails: SectionBillingFormValues;
  items: CartItem[];
  subtotal: number;
};

export type CreateOrderResponse = {
  orderId: string;
  message: string;
  status: string;
};

export async function postCreateOrder(payload: CreateOrderPayload): Promise<CreateOrderResponse> {
  try {
    return await api.post<CreateOrderResponse>(
      "https://dummyjson.com/c/9c78-27a2-4082-9b3e",
      payload
    );
  } catch (error) {
    throw error instanceof HttpError ? error : new Error("Failed to place order.");
  }
}
