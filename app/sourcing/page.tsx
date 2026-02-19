import Header from "@/components/layout/Header";
import Hero from "@/components/pages/home/Hero";
import Services from "@/components/pages/home/Services";
import Studio from "@/components/pages/home/Studio";
import Projects from "@/components/pages/home/Projects";
import Contact from "@/components/pages/home/Contact";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sourcing",
  description:
    "Amara sourcing services – luxury furniture, materials, and design elements sourced globally for high-end residential and commercial projects.",
};

export default function Sourcing() {
  return (
    <>
      <Header />

      <Hero />

      <Studio />

      <Services />

      <Projects />

      <Contact />

      <Footer />
    </>
  );
}
