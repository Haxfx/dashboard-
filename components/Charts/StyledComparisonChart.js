import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
//import styled from "styled-components";

//const Chart = styled.div`
//  .dgo-tooltip {
//    display: block;
//    padding: 0 10px;
//  }

//  .dgo-tooltip-title {
//    display: block;
//    margin-bottom: 10px;
//  }

//  .dgo-tooltip-account {
//    display: flex;
//    align-items: center;
//    margin: 5px 0;
//    > :first-child {
//      border-radius: 50%;
//      display: inline-block;
//      height: 10px;
//      margin-right: 5px;
//      width: 10px;
//    }
//  }
//`;

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
    type: "column",
  },
  title: {
    text: "",
  },

  legend: {
    enabled: false,
  },
  xAxis: {
    categories: [
      "jan",
      "feb",
      "mrt",
      "apr",
      "mei",
      "jun",
      "jul",
      "aug",
      "sep",
      "okt",
      "nov",
      "dec",
    ],
    tickmarkPlacement: "on",
    title: {
      enabled: false,
    },
    crosshair: { color: "rgba(204,214,235,0.25)" }, // mouse over color
    //plotBands: [
    //  {
    //    color: "#fff5d3",
    //    from: -0.5, // Start of the chart
    //    to: 2.5, // End of the 2nd bar
    //  },
    //  {
    //    color: "#fff5d3",
    //    from: 10.1, // Start a little after the center of the 11th bar
    //    to: 11.5, // End of the chart with 12 bars
    //  },
    //],
  },
  yAxis: {
    min: 0,
    title: {
      text: "Rainfall (mm)",
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Tokyo",
      data: [
        49.9,
        71.5,
        106.4,
        129.2,
        144.0,
        176.0,
        135.6,
        148.5,
        216.4,
        194.1,
        95.6,
        54.4,
      ],
    },
    {
      name: "New York",
      data: [
        83.6,
        78.8,
        98.5,
        93.4,
        106.0,
        84.5,
        105.0,
        104.3,
        91.2,
        83.5,
        106.6,
        92.3,
      ],
    },
    {
      name: "London",
      data: [
        48.9,
        38.8,
        39.3,
        41.4,
        47.0,
        48.3,
        59.0,
        59.6,
        52.4,
        65.2,
        59.3,
        51.2,
      ],
    },
    {
      name: "Berlin",
      data: [
        42.4,
        33.2,
        34.5,
        39.7,
        52.6,
        75.5,
        57.4,
        60.4,
        47.6,
        39.1,
        46.8,
        51.1,
      ],
    },
  ],
};

export const StyledComparisonChart = () => (
  <div>
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
