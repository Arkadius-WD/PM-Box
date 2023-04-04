import axios from 'axios';
import sunIcon from '../img/weather/sun.png';

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
    console.log(res.data);
    /// CREATE ELEMENTS ///
    for (let index = 0; index < 5; index++) {
      nextDate.setDate(currentDate.getDate() + index);
      const formattedCurrentDate = nextDate.toLocaleDateString(
        'en-US',
        options,
      );
      const temp = Math.floor(res.data.list[index * 8].main.temp);
      console.log(res.data.list[index * 8]);

      const div = document.createElement('div');
      div.classList.add('weather__day');
      div.setAttribute('id', `weather__day-${index}`);
      div.innerHTML = `
      <p class="text-day">${formattedCurrentDate}</p>
      <img src="${sunIcon}" alt="weather icon" />
      <div class="weather__day-temperature">
      <p class="temp">${temp}°C</p>
      </div>
    `;
      daysContainer.appendChild(div);
    }
  });
};

export default weather;
