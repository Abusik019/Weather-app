import getWeatherData from "./utils/get-weather-data.js";

let latitude = document.getElementById('weather-latitude');
let longitude = document.getElementById('weather-longitude');
let sendInfo = document.getElementById('send_info');
let weatherName = document.getElementById('weather_name');
let weatherDegree = document.getElementById('weather_degree');
let windSpeed = document.getElementById('temp_data');
let humidity = document.getElementById('direction_data');
let visibility = document.getElementById('visibility_data');
let weatherImg = document.getElementById('weather_img');

sendInfo.addEventListener('click', async () => {
    let lat = latitude.value;
    let lon = longitude.value;

    getWeatherData(lat, lon, weatherName, weatherDegree, windSpeed, humidity, visibility, weatherImg)
    }
)