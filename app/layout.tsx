import { Parisienne } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";
import { Header } from "./components/Header";
export const metadata: Metadata = {
  title:
    "Piękniej - Pasja Manicure. Zarezerwuj manicure online Anna Żebrowska Grudziądz",
  description:
    "Zadbaj o swoje paznokcie, manicure na imprezę urodzinową, święto lub sylwestra? Zarezerwuj manicure na piekniej.pl",
  themeColor: "pink",
  publisher: "wesiudev",
  manifest: "/manifest.json",
};

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
        {" "}
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}

const parisienne = Parisienne({
  weight: "400",
  variable: "--font-persisienne",
  subsets: ["latin"],
});
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
