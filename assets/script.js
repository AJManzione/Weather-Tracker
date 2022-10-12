var cityContainer = document.querySelector("#cityContainer");
var localStg = [];

displayCity();

var weather={


    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=ba45cee755183b20520597d1996ada97")
        .then( (response) => {
            if (response.ok) {
                if(localStg.includes(city) === false){
                    localStg[localStg.length] = city;
                    console.log(localStg);
                    localStorage.setItem("cities", JSON.stringify(localStg));
                }


                response.json().then((data) =>{
                this.displayWeather(data);
              });
            } else {
              alert('Error: ' + response.statusText);
              return;
            }
          })
    },
    displayWeather:function(weatherDt) {
        var {name} = weatherDt;
        var {country} = weatherDt.sys;
        var {icon,description} = weatherDt.weather[0];
        var {temp,humidity} = weatherDt.main;
        var {speed} = weatherDt.wind;
       

        document.querySelector(".city").innerText = "Weather today in " + name + " / " + country;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind: " + speed + "MPH";

    },



    fetchWeatherW:function(city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ city + "&units=imperial&appid=ba45cee755183b20520597d1996ada97")
        .then((response) => response.json())
        .then((data) => this.displayWeatherW(data));

    },
    displayWeatherW:function(data) {
        for (var i = 0; i < 5; i++){
            var {icon, description} = data.list[i*8].weather[0];
            var {temp, humidity} = data.list[i*8].main;
            var { speed } = data.list[i*8].wind;

        document.querySelector("#icon"+(i) ).src = "https://openweathermap.org/img/wn/" + icon +".png";
        document.querySelector("#description"+(i)).innerText = description;
        document.querySelector("#temp"+(i)).innerText = Math.round(temp) + "°F";
        document.querySelector("#humidity"+(i)).innerText = "Humidity: " + humidity + "%";
        document.querySelector("#wind"+(i)).innerText = "Wind: " + speed + "MPH";
        }
        displayCity();
    },

    search:function(){

        this.fetchWeather(document.querySelector(".search-bar").value);
        this.fetchWeatherW(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter") {
        weather.search();
    }
})



/*-------------------------WEEKLY weather info-----------------------------*/
function displayCity() { // save in the array the localStorage information
    var storedCities = JSON.parse(localStorage.getItem("cities"));
    if (storedCities !== null) {
        localStg = storedCities;
        addCityDisplay()
    }    
}
function addCityDisplay() {
    cityContainer.innerHTML = "";
    for (var i = 0; i < localStg.length; i++){
        var stgCity = localStg[i];

        var button = document.createElement("button");
        button.textContent = stgCity;
        button.addEventListener("click", function(event){// check with TA line 115
            var stgCity = event.target.textContent;
            console.log(stgCity);
            weather.fetchWeather(stgCity);
            weather.fetchWeatherW(stgCity);
        });

        button.setAttribute("class","btn");
        // console.log(button);

        cityContainer.appendChild(button);
    }
}
displayCity();

var currentTime = function() {

    
    var date = document.querySelectorAll("p");
    for (var i =0; i<date.length;i++) {
        var currentDate = moment();
        // console.log(currentDate.toString());
        currentDate.add(i,"days");
        currentDate = moment(currentDate).format("ddd, MM/DD");
        // console.log(currentDate);
        date[i].innerText = currentDate;

        
    }
}
currentTime();