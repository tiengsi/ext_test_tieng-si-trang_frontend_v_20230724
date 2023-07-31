import faker from "faker";
import IconKnife from "@/assets/svgs/icon-knife.svg";
import IconCup from "@/assets/svgs/icon-cup.svg";

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        display: false,
        beginAtZero: false,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    x: {
      grid: {
        color: "#777",
      },
      ticks: {
        beginAtZero: true,
        color: "#FFF",
        fontSize: 12,
        fontFamily: "'Inter', 'sans-serif'",
      },
    },
  },
};

const labels = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
];

export const chartData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
      borderColor: "#FFCC21",
      backgroundColor: "#FFCC21",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
      borderColor: "#8FE9D0",
      backgroundColor: "#8FE9D0",
    },
  ],
};

export const mockPercentage = faker.datatype.number({ min: 0, max: 100 });

export const filterButtons = [
  {
    key: 1,
    icon: IconKnife,
    value: 'morning',
  },
  {
    key: 2,
    icon: IconKnife,
    value: 'lunch',
  },
  {
    key: 3,
    icon: IconKnife,
    value: 'dinner',
  },
  {
    key: 4,
    icon: IconCup,
    value: 'snack',
  },
]