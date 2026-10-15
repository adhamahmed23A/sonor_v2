import { useState } from "react";
import { SocialButtons } from "./components/social-buttons";
import { Separator } from "@/components/ui/separator";
import { SignInForm } from "./components/sign-in-form";
import { SignUpForm } from "./components/sign-up-form";

const AuthPage = () => {
  const [currentForm, setCurrentForm] = useState<"Sign in" | "Sign up">(
    "Sign in",
  );
  const handleToggleForm = () => {
    setCurrentForm((prevForm) =>
      prevForm === "Sign in" ? "Sign up" : "Sign in",
    );
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg">
          {currentForm === "Sign in"
            ? "Sign in to your account"
            : "Create a new account"}
        </h1>
        <p className="text-sm text-muted-foreground flex gap-1">
          {currentForm === "Sign in"
            ? "Don't have an account?"
            : "Already have an account?"}
          <button
            type="button"
            className="text-foreground text-hover duration-200 cursor-pointer"
            onClick={handleToggleForm}
          >
            {currentForm === "Sign in" ? " Sign up" : " Sign in"}
          </button>
        </p>
      </div>
      <SocialButtons />
      <div className="relative flex items-center gap-2">
        <Separator className="flex-1" />
        <span className="text-muted-foreground shrink-0 px-2 text-sm ">
          or continue with
        </span>
        <Separator className="flex-1" />
      </div>
      {currentForm === "Sign in" ? <SignInForm /> : <SignUpForm />}
    </div>
  );
};

export default AuthPage;
