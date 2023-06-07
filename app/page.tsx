import { Footer } from "@/app/components/Footer";
import { GalleryGrid } from "./components/GalleryGrid";
import { Announcer } from "./components/Announcer";
import { Reserve } from "./components/Reserve";
import { ServicesGrid } from "./components/ServicesGrid";
// async function getData() {
//   const req = await fetch("http://localhost:3000/api/data");
//   // Recommendation: handle errors
//   if (!req.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   const services = req.json();
//   return services;
// }
export default async function Home() {
  // const { services } = await getData();
  // console.log(services);
  return (
    <>
      <GalleryGrid />
      <Announcer />
      <ServicesGrid />
      <Reserve />
      <Footer />
    </>
  );
}
