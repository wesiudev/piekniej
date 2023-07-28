import { GalleryGrid } from "./components/GalleryGrid";
import { Announcer } from "./components/Announcer";
import { Reserve } from "./components/Reserve";
import { ServicesGrid } from "./components/ServicesGrid";
import BlogInviter from "./components/BlogInviter";
import AboutQuality from "./components/carousel/AboutQuality";
import { carousel } from "@/public/carousel.json";
async function getServicesList() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/services`);

  const services = req.json();
  return services;
}

async function getBlogData() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog`);
  const data = req.json();
  return data;
}

export default async function Home() {
  const { services } = await getServicesList();
  const { posts } = await getBlogData();
  return (
    <>
      <GalleryGrid />
      <Announcer />
      <ServicesGrid services={services} />
      <Reserve />
      <AboutQuality carousel={carousel} />
      <BlogInviter posts={posts.posts} />
    </>
  );
}
