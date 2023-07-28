import { GalleryGrid } from "./components/GalleryGrid";
import { Announcer } from "./components/Announcer";
import { Reserve } from "./components/Reserve";
import { ServicesGrid } from "./components/ServicesGrid";
import BlogInviter from "./components/BlogInviter";
import AboutQuality from "./components/carousel/AboutQuality";
import Carousel from "./components/carousel/Carousel";
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
async function getCarouselData() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/carousel`);
  // Recommendation: handle errors
  if (!req.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const carousel = req.json();
  return carousel;
}

async function getBlogData() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog`);
  const data = req.json();
  return data;
}

export default async function Home() {
  const { services } = await getServicesList();
  const { carousel } = await getCarouselData();
  const { posts } = await getBlogData();
  return (
    <>
      <GalleryGrid />
      <Announcer />
      <ServicesGrid services={services} />
      <Reserve />
      <Carousel carousel={carousel} />
      <BlogInviter posts={posts.posts} />
    </>
  );
}
