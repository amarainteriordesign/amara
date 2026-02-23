import Header from "@/components/layout/Header";
import Hero from "@/components/pages/sourcing/Hero";
import AboutSourcing from "@/components/pages/sourcing/AboutSourcing";
import PrinciplesSourcing from "@/components/pages/sourcing/PrinciplesSourcing";
import BoutiqueGrid from "@/components/pages/sourcing/BoutiqueGrid";
import ProcessSourcing from "@/components/pages/sourcing/ProcessSourcing";
import Services from "@/components/pages/home/Services";
import Studio from "@/components/pages/home/Studio";
import Projects from "@/components/pages/home/Projects";
import Contact from "@/components/pages/home/Contact";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Procurement",
  description:
    "Amara procurement services – luxury furniture, materials, and design elements sourced globally for high-end residential and commercial projects.",
};

export default function Procurement() {
  return (
    <>
      <Header />

      <Hero />

      <AboutSourcing />

      <PrinciplesSourcing />

      <BoutiqueGrid />

      <ProcessSourcing />

      <Studio />

      <Services />

      <Projects />

      <Contact />

      <Footer />
    </>
  );
}
