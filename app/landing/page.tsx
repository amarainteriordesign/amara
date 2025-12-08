import Header from "@/components/layout/Header";
import HeroLanding from "@/components/pages/landing/HeroLanding";
import ContactSection from "@/components/pages/landing/ContactSection";
import Studio from "@/components/pages/landing/Studio";
import ContactUs from "@/components/pages/landing/ContactUs";
import Projects from "@/components/pages/landing/Projects";
import ImageFooter from "@/components/layout/ImageFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing",
  description:
    "Amara imagine des espaces d'architecture et d'intérieur où le calme, la matière et la lumière composent des lieux à vivre durables.",
};

export default function Landing() {
  return (
    <>
      <Header />

      <HeroLanding />

      <ContactSection />

      <Studio />

      <ContactUs />

      <Projects />

      <ImageFooter isDarkHeaderByDefault={true} image="/images/pages/home/hero-2.png" />
    </>
  );
}
