import getBlogData from "@/app/lib/getBlogData";
import { NextResponse } from "next/server";
export async function GET(req, { params }) {
  try {
    const posts = await getBlogData();
    const post = posts.posts.find((post) => post.postId === params.postId);
    console.log(post);
    if (!post) {
      return new NextResponse("not found", { status: 404 });
    }

    return NextResponse.json({
      post,
    });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
