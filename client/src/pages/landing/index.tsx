import { FeaturesSection } from "./components/features-section";
import HeroSection from "./components/hero-section";
import { TrustedSection } from "./components/trusted-section";
import UsageSection from "./components/usage-section";

export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <FeaturesSection />
      <UsageSection />
      <h1>Pricing</h1>
      <h1>Footer</h1>
    </>
  );
};
