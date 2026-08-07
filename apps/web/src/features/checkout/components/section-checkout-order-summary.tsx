import { useState } from "react";
import { useCartStore, CartItem } from "@/stores/use-cart-store";
import { Button as UIButton } from "@react-workshop/ui/button";
import { Heading } from "@react-workshop/ui/heading";
import { Text } from "@react-workshop/ui/text";
import { formatCurrency, parsePrice } from "@react-workshop/ui/src/utils";

export interface SectionCheckoutOrderSummaryProps {
  onPlaceOrder: () => void;
  isSubmitting?: boolean;
}

export function SectionCheckoutOrderSummary({
  onPlaceOrder,
  isSubmitting = false
}: SectionCheckoutOrderSummaryProps) {
  const items = useCartStore((state) => state.items);
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const cartList: CartItem[] = Object.values(items);
  const subtotal = getSubtotal();

  const [paymentMethod, setPaymentMethod] = useState<string>("bank");

  return (
    <div className="py-4">
      <div className="border-b border-gray-200 pb-8 space-y-6">
        <div className="flex justify-between items-center pb-2">
          <Heading asComponent="h3" size="2xl" weight="medium" className="text-[24px] text-black">
            Product
          </Heading>
          <Heading asComponent="h3" size="2xl" weight="medium" className="text-[24px] text-black">
            Subtotal
          </Heading>
        </div>

        {cartList.map((item) => {
          const itemPrice = parsePrice(item.price);
          const itemTotal = itemPrice * item.quantity;

          return (
            <div key={item.id} className="flex justify-between items-center text-base">
              <Text className="text-[#9F9F9F]">
                <span className="text-black">{item.name}</span>{" "}
                <span className="text-xs font-medium text-black">x {item.quantity}</span>
              </Text>
              <Text weight="medium" className="text-black">
                {formatCurrency(itemTotal)}
              </Text>
            </div>
          );
        })}

        <div className="flex justify-between items-center pt-2">
          <Text className="text-base font-normal text-black">Subtotal</Text>
          <Text className="text-base font-normal text-black">{formatCurrency(subtotal)}</Text>
        </div>

        <div className="flex justify-between items-center pt-2">
          <Text className="text-base font-normal text-black">Total</Text>
          <Text size="2xl" weight="bold" className="text-[24px] text-[#B88E2F]">
            {formatCurrency(subtotal)}
          </Text>
        </div>
      </div>

      {/* Payment Options */}
      <div className="pt-8 space-y-6">
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="bank"
              checked={paymentMethod === "bank"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="h-4 w-4 accent-black cursor-pointer"
            />
            <Text
              weight="medium"
              className={`text-base ${paymentMethod === "bank" ? "text-black" : "text-[#9F9F9F]"}`}
            >
              Direct Bank Transfer
            </Text>
          </label>

          {paymentMethod === "bank" && (
            <Text variant="muted" className="text-sm leading-6 text-[#9F9F9F]">
              Make your payment directly into our bank account. Please use your Order ID as the
              payment reference. Your order will not be shipped until the funds have cleared in our
              account.
            </Text>
          )}

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="check"
              checked={paymentMethod === "check"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="h-4 w-4 accent-black cursor-pointer"
            />
            <Text
              weight="medium"
              className={`text-base ${paymentMethod === "check" ? "text-black" : "text-[#9F9F9F]"}`}
            >
              Direct Bank Transfer
            </Text>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="h-4 w-4 accent-black cursor-pointer"
            />
            <Text
              weight="medium"
              className={`text-base ${paymentMethod === "cod" ? "text-black" : "text-[#9F9F9F]"}`}
            >
              Cash On Delivery
            </Text>
          </label>

          {paymentMethod === "cod" && (
            <Text variant="muted" className="text-sm leading-6 text-[#9F9F9F]">
              Pay with cash upon delivery of your order.
            </Text>
          )}
        </div>

        <Text variant="muted" className="text-sm leading-6 text-black">
          Your personal data will be used to support your experience throughout this website, to
          manage access to your account, and for other purposes described in our{" "}
          <span className="font-semibold text-black">privacy policy</span>.
        </Text>

        <div className="pt-6 text-center">
          <UIButton
            variant="outline"
            onClick={onPlaceOrder}
            disabled={cartList.length === 0 || isSubmitting}
            className="w-full max-w-78 border-black text-black hover:bg-black hover:text-white transition-colors py-4 text-xl rounded-2xl cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? "Placing Order..." : "Place order"}
          </UIButton>
        </div>
      </div>
    </div>
  );
}
