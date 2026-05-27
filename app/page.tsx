import Header from "@/components/layout/Header";
import Hero from "@/components/pages/home/Hero";
import Services from "@/components/pages/home/Services";
import AboutUs from "@/components/pages/home/Studio";
import Projects from "@/components/pages/home/Projects";
import Contact from "@/components/pages/home/Contact";
import ClientsCarousel from "@/components/pages/landing/ClientsCarousel";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Interior Design Studio Miami & Dubai",
  description:
    "Amara Interior Design — luxury residential & hospitality interiors in Miami, Dubai & Paris. Bespoke furniture procurement and full-service design worldwide.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <AboutUs />

      <Services />

      <Projects clickable />

      <ClientsCarousel />

      <Contact />

      <Footer />
    </>
  );
}
