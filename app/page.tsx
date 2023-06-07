import { Footer } from "@/app/components/Footer";
import { Header } from "./components/Header";
import { GalleryGrid } from "./components/GalleryGrid";
import { Announcer } from "./components/Announcer";
import { Reserve } from "./components/Reserve";
import { ServicesGrid } from "./components/ServicesGrid";
async function getData() {
  const req = await fetch(
    "https://main--grand-pothos-cf1bca.netlify.app/services.json"
  );
  // Recommendation: handle errors
  if (!req.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const services = req.json();
  return services;
}
export default async function Home() {
  const { services } = await getData();
  console.log(services);
  return (
    <>
      {" "}
      {/* <Header /> */}
      <GalleryGrid />
      <Announcer />
      <ServicesGrid services={services} />
      <Reserve />
      <Footer />
    </>
  );
}
