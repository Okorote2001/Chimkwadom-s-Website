const api = "0cd710b91a39cc5b338f222b25acf014";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const selectInput = document.querySelector("input");
const selectButton = document.querySelector("button");
const weatherIcon = document.querySelector(".weatherIcon");

selectInput.addEventListener("keyup", ()=> {
    if (event.key === "Enter"){
        checkWeather(selectInput.value);
    }
})

selectButton.addEventListener("click", ()=> {
    checkWeather(selectInput.value);
})

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${api}`);
    var data = await response.json();
    console.log(data);

    if(response.status == 404){
        document.querySelector('.city').innerHTML = "City Not Found"
        document.querySelector('.error').style.display = "block";
    } else{     
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.error').style.display = "none";
    }

    if(document.querySelector(".weatherDetails").style.display == "block"){
        document.querySelector('.error').style.display = "none";
    }


    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.windSpeed').innerHTML = data.wind.speed +'  km/h';

    const weatherData = data.weather[0].main;
    weatherIcon.src = "image/" + weatherData + ".png";

    document.querySelector(".weatherDetails").style.display = "block";

    console.log(document.querySelector(".weatherDetails").style.display);


    document.querySelector(".inputField").style.marginBottom = "0rem";

}




