// ---------------- BAR CHART  ---------------- //

const barChartOptions = {
  series: [{
    name: "Production (kg)",
    data: [2000, 1500, 1200, 900, 700]
  }],
  chart: {
    type: "bar",
    height: 320,
    toolbar: { show: false }
  },
  colors: ["#2f7d4a"],
  plotOptions: {
    bar: {
      borderRadius: 8,
      columnWidth: "45%",
    }
  },
  dataLabels: { enabled: false },
  xaxis: {
    categories: ["Wheat", "Rice", "Maize", "Sugarcane", "Cotton"],
  },
  yaxis: {
    title: {
      text: "Production (kg)"
    }
  }
};

const barChart = new ApexCharts(
  document.querySelector("#bar-chart"),
  barChartOptions
);
barChart.render();


// ---------------- AREA CHART---------------- //

const areaChartOptions = {
  series: [
    {
      name: "Current Year",
      data: [120, 150, 180, 200, 170, 220, 250]
    },
    {
      name: "Last Year",
      data: [100, 130, 160, 180, 160, 200, 230]
    }
  ],
  chart: {
    type: "area",
    height: 320,
    toolbar: { show: false }
  },
  colors: ["#2f7d4a", "#8fd3b6"],
  dataLabels: { enabled: false },
  stroke: {
    curve: "smooth",
    width: 3
  },
  markers: {
    size: 0
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
  },
  yaxis: {
    title: {
      text: "Yield (kg)"
    }
  },
  tooltip: {
    shared: true,
    intersect: false
  }
};

const areaChart = new ApexCharts(
  document.querySelector("#area-chart"),
  areaChartOptions
);
areaChart.render();



