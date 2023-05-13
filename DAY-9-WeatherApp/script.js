const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  // const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";

const apiKey = 'b74bb8ff8d2c85b8389cd3b41a4d78e9';

async function weather(city) {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (res.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    
    const data = await res.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.floor(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =
      Math.floor(data.wind.speed) + " km/h";

    const weatherIcon = document.querySelector(".weather-icon");

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    const weather = document.querySelector(".weather");
    weather.style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

const inputBox = document.querySelector(".card input");
const searchBtn = document.querySelector(".card button");

searchBtn.addEventListener("click", () => {
  const city = inputBox.value;
  if (city === "") {
    alert("Please Enter A Valid City Name...");
  }

  console.log(city);

  weather(city);
});
