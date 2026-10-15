import type z from "zod";
import type { SignInSchema } from "./schemas/sign-in-schema";
import type { SignUpSchema } from "./schemas/sign-up-schema";

export type SignInFormData = z.infer<typeof SignInSchema>;
export type SignUpFormData = z.infer<typeof SignUpSchema>;
