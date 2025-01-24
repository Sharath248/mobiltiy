// Simulated app data
import { appData } from "./app-data.js";

const currentLocation = document.getElementById("current-location");
const citySelector = document.getElementById("city-selector");
const appList = document.getElementById("app-list");
const noDataMessage = document.getElementById("no-data");

// Populate apps for the selected city
function displayApps(city) {
  appList.innerHTML = "";
  const cityApps = appData[city];

  if (cityApps) {
    noDataMessage.style.display = "none";
    Object.keys(cityApps).forEach((category) => {
      const categorySection = document.createElement("div");
      categorySection.innerHTML = `<h3>${category}</h3>`;
      cityApps[category].forEach((app) => {
        const appItem = document.createElement("p");
        appItem.innerHTML = `<a href="${app.link}" target="_blank">${app.name}</a>`;
        categorySection.appendChild(appItem);
      });
      appList.appendChild(categorySection);
    });
  } else {
    noDataMessage.style.display = "block";
  }
}

// Handle city selection
citySelector.addEventListener("change", (e) => {
  const selectedCity = e.target.value;
  currentLocation.textContent = selectedCity;
  displayApps(selectedCity);
});

// Default location apps
displayApps("Delhi");
