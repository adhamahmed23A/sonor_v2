import { StickyBanner } from "./ui/sticky-banner";
import { ArrowRightIcon } from "lucide-react";
export const Banner = () => {
  return (
    <>
      <StickyBanner className="min-h-fit py-2 border-b bg-background/60 backdrop-blur-md">
        <p className="flex items-center gap-1 text-sm text-muted-foreground">
          This website demo is developed by
          <a
            href="https://github.com/adhamahmed23A"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center text-foreground font-medium underline underline-offset-4 hover:text-primary transition-colors duration-200"
          >
            Adham Ahmed <ArrowRightIcon className="ml-1 size-4" />
          </a>
        </p>
      </StickyBanner>
    </>
  );
};
