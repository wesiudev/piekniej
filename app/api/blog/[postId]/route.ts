import { IPost } from "@/app/blog/components/RecentPosts";
import { getBlogPosts } from "@/firebase";
import { NextResponse } from "next/server";
export async function GET(params: any) {
  const posts = await getBlogPosts();
  const post = posts.posts.find((post:IPost) => post.postId === params.postId);

  return NextResponse.json(post);
}
