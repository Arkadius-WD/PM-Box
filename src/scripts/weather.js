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
  const btnWeather = document.querySelector('.weather__button');
  const cityName = document.querySelector('.weather__localisation');

  const options = {
    month: 'short',
    day: 'numeric',
  };

  const days = [];
  for (let index = 0; index < 5; index++) {
    const div = document.createElement('div');
    div.classList.add('weather__day');
    div.setAttribute('id', `weather__day-${index}`);
    div.innerHTML = `
      <p class="text-day"></p>
      <img src="" alt="weather icon" />
      <div class="weather__day-temperature">
        <p class="temp"></p>
      </div>
    `;
    daysContainer.appendChild(div);
    days.push(div);
  }

  const updateDay = (day, data) => {
    const { date, status, temp } = data;
    day.querySelector('.text-day').textContent = date;
    day.querySelector('img').setAttribute('src', weatherIcons[status]);
    day.querySelector('.temp').textContent = `${temp}°C`;
  };

  const getWeather = () => {
    const city = inputCity.value || 'Katowice';
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8ce19327be3e6730718f881dd238de8b&units=metric`;

    axios
      .get(URL)
      .then(res => {
        cityName.textContent = res.data.city.name;

        for (let index = 0; index < 5; index++) {
          const nextDate = new Date();
          nextDate.setDate(nextDate.getDate() + index);

          const formattedCurrentDate = nextDate.toLocaleDateString(
            'en-US',
            options,
          );

          const temp = Math.floor(res.data.list[index * 8].main.temp);
          const status = res.data.list[index * 8].weather[0].main;

          updateDay(days[index], {
            date: formattedCurrentDate,
            status,
            temp,
          });
        }
      })
      .catch(error => {
        console.error(error);
        cityName.textContent = 'Error: City not found';
        daysContainer.innerHTML = '';
      });
  };

  getWeather();
  btnWeather.addEventListener('click', getWeather);
};

export default weather;
