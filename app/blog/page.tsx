import { RecentPosts } from "./components/RecentPosts";
import moment from "moment";
export default async function Blog() {
  const posts = await getData();
  return (
    <div className="w-[90vw] mx-auto">
      <div className="lg:w-1/2">
        <RecentPosts posts={posts.posts} />
      </div>
    </div>
  );
}

export async function getData() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog`);
  // Recommendation: handle errors
  if (!req.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = req.json();
  return data;
}
