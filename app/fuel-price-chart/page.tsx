import type { Metadata } from "next";
import baseMetadata from "../layout";

import Chart from "./Chart";

import MainContainer from "../components/MainContainer";

export const runtime = "edge";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "2024 Jakarta Fuel Price Chart",
  description: "A chart showing the price of fuel in Jakarta in 2024.",
};

const FuelPriceChart: React.FC = () => {
  return (
    <MainContainer>
      <header className="">
        <h1 className="font-semibold tracking-tight text-2xl md:text-4xl mb-6 text-slate-900 pb-6 border-b border-slate-200">
          Fuel Price Chart
        </h1>
      </header>
      <div className="flex flex-col gap-4 mb-8">
        <p className="text-sm md:text-base">
          This chart shows the price of fuel in Jakarta in 2024. It includes the
          price of Pertalite, Pertamax, and Pertamax Turbo. The data is update
          monthly.
        </p>
        <p className="text-sm md:text-base">
          This chart is created using Chart.js, a popular open-source
          JavaScript. The chart is interactive and you can hover over the data
          points to see the exact price of each fuel type. You can select which
          fuel type to display by clicking on the legend.
        </p>
      </div>
      <Chart />
    </MainContainer>
  );
};

export default FuelPriceChart;
