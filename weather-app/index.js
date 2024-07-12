let temp = document.getElementById("temperature");
let cityName = document.getElementById("cityName");
let humidity = document.getElementById("humidity");
let speed = document.getElementById("speed");
let search = document.getElementById("search");
let srchBtn = document.getElementById("btn");
let weather = document.getElementById("img");

const apiKey = "00564f1f3c4d158c05cd060debb4520c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const resposne = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (resposne.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weathers").style.display = "none";
  } else {
    let data = await resposne.json();
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    cityName.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    speed.innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weather.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weather.src = "./images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weather.src = "./images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weather.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Snow") {
      weather.src = "./images/snow.png";
    } else if (data.weather[0].main == "Mist") {
      weather.src = "./images/mist.png";
    }
    document.querySelector(".weathers").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

srchBtn.addEventListener("click", () => {
  checkWeather(search.value);
  search.value = "";
});
