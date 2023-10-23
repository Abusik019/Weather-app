export default function changeIcon(res, weatherImg){
    const weatherState = {
        'Clouds': '../src/img/cloud.png',
        'Thunderstorm': '../src/img/storm.png',
        'Drizzle': '../src/img/drizzle.png',
        'Rain': '../src/img/rain.png',
        'Clear': '../src/img/clear.svg',
        'Snow': '../src/img/snow.png',
        'Mist': '../src/img/fog.png',
        'Smoke': '../src/img/fog.png',
        'Haze': '../src/img/fog.png',
        'Dust': '../src/img/fog.png',
        'Fog': '../src/img/fog.png',
        'Sand': '../src/img/fog.png',
        'Ash': '../src/img/fog.png',
        'Squall': '../src/img/fog.png',
        'Tornado': '../src/img/fog.png',
    }

    for(let state in weatherState){
        if(state === res.weather[0].main){
            weatherImg.src = weatherState[state];
        }
    }
    return null;
}