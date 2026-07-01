import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: [
      { id: "ethiopian", name: "Ethiopian Airlines" },
      { id: "ram", name: "Royal Air Maroc" },
      { id: "aircotedivoire", name: "Air Côte d'Ivoire" },
      { id: "kenya", name: "Kenya Airways" },
    ],
  });
}