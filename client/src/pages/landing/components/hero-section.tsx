import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LightRays from "@/components/ui/LightRays";
import { useTheme } from "@/providers/theme-provider";
import { ArrowUpRight } from "lucide-react";
import { Mockup } from "./mockup";

const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <div className="relative overflow-hidden">
      {theme === "dark" && (
        <div className="absolute inset-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#3c68f1"
            raysSpeed={0.4}
            lightSpread={0.4}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1.4}
            saturation={1}
          />
        </div>
      )}
      <div className="relative max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto text-center z-30 pt-28 md:pt-36 lg:pt-44 px-6">
        <div className="flex flex-col gap-6">
          {/* Animated Announcement */}
          <div className="mx-auto w-fit rounded-full p-px bg-conic-gradient animate-rotate-border">
            <div className="group h-8 w-fit px-1 py-0.5 bg-muted dark:bg-background flex items-center justify-center gap-2 rounded-full border border-primary/30 duration-200 ">
              <Badge variant="default" className="p-3">
                Latest update
              </Badge>

              <AnimatedShinyText className="mr-2 inline-flex items-center justify-center text-sm">
                <span>This demo is version 1.1</span>
                <ArrowUpRight className="ml-1 size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>
          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tight leading-[0.97]">
            Your Documents, <br />
            Powered by <span className="text-primary">Intelligence.</span>
          </h1>
          {/* Hero Description */}
          <p className="mx-auto max-w-sm text-center text-sm leading-[1.4] text-muted-foreground sm:max-w-lg sm:text-base md:max-w-2xl">
            Your PDFs are no longer static files they become interactive
            knowledge bases. Upload a document and instantly unlock the ability
            to ask questions and explore its content.
          </p>
          {/* Hero CTA */}
          <div className="flex justify-center items-center gap-4">
            <Button className="button">Get started now</Button>
            <Button variant={"outline"} className="button">
              Learn more
            </Button>
          </div>
          {/* Mockup */}
          <Mockup />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
