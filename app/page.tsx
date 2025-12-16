import Calculator from "@/components/sections/Calculator";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Packages from "@/components/sections/Packages";
import TestimonialCard from "@/components/sections/Testimonials";

export default function Home() {
  return (
      <>
      <Hero />
      <Packages/>
      <HowItWorks/>
      <TestimonialCard/>
      <Calculator />
      <CTA />
      <Footer />
      </>
  );
}
