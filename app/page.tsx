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
  title: "Accueil",
  description:
    "Amara imagine des espaces d’architecture et d’intérieur où le calme, la matière et la lumière composent des lieux à vivre durables.",
};

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <AboutUs />

      <Services />

      <Projects />

      <ClientsCarousel />

      <Contact />

      <Footer />
    </>
  );
}
