import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon, LoaderCircleIcon } from "lucide-react";
import { motion } from "motion/react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SignUpSchema } from "../schemas/sign-up-schema";
import type { SignUpFormData } from "../types";

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    console.log(data);
  };

  const isBusy = isSubmitting || isLoading;

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input
          className="w-full h-10 rounded-md border border-input bg-transparent!"
          id="name"
          autoComplete="name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-400 text-xs" role="alert">
            {errors.name.message}
          </p>
        )}
      </Field>
      <Field>
        <FieldLabel htmlFor="signup-email">Email</FieldLabel>
        <Input
          className="w-full h-10 rounded-md border border-input bg-transparent!"
          id="signup-email"
          type="email"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-400 text-xs" role="alert">
            {errors.email.message}
          </p>
        )}
      </Field>
      <Field>
        <FieldLabel htmlFor="signup-password">Password</FieldLabel>
        <div className="relative">
          <Input
            className="w-full h-10 rounded-md border border-input bg-transparent! pr-10"
            id="signup-password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            {...register("password")}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={showPassword ? "Hide passwords" : "Show passwords"}
            aria-pressed={showPassword}
            onClick={() => setShowPassword((visible) => !visible)}
          >
            {showPassword ? (
              <EyeOffIcon aria-hidden="true" className="size-4" />
            ) : (
              <EyeIcon aria-hidden="true" className="size-4" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-400 text-xs" role="alert">
            {errors.password.message}
          </p>
        )}
      </Field>
      <Field>
        <FieldLabel htmlFor="confirm-password">Confirm password</FieldLabel>
        <Input
          className="w-full h-10 rounded-md border border-input bg-transparent!"
          id="confirm-password"
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-red-400 text-xs" role="alert">
            {errors.confirmPassword.message}
          </p>
        )}
      </Field>
      <Button disabled={isBusy} className="button">
        {isBusy && <LoaderCircleIcon className="animate-spin" />}
        {isBusy ? "Creating account..." : "Sign up"}
      </Button>
    </motion.form>
  );
};
