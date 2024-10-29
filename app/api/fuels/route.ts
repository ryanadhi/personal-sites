import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Price {
  monthText: string;
  price: number;
  priceText: string;
}

interface Fuel {
  id: number;
  name: string;
  year: number;
  prices: Price[];
}

const YEAR = 2024; // TODO: Hardcoded for now

const getFuelData = (
  type: "pertalite" | "pertamax" | "pertamax-turbo"
): number[] => {
  const filePath = path.join(
    process.cwd(),
    `app/api/data/fuels/${type}-data.json`
  );

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    throw new Error("Data file not found");
  }

  const jsonData = fs.readFileSync(filePath, "utf-8");
  const fuelData: Fuel[] = JSON.parse(jsonData);

  // TODO: Add logic to filter data based on year
  const monthlyData = fuelData.filter((fuel) => fuel.year === YEAR);

  if (monthlyData.length === 0) {
    throw new Error("Data not found for the given year");
  }

  const priceData = monthlyData[0].prices.map((price) => price.price);

  return priceData;
};

export async function GET() {
  // const { searchParams } = new URL(request.url);
  // const type = searchParams.get("type") || "";
  // const year = parseInt(searchParams.get("year") || "", 10);

  // if (!type || isNaN(year)) {
  //   return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });
  // }

  try {
    const pertaliteData = getFuelData("pertalite");
    const pertamaxData = getFuelData("pertamax");
    const pertamaxTurboData = getFuelData("pertamax-turbo");

    const data = {
      pertalite: pertaliteData,
      pertamax: pertamaxData,
      "pertamax-turbo": pertamaxTurboData,
    };
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching fuel data:", error);
    return NextResponse.error();
  }
}
