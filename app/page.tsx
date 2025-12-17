import Calculator from "@/components/sections/Calculator";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import TestimonialCard from "@/components/sections/Testimonials";
import TierPackageSection from "@/components/sections/TierPackageSection";

export default function Home() {
  return (
      <>
      <Hero />
      <HowItWorks/>
      <TierPackageSection/>
      <TestimonialCard/>
      <Calculator />
      <CTA />
      <Footer />
      </>
  );
}
