import { useCartStore, CartItem } from "@/stores/use-cart-store";
import { AppCts } from "@/appcts";
import { Trash2, ShoppingBag, Plus, Minus } from "lucide-react";
import { NavLink } from "react-router";
import { Button as UIButton } from "@react-workshop/ui/button";
import { Heading } from "@react-workshop/ui/heading";
import { Text } from "@react-workshop/ui/text";
import { Image as UIImage } from "@react-workshop/ui/image";
import { formatCurrency, parsePrice } from "@react-workshop/ui/src/utils";

export function SectionCartItems() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const cartList: CartItem[] = Object.values(items);

  if (cartList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 py-16 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F9F1E7]">
          <ShoppingBag className="h-8 w-8 text-[#B88E2F]" />
        </div>
        <Heading asComponent="h3" size="xl" weight="semibold" className="text-black">
          Your cart is empty
        </Heading>
        <Text variant="muted" size="sm" className="mt-2 max-w-xs">
          Looks like you haven't added any products to your cart yet.
        </Text>
        <NavLink to={AppCts.Routes.Shop} className="mt-6">
          <UIButton variant="primary" className="px-8 py-3 font-medium">
            Explore Products
          </UIButton>
        </NavLink>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#F9F1E7] text-base font-semibold text-black h-14">
            <th className="py-4 px-6 rounded-l">Product</th>
            <th className="py-4 px-4">Price</th>
            <th className="py-4 px-4 text-center">Quantity</th>
            <th className="py-4 px-4">Subtotal</th>
            <th className="py-4 px-4 rounded-r w-14"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {cartList.map((item) => {
            const itemPrice = parsePrice(item.price);
            const itemSubtotal = itemPrice * item.quantity;

            return (
              <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="py-6 px-6">
                  <div className="flex items-center gap-4">
                    <NavLink to={AppCts.Routes.Product(item.id)} className="shrink-0">
                      <UIImage
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 rounded-lg bg-[#F9F1E7] object-cover"
                      />
                    </NavLink>
                    <div>
                      <NavLink to={AppCts.Routes.Product(item.id)}>
                        <Text
                          weight="medium"
                          className="text-black hover:text-[#B88E2F] transition-colors"
                        >
                          {item.name}
                        </Text>
                      </NavLink>
                      {(item.selectedSize || item.selectedColor) && (
                        <Text variant="muted" size="xs" className="mt-1 block">
                          {item.selectedSize ? `Size: ${item.selectedSize}` : ""}
                          {item.selectedSize && item.selectedColor ? " | " : ""}
                          {item.selectedColor ? `Color: ${item.selectedColor}` : ""}
                        </Text>
                      )}
                    </div>
                  </div>
                </td>
                <td className="py-6 px-4">
                  <Text size="base" className="text-[#9F9F9F]">
                    {formatCurrency(itemPrice)}
                  </Text>
                </td>
                <td className="py-6 px-4">
                  <div className="mx-auto flex h-9 w-24 items-center justify-between rounded-md border border-gray-300 px-2 text-sm">
                    <UIButton
                      variant="secondary"
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 border-none text-gray-500 hover:text-black bg-transparent hover:bg-transparent shadow-none cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </UIButton>
                    <Text weight="medium" className="text-black">
                      {item.quantity}
                    </Text>
                    <UIButton
                      variant="secondary"
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 border-none text-gray-500 hover:text-black bg-transparent hover:bg-transparent shadow-none cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </UIButton>
                  </div>
                </td>
                <td className="py-6 px-4">
                  <Text size="base" weight="medium" className="text-black">
                    {formatCurrency(itemSubtotal)}
                  </Text>
                </td>
                <td className="py-6 px-4 text-right">
                  <UIButton
                    variant="secondary"
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="p-1 border-none text-[#B88E2F] hover:text-red-600 bg-transparent hover:bg-transparent shadow-none cursor-pointer"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 className="h-5 w-5" />
                  </UIButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
