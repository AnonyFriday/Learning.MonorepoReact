import { Heading } from "@react-workshop/ui/heading";
import { Text } from "@react-workshop/ui/text";
import { ContactInfo } from "./contact-info";
import { ContactForm } from "./contact-form";

export function SectionContactForm() {
  return (
    <section className="py-24">
      <div className="mx-auto w-[min(1058px,calc(100%-32px))]">
        <div className="mx-auto mb-20 max-w-161 text-center">
          <Heading asComponent="h2" size="4xl" weight="semibold" className="text-4xl">
            Get In Touch With Us
          </Heading>
          <Text variant="muted" className="mt-2">
            For more information about our product and services, please feel free to drop us an
            email. Our staff will always be there to help you out.
          </Text>
        </div>
        <div className="grid gap-14 lg:grid-cols-[393px_1fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
