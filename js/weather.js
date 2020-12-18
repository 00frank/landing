//Api from OpenWeatherMap (api_key required!): https://openweathermap.org/api
const WEATHER_KEY = "";
if (WEATHER_KEY === "") {
    console.error("No OpenWeatherMap api key registered, get it from: https://openweathermap.org/api");
} else {
    const cityid = "3433955";

    const city = document.querySelector("#province");
    const weather_icon = document.querySelector("#weather_icon");
    const temp = document.querySelector("#temp");

    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityid}&units=metric&lang=es&appid=${WEATHER_KEY}`)
        .then(resp => resp.text())
        .then(data => printWeather(data))
        .catch(err => console.error(err))

    const printWeather = (data) => {
        var weather = JSON.parse(data);
        city.innerHTML = "Buenos Aires"
        weather_icon.innerHTML = `<img id="w_icon" src="http://openweathermap.org/img/wn/${String(weather.weather[0].icon)}@2x.png">`
        let comma = String(weather.main.temp).indexOf(".");
        temp.innerHTML = String(weather.main.temp).substring(0, comma) + "°C";
        let desc = String(weather.weather[0].description);
        // tooltip from https://atomiks.github.io/tippyjs/
        tippy('#weather-data', {
            duration: 0,
            placement: 'bottom',
            arrow: false,
            followCursor: 'default',
            content: `${desc.charAt(0).toUpperCase() + desc.slice(1)}`,
        });
    }
}
