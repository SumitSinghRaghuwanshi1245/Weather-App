const apiKey = "ecdd873f26dac7d4603ff2406678bf18";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
 const response = await  fetch(apiUrl + city + `&appid=${apiKey}`);

if(response.status == 404){
    alert("City not found");
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
}else{
    var data = await response.json();

 console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = data.main.temp + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

if(data.weather[0].main == 'Clouds'){
    weatherIcon.scr = "assets/clouds.png";
}
else if(data.weather[0].main == 'Clear'){
    weatherIcon.scr = "assets/clear.png";
}
else if(data.weather[0].main == 'Rain'){
    weatherIcon.scr = "assets/rain.png";
}
else if(data.weather[0].main == 'Drizzle'){
    weatherIcon.scr = "assets/drizzle.png";
}
else if(data.weather[0].main == 'Mist'){
    weatherIcon.scr = "assets/mist.png";
}
else if(data.weather[0].main == 'Snow'){
    weatherIcon.scr = "assets/snow.png";
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";

    
}

 
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
} )

checkWeather();
