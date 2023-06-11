import { NextResponse } from "next/server";
import { services } from "@/public/services.json";
export async function GET() {
  try {
    if (!services) {
      return new NextResponse("not found", { status: 404 });
    }
    if (services) {
      return NextResponse.json({
        services,
      });
    }
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
