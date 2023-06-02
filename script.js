const apiKey = '0f5a0b4eac494231171566e1c54e8300'; 
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherBox = document.querySelector('.weather-box');
const container = document.querySelector('.container');
const weatherDetails = document.querySelector('.weather-details');
const error=document.querySelector('.not-found');


const search_box = document.querySelector(".search-box input");
const search_btn = document.querySelector(".search-box button");
const cityElement = document.querySelector('.city');
const temperatureElement = document.querySelector('.temperature');
const humidityElement = document.querySelector('.humidity span');
const windElement = document.querySelector('.wind span');
const descriptionElement = document.querySelector('.description');
const image = document.querySelector('.weather-box img');
error.style.display = 'none';
weatherBox.style.display = 'none';
weatherDetails.style.display='none';
async function checkWeather(city) {
  if (city === '')
        return;
  error.style.display = 'none';
  const response = await fetch(url + city + `&appid=${apiKey}`);
  const data = await response.json();
  if(data.cod==='404')
  {
    weatherBox.style.display = 'none';
    weatherDetails.style.display = 'none';
    error.style.display = 'block';
    return;

  }
  console.log(data);
  cityElement.innerHTML = data.name;
  temperatureElement.innerHTML = `${data.main.temp} <span>°C</span>`;
  humidityElement.innerHTML = `${data.main.humidity}%`;
  windElement.innerHTML = `${data.wind.speed}km/hr`;
  descriptionElement.innerHTML = data.weather[0].description;
  weatherBox.style.display = '';
  container.style.height = '590px';
  weatherDetails.style.display = '';
  switch (data.weather[0].main) {
    case 'Clear':
        image.src = 'images/clear.png';
        break;

    case 'Rain':
        image.src = 'images/rain.png';
        break;

    case 'Snow':
        image.src = 'images/snow.png';
        break;

    case 'Clouds':
        image.src = 'images/cloud.png';
        break;

    case 'Haze':
        image.src = 'images/mist.png';
        break;
        
    case 'Dust':
        image.src = 'images/dust.png';
        break;
    
    case 'Thunderstorm':
        image.src = 'images/Thunderstorm.png';
        break;
    
    default:
        image.src = '';
}

}

search_btn.addEventListener("click", () => {
  const city = search_box.value;
  checkWeather(city);
});
