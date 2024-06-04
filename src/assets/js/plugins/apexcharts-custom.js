if (document.querySelector(".player-profile-chart")) {
  var options = {
    series: [
      {
        name: "Series 1",
        data: [82, 83, 100, 80, 60, 80],
      },
    ],
    chart: {
      height: 350,
      type: "radar",
      toolbar: false,
    },
    dataLabels: {
      enabled: true,
    },
    colors: ["#FF4560"],
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: "#e9e9e9",
          fill: {
            colors: ["#f8f8f8", "#fff"],
          },
        },
      },
    },

    yaxis: {
      show: false,
    },
    xaxis: {
      categories: [
        "Attack",
        "Tactic",
        "Defence",
        "Skills",
        "Midfield",
        "Corner",
      ],
    },
  };

  chart = new ApexCharts(
    document.querySelector(".player-profile-chart"),
    options
  );
  chart.render();
}
