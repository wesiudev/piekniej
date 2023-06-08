import services from "@/public/services.json";

import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(services)
  
}