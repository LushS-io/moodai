// Our labels along the x-axis
var years = [1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19, 1.2, 1.21, 1.22];
// For drawing the lines
var africa = [0.5, 0.7, 0.3, 0.5, 0.2, 1, 0.6, 0.5, 0.6, 0.4];
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: years,
    datasets: [
      {
        data: africa,
        label: "Team Teamster",
        borderColor: "#3e95cd",
        fill: false,
      },
    ],
  },
});
