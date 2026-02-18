import Header from "@/components/layout/Header";
import HeroLanding from "@/components/pages/landing/HeroLanding";
import ContactLanding from "@/components/pages/landing/ContactLanding";

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

      <HeroLanding />

      <ContactLanding />

      <ContactUs />

      <ImageFooter isDarkHeaderByDefault={true} image="/images/pages/home/hero-2.png" />
    </>
  );
}
