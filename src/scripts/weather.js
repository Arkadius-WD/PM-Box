import axios from 'axios';
import Clouds from '../img/weather/Clouds.png';
import Drizzle from '../img/weather/Drizzle.png';
import Snow from '../img/weather/Snow.png';
import Rain from '../img/weather/Rain.png';
import Clear from '../img/weather/Clear.png';
import Thunderstorm from '../img/weather/Thunderstorm.png';

const weatherIcons = {
  Clear,
  Clouds,
  Drizzle,
  Snow,
  Rain,
  Thunderstorm,
};

const weather = () => {
  const daysContainer = document.querySelector('.weather__days');
  const inputCity = document.querySelector('.weather__city-input');

  /// DATE ///
  const currentDate = new Date();
  const nextDate = new Date(currentDate);
  const options = {
    month: 'short',
    day: 'numeric',
  };

  /// API ///
  const API_LINK = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  const API_KEY = '&appid=8ce19327be3e6730718f881dd238de8b';
  const API_UNITS = '&units=metric';

  /// GET WEATHER ///
  const city = inputCity.value || 'Katowice';
  const URL = API_LINK + city + API_KEY + API_UNITS;

  axios.get(URL).then(res => {
    console.log(res.data.list[0].weather);

    /// Create elements ///
    for (let index = 0; index < 5; index++) {
      nextDate.setDate(currentDate.getDate() + index);
      const formattedCurrentDate = nextDate.toLocaleDateString(
        'en-US',
        options,
      );
      const temp = Math.floor(res.data.list[index * 8].main.temp);
      const status = { ...res.data.list[index * 8].weather[0] };

      console.log(status.main);

      const div = document.createElement('div');
      div.classList.add('weather__day');
      div.setAttribute('id', `weather__day-${index}`);
      div.innerHTML = `
      <p class="text-day">${formattedCurrentDate}</p>
      <img src="${weatherIcons[status.main]}" alt="weather icon" />
      <div class="weather__day-temperature">
      <p class="temp">${temp}°C</p>
      </div>
    `;
      daysContainer.appendChild(div);
    }
  });
};

export default weather;
