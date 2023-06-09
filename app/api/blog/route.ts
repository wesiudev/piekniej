import { getBlogPosts } from "@/firebase/"
import { NextResponse } from "next/server";

export async function GET() {
    const posts = await getBlogPosts();
    return NextResponse.json(posts)
}