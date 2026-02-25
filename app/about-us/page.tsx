import Header from "@/components/layout/Header";
import Hero from "@/components/pages/studio/Hero";
import Story from "@/components/pages/studio/Story";
import ExpandingImage from "@/components/common/ExpandingImage";
import Experiences from "@/components/pages/studio/Experiences";
import ContactUs from "@/components/pages/studio/ContactUs";
import ImageFooter from "@/components/layout/ImageFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Le studio Amara conçoit des lieux sur-mesure, ancrés dans leur contexte, où matériaux naturels et détails soignés créent des expériences durables.",
};

export default function AboutUs() {
  return (
    <>
      <Header isDark={true} />

      <Hero />

      <Story />

      <ExpandingImage quote="Each project begins with a sense of place. We listen before we draw, to the light, the rhythm, the layers of history and emotion that shape a space. It's not about imposing a style, but revealing what already exists beneath the surface. From ancient textures to modern flows, we let the spirit of each location guide the design, making every detail feel both grounded and personal." />

      <Experiences />

      <ContactUs />

      <ImageFooter image="/images/pages/home/hero-2.png" isDarkHeaderByDefault={true} />
    </>
  );
}
