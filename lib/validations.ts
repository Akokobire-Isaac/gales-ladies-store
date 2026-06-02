import { z } from "zod";

export const checkoutSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Enter a valid Ghana phone number")
    .regex(/^(\+233|0)[0-9]{9}$/, "Use format 0249938095 or +233249938095"),
  address: z.string().min(5, "Please enter your full delivery address"),
  deliveryLocation: z.string().min(2, "Please specify your delivery area"),
});

export type CheckoutSchema = z.infer<typeof checkoutSchema>;
