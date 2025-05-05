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
      const currentTime = 12;
      //i like th idea of hour-6 and plus 6 to get the range of time ahnd the middle would be the curernt ime
      let todayHours = {};
      for (let i = currentTime - 6; i <= currentTime + 6; i++) {
        todayHours[i] = {
          description: response.days[0].hours[i].conditions,
          currentTemp: response.days[0].hours[i].temp,
          feelsLike: response.days[0].hours[i].feelslike,
          humidity: response.days[0].hours[i].humidity,
          date: response.days[0].hours[i].datetime,
        };
      }

      let todaySection = document.getElementById("facts");
      for (let i = currentTime - 6; i <= currentTime + 6; i++) {
        let currentHour = document.createElement("div");

        let description = document.createElement("div");
        description.textContent = "Descripiton: " + todayHours[i].description;

        let currentTemp = document.createElement("div");
        currentTemp.textContent =
          "Current Temperature: " + todayHours[i].currentTemp;

        let feelsLike = document.createElement("div");
        feelsLike.textContent = "Feels like:" + todayHours[i].feelsLike;

        let humidity = document.createElement("div");
        humidity.textContent = "Humidity: " + todayHours[i].humidity;

        let date = document.createElement("div");
        date.textContent = "Time: " + todayHours[i].date;

        currentHour.appendChild(date);
        currentHour.appendChild(description);
        currentHour.appendChild(currentTemp);
        currentHour.appendChild(feelsLike);
        currentHour.appendChild(humidity);

        currentHour.classList.add("currentHour");

        todaySection.appendChild(currentHour);
      }
      console.log(todayHours);
      console.log(currentTime);
      console.log(response);

      return myWeek;
    });
}

let button = document.getElementById("button");
button.addEventListener("click", () => getWeather());
