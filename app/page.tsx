import { GalleryGrid } from "./components/GalleryGrid";
import { Announcer } from "./components/Announcer";
import { Reserve } from "./components/Reserve";
import { getServicesList } from "./lib/getServicesList";

export default async function Home() {
  return (
    <>
      <GalleryGrid />
      <Announcer />
      <Reserve />
    </>
  );
}
