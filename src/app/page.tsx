import Advantages from "@/components/Advantages";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Phones from "@/components/Phones";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="space-y-20 overflow-hidden">
      <Hero />
      <Features />
      <Advantages />
      <Testimonials />
      <Faq />
      <Phones />
      <Footer />
    </div>
  );
}
