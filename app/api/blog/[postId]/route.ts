import { getBlogPosts } from "@/firebase";
import { NextResponse } from "next/server";
export async function GET({ params }:any) {
  const posts = await getBlogPosts();
  const post = posts.posts.find((post:any) => post.postId === params.postId);
  console.log(post);
  if (!post) {
    return new NextResponse("not found", { status: 404 });
  }

  return NextResponse.json({
    post,
  });
}
