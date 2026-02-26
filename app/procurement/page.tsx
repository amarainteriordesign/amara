import Header from "@/components/layout/Header";
import Hero from "@/components/pages/procurement/Hero";
import AboutProcurement from "@/components/pages/procurement/AboutProcurement";
import PrinciplesProcurement from "@/components/pages/procurement/PrinciplesProcurement";
import BoutiqueGrid from "@/components/pages/procurement/BoutiqueGrid";
import Contact from "@/components/pages/home/Contact";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Procurement",
  description:
    "Amara procurement services – luxury furniture, materials, and design elements procured globally for high-end residential and commercial projects.",
  alternates: {
    canonical: "/procurement",
  },
};

export default function Procurement() {
  return (
    <>
      <Header />

      <Hero />

      <AboutProcurement />

      <PrinciplesProcurement />

      <BoutiqueGrid />

      <Contact />

      <Footer />
    </>
  );
}
