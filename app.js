window.getWeather = function () {

  let cityName = document.querySelector("#cityName").value;
  

  let API_KEY = 'b0bad7097ac87e74ea737d1991b1d08e'

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
  .then(function (response) {
    // handle success

  
    console.log(response.data);
    document.querySelector("#resultTemperature").innerHTML = `${response.data.main.temp}°C`
    document.querySelector("#resultCloud").innerHTML = `${response.data.weather[0].main}`
    document.querySelector("#resultCity").innerHTML = `${response.data.name}`
    document.querySelector("#resultCountry").innerHTML = `  ${response.data.sys.country}`
    
  })
  .catch(function (error) {
    // handle error
    console.log(error.data);
    document.querySelector("#result").innerHTML = "Please! Enter Your City Name"
  })
  
  let currentTime = moment().format('LT');
  let currentDay = moment().format('Do  MMM');   
  document.querySelector("#resultDate").innerHTML = `  ${currentDay}`
  document.querySelector("#resultTime").innerHTML = `  ${currentTime}`

  
  


  

}




// https://openweathermap.org/img/wn/10d@2x.png

  