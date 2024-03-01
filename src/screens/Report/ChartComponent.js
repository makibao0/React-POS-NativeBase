import { Box } from "native-base";
import React from "react";
import Chart from "react-apexcharts";
import { Accent } from "../../utils/Color";

const ChartComponent = () => {
  const state = {
    series: [44, 55, 67],
    options: {
      colors: [Accent.Blue, Accent.Orange, Accent.Red],
      chart: {
        fontFamily: "Helvetica, Arial, sans-serif",

        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          inverseOrder: false,
          startAngle: 0,
          endAngle: 360,
          offsetX: 0,
          offsetY: 0,
          hollow: {
            margin: 5,
            size: "10%",
            background: "transparent",
            image: undefined,
            imageWidth: 150,
            imageHeight: 150,
            imageOffsetX: 0,
            imageOffsetY: 0,
            imageClipped: true,
            position: "front",
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              blur: 3,
              opacity: 0.5,
            },
          },
          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: "#373d3f",
            strokeWidth: "97%",
            opacity: 1,
            margin: 5,
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              blur: 3,
              opacity: 0.5,
            },
          },
          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: "16px",
              fontFamily: undefined,
              fontWeight: 600,
              color: undefined,
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "14px",
              fontFamily: undefined,
              fontWeight: 400,
              color: undefined,
              offsetY: 16,
              formatter: function (val) {
                return val + "%";
              },
            },
            total: {
              show: false,
              label: "Total",
              color: "#373d3f",
              fontSize: "16px",
              fontFamily: undefined,
              fontWeight: 600,
              formatter: function (w) {
                return (
                  w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0) /
                    w.globals.series.length +
                  "%"
                );
              },
            },
          },
        },
        labels: ["Apples", "Oranges", "Bananas"],
      },
    },
  };

  return (
    <Box className="app">
      <Box className="row">
        <Box className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="radialBar"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ChartComponent;
