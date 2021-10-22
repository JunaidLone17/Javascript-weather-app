var api_key = "6c5d223521d02b53aca2861de87363b7";
var city = "Mumbai";
const searchbutton = document.getElementById("checking");
const searchbar = document.getElementById("search-bar");
const heading = document.getElementById("heading")
const temperature = document.getElementById("temp");
const weather = document.getElementById("weather");
const humiditybox = document.getElementById("humidity");
const windspeed = document.getElementById("windspeed");
getdata(event);
searchbar.addEventListener("click,function(){
                           searchbar.value = "";
                           });
searchbutton.addEventListener("click", getdata);
    



function getdata(event) {
    city = searchbar.value;
    var api_link = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key;
    fetch(api_link).then((response) => response.json()).then((data) => displaydata(data));

}
function displaydata(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { speed } = data.wind
    const { temp, humidity } = data.main; 
    console.log(name, icon, description, speed, temp, humidity);
    heading.innerText = "Weather in " + name;
    temperature.innerText = "Temperature : " + parseInt(temp - 273.15) + String.fromCharCode(176) + "C";
    weather.innerText = "Current Weather : " + description;
    humiditybox.innerText = "Humidity: " + humidity + "%";
    windspeed.innerText = "Wind Speed : " + speed + " m/s";

}
