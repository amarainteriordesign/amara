import Header from "@/components/layout/Header";
import Hero from "@/components/pages/design/Hero";
import ImageFooter from "@/components/layout/ImageFooter";
import Design from "@/components/pages/design/Design";
import Contact from "@/components/common/Contact";
import ExpandingImage from "@/components/common/ExpandingImage";
import Approach from "@/components/pages/design/Approach";
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

        <Contact />

        <ImageFooter
          isDarkHeaderByDefault={true}
          addDarkHeader={true}
          image="/images/pages/design/footer.png"
        />
      </div>
    </>
  );
}
