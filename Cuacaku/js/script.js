const toggle = document.getElementById("navbar-toggle");
const menu = document.getElementById("navbar-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

const forecastGrid = document.getElementById("forecastGrid");

for (let i = 0; i < 24; i++) {
  const item = document.createElement("div");
  item.className = "forecast-item";

  const icon = i < 7 ? "🌙" : i < 17 ? "⛅" : i < 20 ? "🌧️" : "🌧️";

  item.innerHTML = `
    <div>13:00:00</div>
    <div style="font-size: 24px;">${icon}</div>
    <div style="color: #1976d2;"><strong>27°C</strong></div>
    <div>82.68% RH</div>
  `;
  forecastGrid.appendChild(item);
}

const dailyForecastGrid = document.getElementById("dailyForecastGrid");

for (let i = 0; i < 10; i++) {
  const item = document.createElement("div");
  item.className = "forecast-item";

  item.innerHTML = `
    <div>2025-05-03</div>
    <div style="font-size: 24px;">🌧️</div>
    <div style="color: #1976d2;"><strong>27.8°C</strong></div>
    <div>82.68% RH</div>
  `;

  dailyForecastGrid.appendChild(item);
}

const airHourlyGrid = document.getElementById("airHourlyGrid");

for (let i = 0; i < 24; i++) {
  const hour = `${i.toString().padStart(2, '0')}:00`;
  const item = document.createElement("div");
  item.className = "air-hourly-item";

  item.innerHTML = `
    <h4>${hour}</h4>
    <div class="aqi-chip">AQI: 172 - Tidak Sehat</div>
    <div>🌫️ PM2.5: 185.3 µg/m³</div>
    <div>🔥 CO: 870 ppm</div>
    <div>🧪 NO: 0.09 ppb</div>
    <div>🧪 NO₂: 13.53 ppb</div>
    <div>🌿 SO₂: 71 ppb</div>
  `;

  airHourlyGrid.appendChild(item);
}