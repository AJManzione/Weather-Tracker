var apiKey = 'ba45cee755183b20520597d1996ada97'

var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={ba45cee755183b20520597d1996ada97}';
var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      // We check whether the response.status equals 200, as follows:
      if (response.status === 200) {
      	//If it does, we assign the status code from response.status to the textContent
        responseText.textContent = response.status;
      }
      // we return response.json()
      return response.json();
  }).then(function(data){
    console.log(data);
  });
}
