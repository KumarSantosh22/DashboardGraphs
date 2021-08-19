var labels = ['Decision Makers / 30Exported', 'Influencers', 'Strengths/Teams'];
var data = {
  labels: labels,
  datasets: [
    {
      axis: "y",
      label: "Decision Makers",
      data: [50, 60, 40],
      fill: false,
      backgroundColor: [
        "rgba(44, 130, 201, 1)",

        "rgba(0, 181, 204, 1)",

        "rgba(82, 179, 217, 1)",
      ],
      borderWidth: 1,
      borderRadius: 4,
      barThickness: 8,
    },

    {
      axis: "y",
      label: "Decision Makers",
      data: [30, 35, 38],
      fill: false,
      backgroundColor: [
        "rgba(137, 196, 244, 1)",

        "rgba(65, 131, 215, 1)",

        "rgba(34, 167, 240, 1)",
      ],
      borderWidth: 1,
      borderRadius: 4,
      barThickness: 8,
    },
  ],
  
};

var config = {
  type: "bar",
  data,
  options: {
    indexAxis: "y",
    legend: {
      display: false,
    },
  },
};


var myChart = new Chart(document.getElementById("decisionChart"), config);
