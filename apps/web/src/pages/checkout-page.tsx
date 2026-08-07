import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SectionPageHero, SectionPageHeroProps } from "@/components/sections/section-page-hero";
import { SectionFeaturePerks } from "@/components/sections/section-feature-perks";
import { SectionBillingDetails } from "@/features/checkout/components/section-billing-details";
import { SectionCheckoutOrderSummary } from "@/features/checkout/components/section-checkout-order-summary";
import {
  sectionBillingFormSchema,
  SectionBillingFormValues
} from "@/features/checkout/schemas/section-billing-form-schema";
import { postCreateOrder, CreateOrderPayload } from "@/features/checkout/api/post-create-order";
import { useCartStore } from "@/stores/use-cart-store";
import { useToastStore } from "@/stores/use-toast-store";
import { AppCts } from "@/appcts";
import { useNavigate } from "react-router";

const sectionPageHeroProps: SectionPageHeroProps = {
  currentPageTitle: "Checkout",
  fromPageTitle: "Checkout",
  fromPageUrl: AppCts.Routes.Home,
  logoUrl: "images/common/common-01.png",
  bgImageUrl: "images/common/common-10.jpg"
};

export function CheckoutPage() {
  const form = useForm<SectionBillingFormValues>({
    resolver: zodResolver(sectionBillingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      country: "Sri Lanka / Indonesia",
      streetAddress: "",
      townCity: "",
      province: "Western Province",
      zipCode: "",
      phone: "",
      email: "",
      additionalInfo: ""
    }
  });

  const items = useCartStore((state) => state.items);
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const clearCart = useCartStore((state) => state.clearCart);
  const toast = useToastStore();
  const navigate = useNavigate();

  const orderMutation = useMutation({
    mutationFn: (payload: CreateOrderPayload) => postCreateOrder(payload),
    onSuccess: (data) => {
      clearCart();
      toast.success("Order Placed!", `Order ID: ${data.orderId}. Thank you for shopping with us.`);
      navigate(AppCts.Routes.Home);
    },
    onError: (error) => {
      toast.danger("Order Failed", error.message || "Failed to place order. Please try again.");
    }
  });

  const onSubmit = (values: SectionBillingFormValues) => {
    orderMutation.mutate({
      billingDetails: values,
      items: Object.values(items),
      subtotal: getSubtotal()
    });
  };

  return (
    <div className="bg-white">
      <SectionPageHero {...sectionPageHeroProps} />

      <section className="py-18">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto w-[min(1240px,calc(100%-32px))] grid gap-14 lg:grid-cols-[1fr_533px] items-start"
        >
          <SectionBillingDetails register={form.register} errors={form.formState.errors} />
          <SectionCheckoutOrderSummary
            onPlaceOrder={form.handleSubmit(onSubmit)}
            isSubmitting={orderMutation.isPending}
          />
        </form>
      </section>

      <SectionFeaturePerks />
    </div>
  );
}
