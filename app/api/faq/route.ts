import { NextResponse } from "next/server";
import faq from "@/public/faq.json";

export async function GET() {
  try {
    if (!faq) {
      return new NextResponse("not found", { status: 404 });
    }
    if (faq) {
      return NextResponse.json({
        faq,
      });
    }
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
