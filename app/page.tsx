import { GalleryGrid } from "./components/GalleryGrid";
import { Announcer } from "./components/Announcer";
import { Reserve } from "./components/Reserve";
import { ServicesGrid } from "./components/ServicesGrid";

export default async function Home() {
  return (
    <>
      <GalleryGrid />
      <Announcer />
      <ServicesGrid />
      <Reserve />
    </>
  );
}
