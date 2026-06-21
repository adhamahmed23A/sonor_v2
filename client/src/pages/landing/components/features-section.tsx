import SpotlightCard from "@/components/SpotlightCard";
import { Badge } from "@/components/ui/badge";
import { FEATURES } from "@/constants/features";
import { Stars } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <div className="section-container mt-36 flex flex-col items-center gap-4">
      {/* Announcment */}
      <Badge variant={"outline"} className="p-2.5! text-[13px]">
        <Stars />
        All Features
      </Badge>
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[0.97]">
        Built for clarity and efficiency
      </h1>
      {/* Description */}
      <p className="mx-auto max-w-sm text-center text-sm leading-[1.4] text-muted-foreground sm:max-w-lg sm:text-base md:max-w-2xl">
        Every feature is designed to help you get answers faster and correct.
        <br />
        Sonor uses AI to surface the answers buried in your document.
      </p>

      {/* Grid */}
      <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURES.map((feature) => (
          <SpotlightCard
            key={feature.title}
            className="group relative flex flex-col gap-5 rounded-xl border border-border bg-transparent p-5 transition-colors duration-200 hover:bg-background/5"
          >
            {/* Icon */}
            <div className="glassy-primary">
              <feature.icon className="icon" />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1.5">
              <h3 className="text-sm font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-[1.4] text-muted-foreground">
                {feature.description}
              </p>
            </div>

            {/* Tags */}
            <div className="mt-auto flex flex-wrap gap-1.5">
              {feature.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="rounded-full border-border px-2.5 py-0.5 text-[11px] text-muted-foreground/70"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};
