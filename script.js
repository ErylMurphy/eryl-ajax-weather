
const getWeather = (zipcode) => {
  let inputZipcode = $('#zipcode').val();


  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputZipcode},us&appid=${config.weatherAPIkey}`)
    .then(response => {
      return response.json();
    })
    .then(json => {

      const weather2day = {
        city: json.name,
        temp: Math.round(json.main.temp - 273.15),
        main: json.weather[0].main,
        mintemp: json.main.temp_min - 273.15,
        maxtemp: json.main.temp_max - 273.15,
        clouds: json.clouds.all
      }
      $('.city').html(`If you are in ${weather2day.city}, then the temperature is ${weather2day.temp}°C and you should prepare for ${weather2day.main}. At the lowest, the temperature will be ${weather2day.mintemp}°C, and ${weather2day.maxtemp}°C at the highest. The cloud situation is ${weather2day.clouds} (whatever that means).`);


      console.log(json);
      if (weather2day.main === 'Thunderstorm' && weather2day.maxtemp > 25) {
        $('body').css('background-image', 'url("https://media.giphy.com/media/HmTLatwLWpTQk/giphy.gif")');
      }
      else if (weather2day.main === 'Thunderstorm') {
        $('body').css('background-image', 'url("https://media.giphy.com/media/8xY1YYpEZ4dws/giphy.gif")');
      }
      else if (weather2day.main === 'Rain') {
        $('body').css('background-image', 'url("https://media.giphy.com/media/ZPYun4MuPaCdy/giphy.gif")');
      }
      else if (weather2day.main === 'Snow') {
        $('body').css('background-image', 'url("https://media.giphy.com/media/l2Sq3YeO2DEyVz8ha/giphy.gif")');
      }
      else if (weather2day.main === 'Clear') {
        $('body').css('background-image', 'url("https://media.giphy.com/media/Uz4cDaGXPxeuY/giphy.gif")');
      }
      else if (weather2day.main === 'Clear' && weather2day.maxtemp > 30) {
        $('body').css('background-image', 'url("https://media.giphy.com/media/xT0wlvGLHmojbeu5vq/giphy.gif")')
      }
      else if (weather2day.main === 'Clouds') {
        $('body').css('background-image', 'url("https://media.giphy.com/media/3o6EhOYMhOTANYgHMk/giphy.gif")');
      }
      else {
        $('body').css('background-image', 'url("https://j.gifs.com/YvmkKO.gif")');
      }
    }
    );
  return weather2day
};

$('.submit').on('click', () => {
  console.log('inside click handler')
  getWeather();
})

const button = document.querySelector('button')


