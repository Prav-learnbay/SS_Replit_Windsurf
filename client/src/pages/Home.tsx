import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MBTICompatibility from "@/components/MBTICompatibility";
import AIMatching from "@/components/AIMatching";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans text-neutral-800 bg-neutral-100">
      <Navbar />
      <Hero />
      <MBTICompatibility />
      <AIMatching />
      <Features />
      <Testimonials />
      <FAQ />
      <SignupForm />
      <Footer />
    </div>
  );
}
