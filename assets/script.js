

var apiKey = 'ba45cee755183b20520597d1996ada97'
var button = document.querySelector('#search-button');
var inputValue = document.querySelector('#search-bar'); 

var date = (moment().format("M" + "/" + "D" + "/" + "YYYY"));
var dateTwo = document.querySelector('#date-tomorrow');
var dateThree = document.querySelector('#date-three');
var dateFour = document.querySelector('#date-four')
var dateFive = document.querySelector('#date-five')
var dateSix = document.querySelector('#date-six')


var dayOneCity = document.querySelector('.day-1-city');
var dayOneTemp = document.querySelector('.day-1-temp');
var dayOneWind = document.querySelector('.day-1-wind');
var dayOneHumidity = document.querySelector('.day-1-humidity');

var dayTwoTemp = document.querySelector('.day-2-temp');
var dayTwoWind = document.querySelector('.day-2-wind');
var dayTwoHumidity = document.querySelector('.day-2-humidity');

var dayThreeTemp = document.querySelector('.day-3-temp');
var dayThreeWind = document.querySelector('.day-3-wind');
var dayThreeHumidity = document.querySelector('.day-3-humidity');

var dayFourTemp = document.querySelector('.day-4-temp');
var dayFourWind = document.querySelector('.day-4-wind');
var dayFourHumidity = document.querySelector('.day-4-humidity');

var dayFiveTemp = document.querySelector('.day-5-temp');
var dayFiveWind = document.querySelector('.day-5-wind');
var dayFiveHumidity = document.querySelector('.day-5-humidity');

var daySixTemp = document.querySelector('.day-6-temp');
var daySixWind = document.querySelector('.day-6-wind');
var daySixHumidity = document.querySelector('.day-6-humidity');



var lat = "";
var lon = "";



button.addEventListener('click', function() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' +inputValue.value+ '&appid=ba45cee755183b20520597d1996ada97') 
  .then(response => response.json())
    .then(data => {
      var latValue = data['coord']['lat'];
      var lonValue = data['coord']['lon'];



    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latValue + '&lon=' + lonValue + '&appid=ba45cee755183b20520597d1996ada97')
    .then(response => response.json())
    .then(data => {


  //Current weather display (Main Area)
      var dayOneCityValue = data['city']['name'];
      var dayOneTempValue = data['list'][0]['main']['temp']; 
      var dayOneHumidityValue = data['list'][0]['main']['humidity'];
      var dayOneWindValue = data['list'][0]['wind']['speed'];
    
      dayOneTempValue = (dayOneTempValue - 273) * 1.8 + 32;
      dayOneTempValue = Math.round(dayOneTempValue);

      dayOneCity.innerHTML = dayOneCityValue + " (" + date + ")"; 
      dayOneTemp.innerHTML = dayOneTempValue + " °F";
      dayOneHumidity.innerHTML = dayOneHumidityValue; 
      dayOneWind.innerHTML = dayOneWindValue + " MPH";


  // 5 Day Forecast ---------------

//NextDay  
      var dayTwoTempValue = data['list'][1]['main']['temp']; 
      var dayTwoHumidityValue = data['list'][1]['main']['humidity'];
      var dayTwoWindValue = data['list'][1]['wind']['speed'];

      dayTwoTempValue = (dayTwoTempValue - 273) * 1.8 + 32;
      dayTwoTempValue = Math.round(dayTwoTempValue);

      var tomorrowDate = (moment().add(1, 'days').format("M" + "/" + "D" + "/" + "YYYY"));
      dateTwo.innerHTML = tomorrowDate;
      dayTwoTemp.innerHTML = dayTwoTempValue + " °F";
      dayTwoHumidity.innerHTML = dayTwoHumidityValue;
      dayTwoWind.innerHTML = dayTwoWindValue + " MPH";


//Third Day
       var dayThreeTempValue = data['list'][2]['main']['temp']; 
      var dayThreeHumidityValue = data['list'][2]['main']['humidity'];
      var dayThreeWindValue = data['list'][2]['wind']['speed'];

      dayThreeTempValue = (dayThreeTempValue - 273) * 1.8 + 32;
      dayThreeTempValue = Math.round(dayThreeTempValue);

      var thirdDayDate = (moment().add(2, 'days').format("M" + "/" + "D" + "/" + "YYYY"));
      dateThree.innerHTML = thirdDayDate;
      dayThreeTemp.innerHTML = dayThreeTempValue + " °F";
      dayThreeHumidity.innerHTML = dayThreeHumidityValue;
      dayThreeWind.innerHTML = dayThreeWindValue + " MPH";


//Fourth Day 
      var dayFourTempValue = data['list'][3]['main']['temp']; 
      var dayFourHumidityValue = data['list'][3]['main']['humidity'];
      var dayFourWindValue = data['list'][3]['wind']['speed'];

      dayFourTempValue = (dayFourTempValue - 273) * 1.8 + 32;
      dayFourTempValue = Math.round(dayFourTempValue);

      var fourthDayDate = (moment().add(3, 'days').format("M" + "/" + "D" + "/" + "YYYY"));
      dateFour.innerHTML = fourthDayDate;
      dayFourTemp.innerHTML = dayFourTempValue + " °F";
      dayFourHumidity.innerHTML = dayFourHumidityValue;
      dayFourWind.innerHTML = dayFourWindValue + " MPH";

//Fifth Day 
      var dayFiveTempValue = data['list'][4]['main']['temp']; 
      console.log(dayFiveTempValue);
      var dayFiveHumidityValue = data['list'][4]['main']['humidity'];
      console.log(dayFiveHumidityValue);
      var dayFiveWindValue = data['list'][4]['wind']['speed'];
      console.log(dayFiveWindValue);

      dayFiveTempValue = (dayFiveTempValue - 273) * 1.8 + 32;
      dayFiveTempValue = Math.round(dayFiveTempValue);

      var fifthDayDate = (moment().add(4, 'days').format("M" + "/" + "D" + "/" + "YYYY"));
      dateFive.innerHTML = fifthDayDate;
      dayFiveTemp.innerHTML = dayFiveTempValue + " °F";
      dayFiveHumidity.innerHTML = dayFiveHumidityValue;
      dayFiveWind.innerHTML = dayFiveWindValue + " MPH";

//Sixth Day 
      var daySixTempValue = data['list'][5]['main']['temp']; 
      console.log(daySixTempValue);
      var daySixHumidityValue = data['list'][5]['main']['humidity'];
      console.log(daySixHumidityValue);
      var daySixWindValue = data['list'][5]['wind']['speed'];
      console.log(daySixWindValue);

      daySixTempValue = (daySixTempValue - 273) * 1.8 + 32;
      daySixTempValue = Math.round(daySixTempValue);

      var sixthDayDate = (moment().add(5, 'days').format("M" + "/" + "D" + "/" + "YYYY"));
      dateSix.innerHTML = sixthDayDate;
      daySixTemp.innerHTML = daySixTempValue + " °F";
      daySixHumidity.innerHTML = daySixHumidityValue;
      daySixWind.innerHTML = daySixWindValue + " MPH";

    }); 
})})

