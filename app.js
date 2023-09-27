window.getWeather = function () {

  let cityName = document.querySelector("#cityName").value;
  

  let API_KEY = 'b0bad7097ac87e74ea737d1991b1d08e'

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
  .then(function (response) {
    // handle success
    console.log(response.data);
    document.querySelector("#result").innerHTML = ` Currwnt Temperature of ${response.data.name} is ${response.data.main.temp}°C`
    
  })
  .catch(function (error) {
    // handle error
    console.log(error.data);
    document.querySelector("#result").innerHTML = "error in getting weather data"
  })
  

}




// https://openweathermap.org/img/wn/10d@2x.png

  