const apikey = "715e5ed032302e4093b0304386d2d6e8";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){

    // accessing the API key for weather updates
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
    
        document.querySelector(".cityName").innerHTML = data.name;
    
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "assests_for_pro1/cloudy.png";
        }
        else if(data.main[0] == "Clear"){
            weatherIcon.src = "assests_for_pro1/clear.png";
        }
        else if(data.main[0] == "Rain"){
            weatherIcon.src = "assests_for_pro1/rain.png";
        }
        else if(data.main[0] == "Drizzle"){
            weatherIcon.src = "assests_for_pro1/drizzle.png";
        }
        else if(data.main[0] == "Mist"){
            weatherIcon.src = "assests_for_pro1/mist.png";
        }
        else if(data.main[0] == "Snow"){
            weatherIcon.src = "assests_for_pro1/snow.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})

