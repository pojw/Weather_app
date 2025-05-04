import "./style.css";
import luffy from "./luffy.jpg";

let dayList = [
  "today",
  "tommrorow",
  "two",
  "three",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
];
let metric = "us";
function getWeather() {
  let place = document.getElementById("place").value;
  let myWeek = {};
  return fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      place +
      "?unitGroup=" +
      metric +
      "&key=RQNEZR877KFAZS7QUVCATDS7T",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      for (let i = 0; i < dayList.length; i++) {
        myWeek[dayList[i]] = {
          description: response.days[i].description,
          currentTemp: response.days[i].temp,
          feelsLike: response.days[i].feelslike,
          maxTemp: response.days[i].tempmax,
          lowTemp: response.days[i].tempmin,
          humidity: response.days[i].humidity,
          rainCoverage: response.days[i].precipcover,
          date: response.days[i].datetime,
        };
      }
      let content = document.getElementById("information");
      content.textContent = "";

      for (let j = 0; j < dayList.length; j++) {
        let current_day = document.createElement("div");

        let info = document.createElement("div");
        info.textContent = "Description: " + myWeek[dayList[j]].description;

        let date = document.createElement("div");
        date.textContent = myWeek[dayList[j]].date;

        let currentTemp = document.createElement("div");
        currentTemp.textContent =
          "Current temperature: " + myWeek[dayList[j]].currentTemp;

        let feelsLike = document.createElement("div");
        feelsLike.textContent = "Feels like: " + myWeek[dayList[j]].feelsLike;

        let maxTemp = document.createElement("div");
        maxTemp.textContent = "Max temperature: " + myWeek[dayList[j]].maxTemp;

        let lowTemp = document.createElement("div");
        lowTemp.textContent =
          "lowest temperature: " + myWeek[dayList[j]].lowTemp;

        let humidity = document.createElement("div");
        humidity.textContent = "Humidity: " + myWeek[dayList[j]].humidity;

        let rainCoverage = document.createElement("div");
        rainCoverage.textContent =
          "Rain coverage: " + myWeek[dayList[j]].rainCoverage;
        let photo = document.createElement("img");
        photo.src = luffy;
        photo.width = 100;
        photo.height = 100;
        current_day.appendChild(date);
        current_day.appendChild(info);
        current_day.appendChild(currentTemp);
        current_day.appendChild(feelsLike);
        current_day.appendChild(humidity);
        current_day.appendChild(maxTemp);
        current_day.appendChild(lowTemp);

        current_day.appendChild(rainCoverage);
        current_day.appendChild(photo);
        current_day.classList.add("days");

        content.appendChild(current_day);
      }
      return myWeek;
    });
}

let button = document.getElementById("button");
button.addEventListener("click", () => getWeather());
