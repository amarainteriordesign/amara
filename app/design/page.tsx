import Header from "@/components/layout/Header";
import Hero from "@/components/pages/sourcing/Hero";
import AboutSourcing from "@/components/pages/sourcing/AboutSourcing";
import PrinciplesSourcing from "@/components/pages/sourcing/PrinciplesSourcing";
import BoutiqueGrid from "@/components/pages/sourcing/BoutiqueGrid";
import Services from "@/components/pages/home/Services";
import Studio from "@/components/pages/home/Studio";
import Projects from "@/components/pages/home/Projects";
import Contact from "@/components/pages/home/Contact";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design",
  description:
    "Amara design services – luxury interior design for high-end residential and commercial projects worldwide.",
};

export default function Design() {
  return (
    <>
      <Header />

      <Hero />

      <AboutSourcing />

      <PrinciplesSourcing />

      <BoutiqueGrid />

      <Studio />

      <Services />

      <Projects />

      <Contact />

      <Footer />
    </>
  );
}
