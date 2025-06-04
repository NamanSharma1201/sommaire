import DemoSection from "@/components/home/demo-section";
import HeroSection from "@/components/home/hero-section";
import BgGradiant from "@/components/ui/common/bg-gradient";
export default function Home() {
  return (
    <div className="realtive w-full">
      <BgGradiant />
      <div className="flex flex-col ">
        <HeroSection />
        <DemoSection />
      </div>
    </div>
  );
}
