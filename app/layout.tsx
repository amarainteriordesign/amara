import type { Metadata } from "next";
import { Libre_Baskerville, Libre_Caslon_Display, Lora } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

import "lenis/dist/lenis.css";
import "./globals.scss";
import ClientLayout from "@/app/client-layout";

// Primary font
// font-sans
const helveticaNeue = localFont({
  src: [
    {
      path: "../public/fonts/helvetica-neue/helvetica-neue-thin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-neue/helvetica-neue-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica-neue/helvetica-neue-medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue",
  display: "swap",
});

// Secondary font
// font-serif
const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

/** Additional fonts */
// font-display
const libreCaslonDisplay = Libre_Caslon_Display({
  variable: "--font-libre-caslon-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// font-lora
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// font-diranista
const diranista = localFont({
  src: "../public/fonts/diranista/diranista-regular.otf",
  variable: "--font-diranista",
  display: "swap",
});

// font-calvino
const calvino = localFont({
  src: "../public/fonts/calvino/calvino-regular.ttf",
  variable: "--font-calvino",
  display: "swap",
});

// font-snell-roundhand
const snellRoundhand = localFont({
  src: "../public/fonts/snell-roundhand/snell-roundhand-regular.ttf",
  variable: "--font-snell-roundhand",
  display: "swap",
});

// font-made-mirage-thin
const madeMirageThin = localFont({
  src: "../public/fonts/made-mirage/made-mirage-thin.otf",
  variable: "--font-made-mirage-thin",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amarainteriordesign.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amara — Interior Design",
    template: "%s — Amara",
  },
  description:
    "Amara creates luxury interior spaces defined by calm, balance, and meaning in Miami, Dubai, and Paris. Discover our projects, our team, and our design philosophy.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Amara — Interior Design",
    description:
      "Amara creates luxury interior spaces defined by calm, balance, and meaning in Miami, Dubai, and Paris.",
    url: "/",
    images: [
      {
        url: "/images/pages/home/hero-2.png",
        width: 1200,
        height: 630,
        alt: "Amara Interior Design luxury interiors Miami Dubai Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amara — Interior Design",
    description:
      "Amara creates luxury interior spaces defined by calm, balance, and meaning in Miami, Dubai, and Paris.",
    images: ["/images/pages/home/hero-2.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Amara Interior Design",
  url: siteUrl,
  logo: `${siteUrl}/images/pages/studio/logo.png`,
  description:
    "Amara is a luxury interior design and procurement studio specializing in bespoke residential and hospitality spaces.",
  areaServed: [
    { "@type": "City", name: "Miami" },
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Paris" },
  ],
  knowsAbout: [
    "Interior Design",
    "Luxury Residential Design",
    "Hospitality Design",
    "Furniture Procurement",
    "Bespoke Furniture",
    "Project Management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5DZD354R');`,
          }}
        />
      </head>
      <body
        className={`${helveticaNeue.variable} ${libreBaskerville.variable} ${libreCaslonDisplay.variable} ${lora.variable} ${diranista.variable} ${calvino.variable} ${snellRoundhand.variable} ${madeMirageThin.variable} max-w-screen overflow-x-hidden antialiased`}
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DZD354R"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ClientLayout>{children}</ClientLayout>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
