import { describe, it, expect } from "vitest";
import { sectionBillingFormSchema } from "./section-billing-form-schema";

describe("sectionBillingFormSchema", () => {
  const validData = {
    firstName: "John",
    lastName: "Doe",
    country: "Indonesia",
    streetAddress: "123 Main St",
    townCity: "Jakarta",
    province: "Western Province",
    zipCode: "10110",
    phone: "08123456789",
    email: "john@example.com"
  };

  it("should validate complete valid billing data", () => {
    const result = sectionBillingFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should reject missing required fields", () => {
    const result = sectionBillingFormSchema.safeParse({});
    expect(result.success).toBe(false);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      expect(fieldErrors.firstName).toBeDefined();
      expect(fieldErrors.lastName).toBeDefined();
      expect(fieldErrors.email).toBeDefined();
    }
  });

  it("should reject invalid email format", () => {
    const result = sectionBillingFormSchema.safeParse({
      ...validData,
      email: "invalid-email"
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.email).toEqual(["Invalid email address."]);
    }
  });
});
