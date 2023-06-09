import { IPost } from "@/app/blog/components/RecentPosts";
import { getBlogPosts } from "@/firebase";
import { NextResponse } from "next/server";
export async function GET(req: any) {
  const posts = await getBlogPosts();
  const post = posts.posts.find((post:IPost) => post.postId === req.postId);

  return NextResponse.json(post);
}
