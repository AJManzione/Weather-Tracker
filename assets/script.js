var savedCity = document.querySelector("#savedCity");
var storage = [];

//first function called on webpage open
displayCityName();


// gets city input, asks if city is a real city if not display alert but if it is, stores the city into the empty storage array
var weather={
    getWeather:function(city){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=ba45cee755183b20520597d1996ada97')
        .then( (response) => {
            if (response.ok) {
                if(storage.includes(city) === false){
                    storage[storage.length] = city;
                    localStorage.setItem("cities", JSON.stringify(storage));
                }
                response.json().then((data) =>{
                this.displayWeather(data);
              });
            } else {
              alert('Error: ' + response.statusText);
              return;
            }
          })
    }, // displays the weather for today into the main box
    displayWeather:function(todayWeather) {
        var {name} = todayWeather;
        var {icon} = todayWeather.weather[0];
        var {temp,humidity} = todayWeather.main;
        var {speed} = todayWeather.wind;

        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +'.png';
        document.querySelector(".temp").innerText = Math.round(temp) + '°F';
        document.querySelector(".humidity").innerText = 'Humidity: ' + humidity + '%';
        document.querySelector(".wind").innerText = 'Wind: ' + speed + "MPH";

    },
    // fetches the weekly weather forecast 
    getWeeklyWeather:function(city) {
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=ba45cee755183b20520597d1996ada97')
        .then((response) => response.json())
        .then((data) => this.weeklyWeather(data));

    },  //displays weekly weather in appropriate boxes
    weeklyWeather:function(data) {
        for (var i = 0; i < 5; i++){
            var {icon} = data.list[i * 8].weather[0];
            var {temp, humidity} = data.list[i * 8].main;
            var {speed} = data.list[i * 8].wind;

        document.querySelector("#icon"+(i) ).src = "https://openweathermap.org/img/wn/" + icon +'.png';
        document.querySelector("#temp"+(i)).innerText = Math.round(temp) + '°F';
        document.querySelector("#humidity"+(i)).innerText = 'Humidity: ' + humidity + '%';
        document.querySelector("#wind"+(i)).innerText = 'Wind: ' + speed + 'MPH';
        }
        displayCityName();
    },

    search:function(){

        this.getWeather(document.querySelector(".search-bar").value);
        this.getWeeklyWeather(document.querySelector(".search-bar").value);
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

function displayCityName() {
    var storedCities = JSON.parse(localStorage.getItem("cities"));
    if (storedCities !== null) {
        storage = storedCities;
        addCityDisplay()
    }    
}
function addCityDisplay() {
    savedCity.innerHTML = "";
    for (var i = 0; i < storage.length; i++){
        var storageCity = storage[i];

        var historyButton = document.createElement("button");
        historyButton.textContent = storageCity;
        historyButton.addEventListener("click", function(event){
            var storageCity = event.target.textContent;
            console.log(storageCity);
            weather.getWeather(storageCity);
            weather.getWeeklyWeather(storageCity);
        });

        historyButton.setAttribute("class","btn");


        savedCity.appendChild(historyButton);
    }
}
displayCityName();

var currentTime = function() {

    
    var date = document.querySelectorAll("p");
    for (var i =0; i<date.length;i++) {
        var currentDate = moment();

        currentDate.add(i,"days");
        currentDate = moment(currentDate).format("MM/DD/YYYY");

        date[i].innerText = currentDate;

        
    }
}
currentTime();