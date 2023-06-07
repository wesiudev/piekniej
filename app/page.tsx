import { Footer } from "@/app/components/Footer";
import { Header } from "./components/Header";
import { GalleryGrid } from "./components/GalleryGrid";
import { Announcer } from "./components/Announcer";
import { Reserve } from "./components/Reserve";
import { ServicesGrid } from "./components/ServicesGrid";
export default async function Home() {
  const req = await fetch("http://localhost:3000/api/data");
  const services = await req.json();
  return (
    <>
      {" "}
      <Header />
      <GalleryGrid />
      <Announcer />
      <ServicesGrid services={services.services} />
      <Reserve />
      <Footer />
    </>
  );
}
