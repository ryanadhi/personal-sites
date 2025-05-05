import { NextResponse } from "next/server";
import monthlyLabelData from "@/app/api/data/fuels/monthly-label-data.json" assert { type: "json" };

interface MonthlyLabel {
  [key: string]: string[];
}
const data: MonthlyLabel = monthlyLabelData;


export const runtime = "edge";
const YEAR = 2024; // TODO: Hardcoded for now

export async function GET() {
  try {
    return NextResponse.json(data[YEAR.toString()]);
  } catch (error) {
    console.error("Error fetching fuel data:", error);
    return NextResponse.error();
  }
}
