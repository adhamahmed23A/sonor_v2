import { Marquee } from "@/components/ui/marquee";
import { TRUSTED_LOGOS } from "@/constants/trusted-brands";

export const TrustedSection = () => {
  return (
    <div className="section-container mt-18 relative overflow-hidden">
      <Marquee pauseOnHover className="[--duration:50s]">
        {TRUSTED_LOGOS.map((logo) => (
          <>
            <img
              key={`${logo.slug}-light`}
              alt={logo.name}
              src={logo.lightSrc}
              className="h-9 md:h-10 ml-8 dark:hidden"
            />
            <img
              key={`${logo.slug}-dark`}
              alt={logo.name}
              src={logo.darkSrc}
              className="h-9 opacity-85 ml-8 not-dark:hidden md:h-10"
            />
          </>
        ))}
      </Marquee>

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
  );
};
