import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  datasets: ChartData<"line">;
  title?: string;
  isCurrency?: boolean;
}

const LineChart = ({ datasets, title, isCurrency }: ChartProps) => {
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
          pointStyleWidth: 40,
        },
      },
      title: {
        display: title ? true : false,
        text: title,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";

            if (isCurrency) {
              if (
                context.parsed.y !== null &&
                context.formattedValue !== null
              ) {
                label = label + `: Rp. ${context.formattedValue}`;
              }
              return label;
            } else {
              if (
                context.parsed.y !== null &&
                context.formattedValue !== null
              ) {
                label = label + `: ${context.formattedValue}`;
              }
              return label;
            }
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value, index, ticks) => {
            if (!isCurrency) return value;
            return `Rp. ${value
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
          },
        },
      },
    },
  };
  return <Line options={options} data={datasets} />;
};

export default LineChart;
