import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          const label = context.chart.data.labels[context.dataIndex];
          const value = context.raw;
          return `${label}: ${value}`;
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        maxRotation: 0,
        minRotation: 0,
        autoSkip: false,
        align: "center",
        callback: function (value, index) {
          let label = this.getLabelForValue(value);
          return label.length > 8 ? label.slice(0, 8) + "…" : label;
        },
      },
    },
    y: {
      beginAtZero: true,
    },
  },
};

export function VerticalGraph({ data }) {
  return (
    <div style={{ width: `${data.labels.length * 80}px`, height: "400px", overflowX: "auto" }}>

      <Bar options={options} data={data} />
    </div>
  );
}
