import { NextResponse } from "next/server";
import pertaliteRaw from "@/app/api/data/fuels/pertalite-data.json";
import pertamaxRaw from "@/app/api/data/fuels/pertamax-data.json";
import pertamaxTurboRaw from "@/app/api/data/fuels/pertamax-turbo-data.json";

interface Price {
  monthText: string;
  price: number;
  priceText: string;
}

interface Fuel {
  id: number;
  year: number;
  prices: Price[];
}

export const runtime = "edge";

const YEAR = 2024; // TODO: Hardcoded for now

const getFuelData = (
  type: "pertalite" | "pertamax" | "pertamax-turbo"
): number[] => {
  let fuelData: Fuel[] = [];

  if (type === "pertalite") {
    fuelData = pertaliteRaw;
  } else if (type === "pertamax") {
    fuelData = pertamaxRaw;
  } else if (type === "pertamax-turbo") {
    fuelData = pertamaxTurboRaw;
  }

  const monthlyData = fuelData.filter((fuel) => fuel.year === YEAR);

  if (monthlyData.length === 0) {
    throw new Error("Data not found for the given year");
  }

  return monthlyData[0].prices.map((price) => price.price);
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
