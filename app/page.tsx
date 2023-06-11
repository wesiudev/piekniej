import { GalleryGrid } from "./components/GalleryGrid";
import { Announcer } from "./components/Announcer";
import { Reserve } from "./components/Reserve";
import ServicesGrid from "./components/ServicesGrid";
import { getServicesList } from "./lib/getServicesList";

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
