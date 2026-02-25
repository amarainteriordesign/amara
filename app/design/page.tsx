import Header from "@/components/layout/Header";
import Hero from "@/components/pages/design/Hero";
import Design from "@/components/pages/design/Design";
import ExpandingImage from "@/components/common/ExpandingImage";
import Approach from "@/components/pages/design/Approach";
import Projects from "@/components/pages/home/Projects";
import DesignContact from "@/components/pages/design/Contact";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design",
  description:
    "Our approach places listening, materials, and light at the heart of every project. Discover Amara's design principles and the philosophy that guides our work.",
};

export default function DesignPage() {
  return (
    <>
      <Header isDark={true} />

      <div className="w-full bg-[#1A1A1E]">
        <Hero />

        <Design />

        <ExpandingImage linkTo="/studio" />

        <Approach />

        <Projects />

        <DesignContact />

        <Footer />
      </div>
    </>
  );
}
