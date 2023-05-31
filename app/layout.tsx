"use client";
import { Parisienne } from "next/font/google";
const parisienne = Parisienne({
  weight: "400",
  variable: "--font-persisienne",
  subsets: ["latin"],
});
import "./globals.css";
import localFont from "next/font/local";
import { Footer } from "@/app/components/Footer";
import { Header } from "./components/Header";
import { GalleryGrid } from "./components/GalleryGrid";
import { Announcer } from "./components/Announcer";
import { Reserve } from "./components/Reserve";
import { ServicesGrid } from "./components/ServicesGrid/";

const cocosharp = localFont({
  src: [
    {
      path: "../public/fonts/Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../public/fonts/Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Regular.ttf",
      weight: "500",
    },
  ],
  variable: "--font-cocosharp",
});

export const dynamic = "force-dynamic";
export const revalidate = 0;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`${cocosharp.variable} ${parisienne.variable}
       w-full `}
      >
        <Header />
        <GalleryGrid />
        <Announcer />
        {children}
        <ServicesGrid />
        <Reserve />
        <Footer />
      </body>
    </html>
  );
}
