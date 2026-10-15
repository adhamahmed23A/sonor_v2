import { FeaturesSection } from "./components/features-section";
import FooterSection from "./components/footer-section";
import HeroSection from "./components/hero-section";
import PriceSection from "./components/price-section";
import { TrustedSection } from "./components/trusted-section";

export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <FeaturesSection />
      <h1>Usage</h1>
      <PriceSection />
      <FooterSection />
    </>
  );
};
