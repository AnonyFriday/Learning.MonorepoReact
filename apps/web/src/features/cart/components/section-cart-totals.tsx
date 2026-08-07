import { useCartStore } from "@/stores/use-cart-store";
import { AppCts } from "@/appcts";
import { NavLink } from "react-router";
import { Button as UIButton } from "@react-workshop/ui/button";
import { Heading } from "@react-workshop/ui/heading";
import { Text } from "@react-workshop/ui/text";
import { formatCurrency } from "@react-workshop/ui/src/utils";

export function SectionCartTotals() {
  const items = useCartStore((state) => state.items);
  const getSubtotal = useCartStore((state) => state.getSubtotal);

  const cartList = Object.values(items);
  const subtotal = getSubtotal();

  return (
    <div className="rounded-sm bg-[#F9F1E7] p-8 sm:p-11 text-center">
      <Heading
        asComponent="h2"
        size="4xl"
        weight="semibold"
        className="text-[32px] text-black mb-10"
      >
        Cart Totals
      </Heading>

      <div className="space-y-6 mb-10 text-base">
        <div className="flex items-center justify-between">
          <Text asComponent="span" weight="medium" className="text-black">
            Subtotal
          </Text>
          <Text asComponent="span" className="text-[#9F9F9F]">
            {formatCurrency(subtotal)}
          </Text>
        </div>
        <div className="flex items-center justify-between">
          <Text asComponent="span" weight="medium" className="text-black">
            Total
          </Text>
          <Text asComponent="span" size="xl" weight="bold" className="text-[#B88E2F]">
            {formatCurrency(subtotal)}
          </Text>
        </div>
      </div>

      <NavLink to={AppCts.Routes.Checkout} className="block w-full">
        <UIButton
          variant="outline"
          className="w-full border-black text-black hover:bg-black hover:text-white transition-colors py-3.5 text-[20px] font-medium rounded-2xl cursor-pointer disabled:opacity-50"
          disabled={cartList.length === 0}
        >
          Check Out
        </UIButton>
      </NavLink>
    </div>
  );
}
