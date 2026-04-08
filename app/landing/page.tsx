import Header from "@/components/layout/Header";
import HeroLanding from "@/components/pages/landing/HeroLanding";
import AboutLanding from "@/components/pages/landing/AboutLanding";
import TeamLanding from "@/components/pages/landing/TeamLanding";
import ContactUs from "@/components/pages/landing/ContactUs";
import ServicesLanding from "@/components/pages/landing/ServicesLanding";
import Projects from "@/components/pages/home/Projects";
import ClientsCarousel from "@/components/pages/landing/ClientsCarousel";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amara Interior Design Studio | Miami, Dubai & Paris",
  description:
    "Amara is a luxury interior design & procurement studio in Miami, Dubai & Paris. Bespoke residential, hospitality and commercial interiors worldwide.",
  alternates: {
    canonical: "/landing",
  },
};

export default function Landing() {
  return (
    <>
      
      <Header />

      <HeroLanding />

      <AboutLanding />

      <TeamLanding />

      <ServicesLanding />

      <Projects />

      <ClientsCarousel />

      <ContactUs />

      <Footer />
    </>
  );
}
