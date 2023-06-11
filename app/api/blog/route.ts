import { getBlogPosts } from "@/firebase/"
import { NextResponse } from "next/server";

export async function GET() {
    try {
    const posts = await getBlogPosts();
    return NextResponse.json({ posts: posts })
} catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}