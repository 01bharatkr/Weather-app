
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log("data",data);
    // console.log("weather",data.weather[0])
    // console.log('main',data.weather[0].main)

    if (data.cod === "404") {
        alert("City not found!");
        return;
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";



    console.log("data", data);
    console.log("weather", data.weather[0])
    console.log('main', data.weather[0].main)
    const condition = data.weather[0].main;


    if (condition === "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }

    else if (condition === "Clear") {
        weatherIcon.src = "images/clear.png";
    }
    else if (condition === "Rain") {
        weatherIcon.src = "images/rain.png";
    }
    else if (condition === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }
    else if (condition === "Mist") {
        weatherIcon.src = "images/mist.png";
    }
    else {
        weatherIcon.src = "images/default.png"; // fallback icon
    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

