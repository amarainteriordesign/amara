import Header from "@/components/layout/Header";
import Hero from "@/components/pages/home/Hero";
import Contact from "@/components/pages/home/Contact";
import ContactSection from "@/components/pages/landing/ContactSection";
import ContactUs from "@/components/pages/landing/ContactUs";
import ImageFooter from "@/components/layout/ImageFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing",
  description:
    "Amara designs interior spaces where calm, material, and light create enduring places to live.",
};

export default function Landing() {
  return (
    <>
      
      <Header />

      <Hero />

      <Contact />

      <ContactSection />

      <ContactUs />

      <ImageFooter isDarkHeaderByDefault={true} image="/images/pages/home/hero-2.png" />
    </>
  );
}
