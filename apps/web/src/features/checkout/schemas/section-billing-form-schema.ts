import { z } from "zod";

export const sectionBillingFormSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  companyName: z.string().optional(),
  country: z.string().min(1, "Country / Region is required."),
  streetAddress: z.string().min(1, "Street address is required."),
  townCity: z.string().min(1, "Town / City is required."),
  province: z.string().min(1, "Province is required."),
  zipCode: z.string().min(1, "ZIP code is required."),
  phone: z.string().min(1, "Phone number is required."),
  email: z.email("Invalid email address."),
  additionalInfo: z.string().optional()
});

export type SectionBillingFormValues = z.infer<typeof sectionBillingFormSchema>;
