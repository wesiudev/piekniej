import { getBlogData } from "../lib/getBlogData";
import { RecentPosts } from "./components/RecentPosts";
export default async function Blog() {
  // const posts = await getBlogData();
  return (
    <div className="w-[90vw] mx-auto">
      <div className="lg:w-1/2">
        {/* <RecentPosts posts={posts.posts} /> */}
      </div>
    </div>
  );
}
