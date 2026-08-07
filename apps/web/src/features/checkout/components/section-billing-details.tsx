import { Heading } from "@react-workshop/ui/heading";
import { Input, Label, Field, FieldError } from "@react-workshop/ui/input";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { SectionBillingFormValues } from "@/features/checkout/schemas/section-billing-form-schema";

export interface SectionBillingDetailsProps {
  register: UseFormRegister<SectionBillingFormValues>;
  errors: FieldErrors<SectionBillingFormValues>;
}

export function SectionBillingDetails({ register, errors }: SectionBillingDetailsProps) {
  return (
    <div>
      <Heading asComponent="h2" size="4xl" weight="bold" className="text-[36px] text-black mb-9">
        Billing details
      </Heading>

      <div className="space-y-9">
        <div className="grid gap-8 sm:grid-cols-2">
          <Field>
            <Label htmlFor="firstName" className="font-medium text-black text-base mb-2">
              First Name
            </Label>
            <Input
              id="firstName"
              type="text"
              isInvalid={!!errors.firstName}
              className="h-18 rounded-lg border-gray-300 px-4 text-base"
              {...register("firstName")}
            />
            <FieldError>{errors.firstName?.message}</FieldError>
          </Field>

          <Field>
            <Label htmlFor="lastName" className="font-medium text-black text-base mb-2">
              Last Name
            </Label>
            <Input
              id="lastName"
              type="text"
              isInvalid={!!errors.lastName}
              className="h-18 rounded-lg border-gray-300 px-4 text-base"
              {...register("lastName")}
            />
            <FieldError>{errors.lastName?.message}</FieldError>
          </Field>
        </div>

        <Field>
          <Label htmlFor="companyName" className="font-medium text-black text-base mb-2">
            Company Name (Optional)
          </Label>
          <Input
            id="companyName"
            type="text"
            className="h-18 rounded-lg border-gray-300 px-4 text-base"
            {...register("companyName")}
          />
        </Field>

        <Field>
          <Label htmlFor="country" className="font-medium text-black text-base mb-2">
            Country / Region
          </Label>
          <select
            id="country"
            className="h-18 w-full rounded-lg border border-gray-300 bg-white px-4 text-base text-black focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            {...register("country")}
          >
            <option value="Sri Lanka / Indonesia">Sri Lanka / Indonesia</option>
            <option value="Vietnam">Vietnam</option>
            <option value="United States">United States</option>
          </select>
          <FieldError>{errors.country?.message}</FieldError>
        </Field>

        <Field>
          <Label htmlFor="streetAddress" className="font-medium text-black text-base mb-2">
            Street address
          </Label>
          <Input
            id="streetAddress"
            type="text"
            isInvalid={!!errors.streetAddress}
            className="h-18 rounded-lg border-gray-300 px-4 text-base"
            {...register("streetAddress")}
          />
          <FieldError>{errors.streetAddress?.message}</FieldError>
        </Field>

        <Field>
          <Label htmlFor="townCity" className="font-medium text-black text-base mb-2">
            Town / City
          </Label>
          <Input
            id="townCity"
            type="text"
            isInvalid={!!errors.townCity}
            className="h-18 rounded-lg border-gray-300 px-4 text-base"
            {...register("townCity")}
          />
          <FieldError>{errors.townCity?.message}</FieldError>
        </Field>

        <Field>
          <Label htmlFor="province" className="font-medium text-black text-base mb-2">
            Province
          </Label>
          <select
            id="province"
            className="h-18 w-full rounded-lg border border-gray-300 bg-white px-4 text-base text-black focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            {...register("province")}
          >
            <option value="Western Province">Western Province</option>
            <option value="Central Province">Central Province</option>
            <option value="Southern Province">Southern Province</option>
          </select>
          <FieldError>{errors.province?.message}</FieldError>
        </Field>

        <Field>
          <Label htmlFor="zipCode" className="font-medium text-black text-base mb-2">
            ZIP code
          </Label>
          <Input
            id="zipCode"
            type="text"
            isInvalid={!!errors.zipCode}
            className="h-18 rounded-lg border-gray-300 px-4 text-base"
            {...register("zipCode")}
          />
          <FieldError>{errors.zipCode?.message}</FieldError>
        </Field>

        <Field>
          <Label htmlFor="phone" className="font-medium text-black text-base mb-2">
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            isInvalid={!!errors.phone}
            className="h-18 rounded-lg border-gray-300 px-4 text-base"
            {...register("phone")}
          />
          <FieldError>{errors.phone?.message}</FieldError>
        </Field>

        <Field>
          <Label htmlFor="email" className="font-medium text-black text-base mb-2">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            isInvalid={!!errors.email}
            className="h-18 rounded-lg border-gray-300 px-4 text-base"
            {...register("email")}
          />
          <FieldError>{errors.email?.message}</FieldError>
        </Field>

        <Field>
          <Input
            id="additionalInfo"
            type="text"
            placeholder="Additional information"
            className="h-18 rounded-lg border-gray-300 px-4 text-base placeholder:text-gray-400 mt-4"
            {...register("additionalInfo")}
          />
        </Field>
      </div>
    </div>
  );
}
