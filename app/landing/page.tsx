import Header from "@/components/layout/Header";
import HeroLanding from "@/components/pages/landing/HeroLanding";
import AboutLanding from "@/components/pages/landing/AboutLanding";
import ContactLanding from "@/components/pages/landing/ContactLanding";
import ContactUs from "@/components/pages/landing/ContactUs";
import ServicesLanding from "@/components/pages/landing/ServicesLanding";
import ProjectsLanding from "@/components/pages/landing/ProjectsLanding";
import Footer from "@/components/layout/Footer";
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

      <HeroLanding />

      <AboutLanding />

      <ContactLanding />

      <ContactUs />

      <ServicesLanding />

      <ProjectsLanding />

      <Footer bgColor="#E8E0D6" />
    </>
  );
}
