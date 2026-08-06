import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Field, FieldError, Input, Label } from "@react-workshop/ui/input";
import { Button } from "@react-workshop/ui/button";
import { useToastStore } from "@/stores/use-toast-store";
import {
  sectionContactFormSchema,
  SectionContactFormValues
} from "../schemas/section-contact-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export function ContactForm() {
  const form = useForm<SectionContactFormValues>({
    resolver: zodResolver(sectionContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (values: SectionContactFormValues) => {
      await new Promise((resolve) => window.setTimeout(resolve, 600));
      return values;
    },
    onSuccess: (data) => {
      useToastStore
        .getState()
        .success("Submitted successfully!", `Thank you ${data.name}, your message has been sent.`);
      form.reset();
    },
    onError() {
      useToastStore.getState().danger("Something went wrong. Please try again");
    }
  });

  return (
    <form
      className="grid gap-9"
      onSubmit={form.handleSubmit((values) => contactMutation.mutate(values))}
    >
      <Field>
        <Label htmlFor="contact-name" className="grid gap-5 font-medium text-black">
          Your name
        </Label>
        <Input
          id="contact-name"
          isInvalid={Boolean(form.formState.errors.name)}
          className="h-18.75 rounded-[10px] border border-muted px-8 font-normal outline-none focus:border-brand"
          placeholder="Abc"
          {...form.register("name")}
        />
        <FieldError>{form.formState.errors.name?.message}</FieldError>
      </Field>

      <Field>
        <Label htmlFor="contact-email" className="grid gap-5 font-medium text-black">
          Email address
        </Label>
        <Input
          id="contact-email"
          type="email"
          isInvalid={Boolean(form.formState.errors.email)}
          className="h-18.75 rounded-[10px] border border-muted px-8 font-normal outline-none focus:border-brand"
          placeholder="abc@def.com"
          {...form.register("email")}
        />
        <FieldError>{form.formState.errors.email?.message}</FieldError>
      </Field>

      <Field>
        <Label htmlFor="contact-subject" className="grid gap-5 font-medium text-black">
          Subject
        </Label>
        <Input
          id="contact-subject"
          className="h-18.75 rounded-[10px] border border-muted px-8 font-normal outline-none focus:border-brand"
          placeholder="This is optional"
          {...form.register("subject")}
        />
        <FieldError>{form.formState.errors.subject?.message}</FieldError>
      </Field>

      <Field>
        <Label htmlFor="contact-message" className="grid gap-5 font-medium text-black">
          Message
        </Label>
        <textarea
          id="contact-message"
          className="min-h-30 rounded-[10px] border border-muted px-8 py-6 font-normal outline-none focus:border-brand"
          placeholder="Hi, I would like to ask about"
          {...form.register("message")}
        />
        <FieldError>{form.formState.errors.message?.message}</FieldError>
      </Field>

      <Button
        className="h-13.75 w-59.25 rounded bg-brand text-white hover:bg-[#9d7626] transition-colors cursor-pointer"
        isLoading={contactMutation.isPending}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
