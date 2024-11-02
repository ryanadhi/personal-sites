"use client";
import { useEffect, useState } from "react";

import type { ChartData } from "chart.js";

import LineChart from "../components/LineChart";

const FUEL_TYPES = {
  pertalite: "Pertalite",
  pertamax: "Pertamax",
  "pertamax-turbo": "Pertamax Turbo",
};

const Chart = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<FuelResponse>({} as FuelResponse);

  const [datasets, setDatasets] = useState<ChartData<"line">>({
    labels: [],
    datasets: [],
  });

  const fetchFuelData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/fuels`);
      if (!response.ok) {
        throw new Error("Failed to fetch fuel data");
      }

      const responseLabel = await fetch(`/api/fuels/labels`);
      if (!responseLabel.ok) {
        throw new Error("Failed to fetch fuel data");
      }
      const data: FuelResponse = await response.json();
      const monthlyLabels: string[] = await responseLabel.json();

      setData(data);

      const pertaliteDataset: Dataset = {
        label: "Pertalite",
        data: data.pertalite,
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64, 0.5)",
      };

      const pertamaxDataset: Dataset = {
        label: "Pertamax",
        data: data.pertamax,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      };

      const pertamaxTurboDataset: Dataset = {
        label: "Pertamax Turbo",
        data: data["pertamax-turbo"],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      };

      const datasets: ChartData<"line"> = {
        labels: monthlyLabels,
        datasets: [pertaliteDataset, pertamaxDataset, pertamaxTurboDataset],
      };

      setDatasets(datasets);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFuelData();
  }, []);
  return (
    <div className="w-full">
      {loading && (
        <div className="flex space-x-2 justify-center items-center bg-white h-72">
          <span className="sr-only">Loading...</span>
          <div className="h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-4 w-4 bg-black rounded-full animate-bounce"></div>
        </div>
      )}
      {Object.keys(data).length > 0 && (
        <div className="flex flex-col gap-4 mb-8">
          <h2 className="font-semibold text-lg md:text-xl">Latest Price</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.keys(data).map((key) => {
              const price = data[key as keyof FuelResponse];
              const latestPrice = price[price.length - 1];
              return (
                <div
                  key={key}
                  className="bg-slate-100 p-4 rounded-md shadow-md text-slate-800"
                >
                  <h3 className="font-semibold text-base md:text-lg">
                    {FUEL_TYPES[key as keyof typeof FUEL_TYPES]}
                  </h3>
                  <p className="text-sm md:text-base">
                    Rp. {latestPrice.toLocaleString()}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {datasets.datasets.length > 0 && (
        <LineChart datasets={datasets} isCurrency={true} />
      )}
    </div>
  );
};

export default Chart;
