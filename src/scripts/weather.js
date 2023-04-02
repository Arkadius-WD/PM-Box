import axios from 'axios';

const weather = () => {
  const daysContainer = document.querySelector('.weather__days');
  const inputCity = document.querySelector('.weather__city-input');

  ///  DATE ///
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
  const city = inputCity.value || 'London';
  const URL = API_LINK + city + API_KEY + API_UNITS;
  axios.get(URL).then(res => console.log(res));

  /// CREATE ELEMENTS ///
  for (let index = 0; index < 5; index++) {
    nextDate.setDate(currentDate.getDate() + index);
    const formattedCurrentDate = nextDate.toLocaleDateString('en-US', options);

    const div = document.createElement('div');
    div.classList.add('weather__day');
    div.setAttribute('id', `weather__day-${index}`);

    div.innerHTML = `
      <img src="./img/weather/sun.png" alt="weather icon" />
      <div class="weather__day-temperature">
        <p>7℃/5℃</p>
      </div>
      <p class="text-day">${formattedCurrentDate}</p>
    `;

    daysContainer.appendChild(div);
  }
};

export default weather;
