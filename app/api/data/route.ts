import services from "../../components/ServicesGrid/services.json";

import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(services)
  
}