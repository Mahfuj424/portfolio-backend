import { z } from "zod";

// Zod schema for user validation
export const userValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  image: z.string(),
  role: z.enum(["user", "admin"]).optional(),
});
