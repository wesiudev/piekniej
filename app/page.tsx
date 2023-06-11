import { GalleryGrid } from "./components/GalleryGrid";
import { Announcer } from "./components/Announcer";
import { Reserve } from "./components/Reserve";
import { ServicesGrid } from "./components/ServicesGrid";
async function getServicesList() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/services`);
  // Recommendation: handle errors
  if (!req.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const services = req.json();
  return services;
}
export default async function Home() {
  const { services } = await getServicesList();
  return (
    <>
      <GalleryGrid />
      <Announcer />
      <ServicesGrid services={services} />
      <Reserve />
    </>
  );
}
