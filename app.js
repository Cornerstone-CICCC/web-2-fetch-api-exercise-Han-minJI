// YOUR JS CODE HERE
async function getData(url) {
  const res = await fetch(url);
  const data = res.json();
  return data;
}

function buildWeather(data) {
  document.querySelector(
    ".temperature",
  ).textContent = `${data.current.temperature_2m} ${data.current_units.temperature_2m}`;

  document.querySelector(
    ".wind-speed",
  ).textContent = `Wind speed: ${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`;

  document.querySelector(".time-zone").textContent = `${data.timezone}`;

  const time = new Date(data.current.time).toLocaleString();

  document.querySelector(".time").textContent = `Last updataed: ${time}`;
}

document.addEventListener("DOMContentLoaded", async function () {
  const data = await getData(
    "https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1",
  );
  buildWeather(data);
});
