import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
// import HighchartsMore from "highcharts/highcharts-more";
import data from "./data/aapl.json";

var ohlc = [],
  volume = [],
  dataLength = data.length,
  // set the allowed units for data grouping
  groupingUnits = [
    [
      "week", // unit name
      [1], // allowed multiples
    ],
    ["month", [1, 2, 3, 4, 6]],
  ],
  i = 0;

// split the data set into ohlc and volume
function getData() {
  for (i; i < dataLength; i += 1) {
    ohlc.push([
      data[i][0], // the date
      data[i][1], // open
      data[i][2], // high
      data[i][3], // low
      data[i][4], // close
    ]);

    volume.push([
      data[i][0], // the date
      data[i][5], // the volume
    ]);
  }
}

// create the chart
// Highcharts.stockChart("container", {
const options = {
  chart: {
    backgroundColor: "transparent",
  },
  title: {
    text: "",
  },

  xAxis: {
    crosshair: {
      width: 10,
      color: "rgba(0,100,255,0.1)",
    },
  },

  yAxis: [
    {
      opposite: false,
      labels: {
        align: "right",
        x: -10,
      },
      //   title: {
      //     text: "OHLC",
      //   },
      height: "80%",
      lineColor: "#eee",
      lineWidth: 1,
      resize: {
        enabled: true,
      },
    },
    {
      labels: {
        enabled: false,
      },
      top: "80%",
      height: "20%",
      offset: 0,
      lineWidth: 0,
    },
  ],

  tooltip: {
    split: true,
  },

  plotOptions: {
    series: {
      stacking: "normal",
    },
  },

  // Selector buttons on top of chart
  rangeSelector: {
    enabled: false,
  },

  // Navigator minimap on bottom of chart
  navigator: {
    enabled: false,
  },

  // Navigator's scrollbar
  scrollbar: {
    enabled: false,
  },

  series: [
    {
      type: "candlestick",
      name: "ADA",
      color: "#d0021b",
      lineColor: "#d0021b",
      upColor: "#7dd120",
      upLineColor: "#7dd120",
      data: ohlc,
      dataGrouping: {
        units: groupingUnits,
      },
    },
    {
      type: "column",
      name: "Volume",
      color: "#7dd120",
      data: volume,
      yAxis: 1,
      dataGrouping: {
        units: groupingUnits,
      },
    },
    {
      type: "column",
      name: "Volume 2",
      color: "#d0021b",
      data: volume,
      yAxis: 1,
      dataGrouping: {
        units: groupingUnits,
      },
    },
  ],
};

export const StyledCandleStick = () => {
  getData();

  return (
    <HighchartsReact
      containerProps={{ style: { height: "800px" } }}
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
      callback={(chart) => {
        const width = chart.chartWidth;
        const points = chart.series[0].points.length;
        const axis = chart.xAxis[0];
        axis.crosshair.width = parseInt(width / points, 10);
        // todo, recalculate on zoom level change
      }}
    />
  );
};
