import { z } from "zod";

const productValidationSchema = z.object({
  body: z.object({
    image: z.string().nonempty({ message: "Image is required" }),
    name: z.string().nonempty({ message: "Name is required" }),
    description: z.string().nonempty({ message: "Description is required" }),
    brand: z.string().nonempty({ message: "Brand is required" }),
    quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
    price: z.number().min(0, { message: "Price must be at least 0" }),
    rating: z.number().min(0, { message: "Rating is required" }),
  }),
});

const productUpdateValidationSchema = z.object({
  body: z.object({
    image: z.string().optional(),
    name: z.string().optional(),
    description: z.string().optional(),
    brand: z.string().optional(),
    quantity: z
      .number()
      .min(1, { message: "Quantity must be at least 1" })
      .optional(),
    price: z
      .number()
      .min(0, { message: "Price must be at least 0" })
      .optional(),
    rating: z.number().min(0, { message: "Rating is required" }).optional(),
  }),
});

export const productValudations = {
  productValidationSchema,
  productUpdateValidationSchema,
};
