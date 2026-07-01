import { NextResponse } from "next/server";
import { getFlights } from "@/lib/services/aviationService";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const airline = searchParams.get("airline") || "all";
  const airport = searchParams.get("airport") || "all";

  const data = getFlights({ airline, airport });

  return NextResponse.json({
    success: true,
    source: "hybrid-dataset",
    count: data.length,
    data,
  });
}