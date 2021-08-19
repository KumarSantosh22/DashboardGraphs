 var options = {
   series: [76, 32, 67],
   chart: {
     height: 230,
     type: "radialBar",
     offsetY: 5,
     offsetX: 65,
     sparkline: {
       enabled: true,
     },
   },
   plotOptions: {
     radialBar: {
       startAngle: -90,
       endAngle: 90,
       track: {
         background: "#e7e7e7",
         strokeWidth: "97%",
         margin: 5, // margin is in pixels
         dropShadow: {
           enabled: true,
           top: 2,
           left: 0,
           color: "#999",
           opacity: 1,
           blur: 2,
         },
       },
       dataLabels: {
         name: {
           show: false,
         },
         value: {
           offsetY: -10,
           fontSize: "22px",
         },
       },
     },
   },
   colors: ["#1ab7ea", "#0084ff", "#0077B5"],
   labels: ["New Leads", "2-5 Knock Knock", "5+ Followups"],

   grid: {
     padding: {
       top: -10,
     },
   },
   fill: {
     type: "gradient",
     gradient: {
       shade: "light",
       shadeIntensity: 0.4,
       inverseColors: false,
       opacityFrom: 1,
       opacityTo: 1,
       stops: [0, 50, 53, 91],
     },
   },
   labels: ["Average Results"],
   legend: {
     show: true,
     showForSingleSeries: false,
     showForNullSeries: true,
     showForZeroSeries: true,
     position: "top",
     horizontalAlign: "center",
     floating: false,
     fontSize: "14px",
     fontFamily: "Helvetica, Arial",
     fontWeight: 400,
     formatter: undefined,
     inverseOrder: false,
     width: undefined,
     height: undefined,
     tooltipHoverFormatter: undefined,
     customLegendItems: [],
     offsetX: 0,
     offsetY: 5,
     labels: {
       colors: undefined,
       useSeriesColors: false,
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
     itemMargin: {
       horizontal: 5,
       vertical: 0,
     },
     onItemClick: {
       toggleDataSeries: true,
     },
     onItemHover: {
       highlightDataSeries: true,
     },
   },
 };

        var chart = new ApexCharts(document.querySelector("#accountsChart"), options);
        chart.render();
      
      
    

