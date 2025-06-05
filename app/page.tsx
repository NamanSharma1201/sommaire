import CtaSection from "@/components/home/cta-section";
import DemoSection from "@/components/home/demo-section";
import HeroSection from "@/components/home/hero-section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import PricingSection from "@/components/home/pricing-section";
import BgGradiant from "@/components/ui/common/bg-gradient";
export default function Home() {
  return (
    <div className="realtive w-full">
      <BgGradiant />
      <div className="flex flex-col ">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
        <CtaSection />
      </div>
    </div>
  );
}
