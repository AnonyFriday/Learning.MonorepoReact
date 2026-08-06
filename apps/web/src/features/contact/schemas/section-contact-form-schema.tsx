import z from "zod";

export const sectionContactFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.email("Email address must be valid."),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required.")
});

export type SectionContactFormValues = z.infer<typeof sectionContactFormSchema>;
