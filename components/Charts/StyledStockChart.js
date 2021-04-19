import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import data from "./data/aapl.json";

const options = {
  chart: {
    backgroundColor: "transparent",
    height: 400,
  },

  title: {
    text: "",
  },

  subtitle: {
    text: "",
  },

  rangeSelector: {
    selected: 1,
  },

  series: [
    {
      name: "ADA Price",
      data: data,
      type: "area",
      threshold: null,
      tooltip: {
        valueDecimals: 2,
      },
      color: "#6c5ecf",
    },
  ],
  xAxis: {
    crosshair: {
      width: 10,
      color: "rgba(0,100,255,0.1)",
    },
  },

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          chart: {
            height: 300,
          },
          subtitle: {
            text: null,
          },
          navigator: {
            enabled: false,
          },
        },
      },
    ],
  },
};

export const StyledStockChart = () => (
  <div className="h-48">
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      constructorType="stockChart"
      containerProps={{
        "data-e2e": "customProp",
      }}
    />
  </div>
);
