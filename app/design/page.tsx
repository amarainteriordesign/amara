import Header from "@/components/layout/Header";
import Hero from "@/components/pages/design/Hero";
import Design from "@/components/pages/design/Design";
import ExpandingImage from "@/components/common/ExpandingImage";
import Approach from "@/components/pages/design/Approach";
import Projects from "@/components/pages/home/Projects";
import Contact from "@/components/pages/home/Contact";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design | Amara Interior Design | Miami, Dubai & Paris",
  description:
    "Amara's design philosophy — natural materials, light and listening at the heart of every bespoke residential & hospitality project in Miami & Dubai.",
  alternates: {
    canonical: "/design",
  },
};

export default function DesignPage() {
  return (
    <>
      <Header />

      <div className="w-full bg-[#1A1A1E]">
        <Hero />

        <Design />

        <div className="bg-[#e8dfd2]">
          <ExpandingImage linkTo="/about-us" />

          <Approach />
        </div>

        <div className="bg-[#F1EBDF]">
          <Projects />
        </div>

        <Contact />

        <Footer />
      </div>
    </>
  );
}
