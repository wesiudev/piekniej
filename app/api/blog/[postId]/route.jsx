import { getBlogPosts } from "@/firebase";
import { NextResponse } from "next/server";
export async function GET(req, { params }) {
  const posts = await getBlogPosts();
  const post = posts.posts.find((post) => post.postId === params.postId);

  return NextResponse.json(post);
}
