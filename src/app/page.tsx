import FloatingCTA from "@/components/FloatingCTA";
import "./globals.css";

import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import FAQ from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <FloatingCTA />
    </main>
  );
}
