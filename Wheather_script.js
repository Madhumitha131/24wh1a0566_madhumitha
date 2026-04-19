const apiKey = "b68f4b70d53ef0fbf905171a168890c3";
const getWeather = async () => {
  const city = document.getElementById("city").value;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    const labels = [];
    const temperatures = [];
    data.list.slice(0, 8).forEach(item => {
      labels.push(item.dt_txt);
      temperatures.push(item.main.temp);
    });
    displayChart(labels, temperatures);
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
};
const displayChart = (labels, temperatures) => {
  const ctx = document.getElementById("weatherChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: "Temperature (°C)",
        data: temperatures,
        borderWidth: 2,
        fill: false
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
};
