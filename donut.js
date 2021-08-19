var options = {
  series: [82, 91, 82],
  chart: {
    height: 215,
    type: "donut",
  },
  plotOptions: {
    radialBar: {
      offsetY: 5,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: "30%",
        background: "transparent",
        image: undefined,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        },
      },
    },
  },
  colors: ["#1ab7ea", "#0084ff", "#0077B5"],
  labels: ["New Leads", "2-5 Knock Knock", "5+ Followups"],
  legend: {
    show: true,
    floating: true,
    fontSize: "12px",
    position: "top",
    offsetX: -5,
    offsetY: 0,
    labels: {
      useSeriesColors: true,
    },
    markers: {
      width: 12,
      height: 12,
      strokeWidth: 0,
      strokeColor: "#fff",
      fillColors: undefined,
      radius: 0,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0,
    },
    formatter: function (seriesName, opts) {
      return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
    },
    itemMargin: {
      vertical: 3,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          show: false,
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#countryChart"), options);
chart.render();
