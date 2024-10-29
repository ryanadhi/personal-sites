import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface MonthlyLabel {
  [key: string]: string[];
}
const YEAR = 2024; // TODO: Hardcoded for now
export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      `app/api/data/fuels/monthly-label-data.json`
    );

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      throw new Error("Data file not found");
    }

    const jsonData = fs.readFileSync(filePath, "utf-8");
    const monthlyLabelData: MonthlyLabel = JSON.parse(jsonData);

    return NextResponse.json(monthlyLabelData[YEAR.toString()]);
  } catch (error) {
    console.error("Error fetching fuel data:", error);
    return NextResponse.error();
  }
}
