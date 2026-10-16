import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { SignInFormData } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "../schemas/sign-in-schema";
import { EyeIcon, EyeOffIcon, LoaderCircleIcon } from "lucide-react";
import { motion } from "motion/react";
export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInSchema),
  });
  const handleTogglePasswordVisibility = () =>
    setShowPassword((visible) => !visible);
  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    console.log(data);
  };
  const isBusy = isSubmitting || isLoading;
  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input
          className="w-full h-10 rounded-md border border-input bg-transparent!"
          id="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-400 peer-aria-invalid:text-destructive text-xs">
            {errors.email.message}
          </p>
        )}
      </Field>
      <Field>
        <FieldLabel htmlFor="password">Password</FieldLabel>
        <div className="relative">
          <Input
            className="w-full h-10 rounded-md border border-input bg-transparent! pr-10"
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
            onClick={handleTogglePasswordVisibility}
          >
            {showPassword ? (
              <EyeOffIcon aria-hidden="true" className="size-4" />
            ) : (
              <EyeIcon aria-hidden="true" className="size-4" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-400 peer-aria-invalid:text-destructive text-xs">
            {errors.password.message}
          </p>
        )}
        <Button
          type="button"
          variant="link"
          className="text-sm justify-end text-muted-foreground hover:text-foreground duration-200 cursor-pointer"
        >
          Forget Password?
        </Button>
      </Field>
      <Button disabled={isBusy} className="button">
        {isBusy && <LoaderCircleIcon className="animate-spin" />}
        {isBusy ? "Loading..." : "Sign in"}
      </Button>
    </motion.form>
  );
};
