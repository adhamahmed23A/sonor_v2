import { Button } from "@/components/ui/button";

export const SocialButtons = () => {
  return (
    <>
      <div className="flex gap-4 justify-between items-center">
        <Button className="button" variant="outline">
          <img
            src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-icon.png?width=20&height=20&format=auto"
            alt="Google Icon"
            className="size-5"
          />
          <span className="flex flex-1 justify-center">
            Continue with Google
          </span>
        </Button>
        <Button className="button" variant="outline">
          <img
            src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/github-icon.png?width=20&height=20&format=auto"
            alt="GitHub Icon"
            className="size-5 dark:invert"
          />
          <span className="flex flex-1 justify-center">
            Continue with GitHub
          </span>
        </Button>
      </div>
    </>
  );
};
