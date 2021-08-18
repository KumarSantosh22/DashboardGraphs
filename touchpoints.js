var data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(70,130,180)",
        "rgb(30,144,255)",
        "rgb(135,206,235)",
      ],
      hoverOffset: 4,
    },
  ],
};

var config = {
  type: "doughnut",
  data: data,
};

data = {
  datasets: [
    {
      data: [10, 20, 30],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Red", "Yellow", "Blue"],
};
var myChart = new Chart(document.getElementById("touchpointsChart"), config);
