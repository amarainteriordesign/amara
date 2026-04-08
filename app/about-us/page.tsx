import Header from "@/components/layout/Header";
import HeroAbout from "@/components/pages/about-us/HeroAbout";
import AboutSection from "@/components/pages/about-us/AboutSection";
import ExpandingImageAbout from "@/components/pages/about-us/ExpandingImageAbout";
import ContactAbout from "@/components/pages/about-us/ContactAbout";
import Projects from "@/components/pages/home/Projects";
import ImmersiveJourney from "@/components/pages/about-us/ImmersiveJourney";
import TeamAbout from "@/components/pages/about-us/TeamAbout";
import QuoteAbout from "@/components/pages/about-us/QuoteAbout";
import ContactUs from "@/components/pages/landing/ContactUs";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Amara Interior Design Studio",
  description:
    "Meet the Amara Interior Design team — luxury bespoke interiors with natural materials and timeless design in Miami, Dubai & Paris.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUs() {
  return (
    <>
      <Header />

      <HeroAbout />

      <AboutSection />

      <ExpandingImageAbout />

      <ContactAbout />

      <Projects />

      <ImmersiveJourney />

      <TeamAbout />

      <QuoteAbout />

      <div className="relative z-[12]">
        <ContactUs />

        <Footer />
      </div>
    </>
  );
}
