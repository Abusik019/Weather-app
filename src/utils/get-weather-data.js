import changeIcon from "../utils/change-Icon.js";

export default async function getWeatherData(lat, lon, weatherName, weatherDegree, windSpeed, humidity, visibility, weatherImg){
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&appid=bea861290e77a7ca63eaf421228f4bf5&units=metric`).then(res => res.json());
        console.log(res);
        weatherName.innerText = res.weather[0].main;
        weatherDegree.innerText = res.main.temp
        windSpeed.innerText = res.wind.speed + ' m/h';
        humidity.innerText = res.main.humidity;
        visibility.innerText = res.visibility

        changeIcon(res, weatherImg);

    } catch (error){
        console.log(error.message);
    }
}

(async() => {
    await getWeatherData()
})();