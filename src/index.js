import "./style.css";

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
      return myWeek;
    })
    .then(function (myWeek) {
      let content = document.getElementById("information");
      for (let j = 0; j < dayList.length; j++) {
        let current_day = document.createElement("div");
        let description = document.createElement("div");
        description.textContent = "nice";
        current_day.appendChild(description);
        current_day.textContent += "hey";
        content.appendChild(current_day);
      }
    });
}

function testing() {
  getWeather();
}
let button = document.getElementById("button");
button.addEventListener("click", () => testing());
