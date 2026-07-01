import { NextResponse } from "next/server";
import { getFlights } from "@/lib/services/aviationService";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const airline = searchParams.get("airline") || "all";
  const airport = searchParams.get("airport") || "all";

  const data = getFlights({ airline, airport });

  const total = data.length;

  const avgDelay =
    data.reduce((acc, f) => acc + f.delay, 0) / total || 0;

  const onTime =
    (data.filter((f) => f.onTime >= 80).length / total) * 100 || 0;

  return NextResponse.json({
    success: true,
    data: {
      flights: total,
      avgDelay: Math.round(avgDelay),
      onTime: Math.round(onTime),
      airports: new Set(data.map((f) => f.airport)).size,
    },
  });
}