const apiKey = "1affce47f40ee2078c888483c60ba828";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input"); 
const searchBtn = document.querySelector(".search button"); 
const icon = document.querySelector(".weatherIcon");

async function checkWeather (city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if(response.status == 404){
        alert("invalid city name");
        searchBox.value = "";
    }else{
        var data = await response.json();
    
        console.log(data);
    
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    
        document.querySelector(".city").innerHTML = data.name;
    
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            icon.src="images/clouds.png";
    
        }
        else if (data.weather[0].main == "Rain"){
            icon.src="images/rain.png";
    
        }
        else if (data.weather[0].main == "Clear"){
            icon.src="images/clear.png";
    
        }
        else if (data.weather[0].main == "Drizzle"){
            icon.src="images/drizzle.png";
    
        }
        else if (data.weather[0].main == "Mist"){
            icon.src="images/mist.png";
    
        }
        else if (data.weather[0].main == "Humidity"){
            icon.src="images/humidity.png";
    
        }
        else if (data.weather[0].main == "Snow"){
            icon.src="images/snow.png";
    
        }
        else if (data.weather[0].main == "Wind"){
            icon.src="images/wind.png";
    
        }

    }
 

};

searchBtn.addEventListener("click",()=>{
    checkWeather (searchBox.value);

});

