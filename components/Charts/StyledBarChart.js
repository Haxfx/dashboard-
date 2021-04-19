import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const monthFormatter = {
  jan: "Januari 2021",
  feb: "Februari 2021",
  mrt: "Maart 2021",
  apr: "April 2021",
  mei: "Mei 2021",
  jun: "Juni 2021",
  jul: "Juli 2021",
  aug: "Augustus 2021",
  sep: "September 2021",
  okt: "Oktober 2021",
  nov: "November 2021",
  dec: "December 2021",
};

const epochs = [
  {
    name: "581f4f41de0ec7dec407b7f73fef26529b0eeac65982cba041c00984",
    data: [
      [58, 58, 26, 58],
      [58, 58, 26, 58],
    ],
  },
];

// if a serie does not have data for all columns,
// it should be set to 0 and not be left away (it must be available),
// otherwise the bars may behave inconsistenly
let dataSet = 0;
let total = 0;
let totalEpochs = epochs[0].data[dataSet].map((epoch) => epoch);
for (let i = 0; i < totalEpochs.length; i++) {
  total += totalEpochs[i];
}
console.log(total);

let epochCount = [];

for (let i = 0; i < 13; i++) {
  epochCount.push("epoch " + (246 + i));
}

const series = [
  {
    name: "581f4f41de0ec7dec407b7f73fef26529b0eeac65982cba041c00984",
    data: [52, 58, 56, 62, 54, 62, 66, 74, 65, 59, 78, 0],
    color: "#6c5ecf",
  },
];

const options = {
  chart: {
    backgroundColor: "transparent",
    height: "200",
    type: "column",
    className: "text-m",
  },
  title: {
    text: "",
  },

  legend: {
    enabled: false,
  },
  xAxis: {
    categories: epochCount,
    tickmarkPlacement: "on",
    title: {
      enabled: false,
    },
    crosshair: { color: "rgba(204,214,235,0.25)" }, // mouse over color
  },
  yAxis: {
    title: {
      text: "",
    },
    tickAmount: 8,
  },
  tooltip: {
    shared: true,
    useHTML: true,
    formatter: function () {
      const { x, points = [] } = this;
      const title = monthFormatter[x];
      const items = points.map(
        (point) =>
          `<div className="tooltip">
        <h2 className="text-m text-purple-primary">${point.x}</h2>
        <span>Reward (${point.y})</span>
      </div>`
      );

      return `<div class="dgo-tooltip">
          
          ${items.join("")}
        </div>`;
    },
  },
  plotOptions: {
    column: {
      point: {
        events: {
          click: ({ point }) => {
            console.log(
              `De maand "${point.category}" is geklikt, dus we kunnen inzoomen.`
            );
          },
        },
      },
    },
    series: {
      stacking: "normal",
      borderWidth: 0,
      groupPadding: 0,
      states: {
        hover: {
          enabled: false,
        },
        inactive: {
          opacity: 1,
        },
      },
    },
  },
  series,
};

export const StyledBarChart = () => (
  <div className="h-48">
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{
        "data-e2e": "customProp",
      }}
    />
  </div>
);

function CustomTooltip(name, color, point) {
  return (
    <div className={`tooltip ${color}`}>
      <h4>{name}</h4>
      <p>{point}</p>
    </div>
  );
}
