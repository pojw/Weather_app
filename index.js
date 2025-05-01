// function getWeather() {
//   return fetch(
//     "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Anderson?key=RQNEZR877KFAZS7QUVCATDS7T",
//     { mode: "cors" }
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       let myObject = {
//         today: {
//           weather: "",
//         },
//         tom: {
//           weather: "",
//           description: "",
//         },
//       };
//       // console.log(response);
//       myObject.today.description = response.days[0].description;
//       // console.log(myObject.today.description);
//       console.log(response);

//       return myObject;
//     });
// }

// getWeather().then(function (weather) {
//   console.log(weather.today.description);
//   document.getElementById("testing").textContent = weather.today.description;
// });

button = document.getElementById("button");
button.addEventListener("click", () => {
  location = document.getElementById("location");
  alert(location.textContent);
});
