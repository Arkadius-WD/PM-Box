const weather = () => {
  const date = () => {
    const currentDate = new Date();
    const options = {
      month: 'short',
      day: 'numeric',
    };
    const tomorrowDate = new Date();
    tomorrowDate.setDate(currentDate.getDate() + 1);
    const afterTomorrowDate = new Date();
    afterTomorrowDate.setDate(currentDate.getDate() + 2);

    const formattedCurrentDate = currentDate.toLocaleDateString(
      'en-US',
      options,
    );
    const formattedTomorrowDate = tomorrowDate.toLocaleDateString(
      'en-US',
      options,
    );
    const formattedAfterTomorrowDate = afterTomorrowDate.toLocaleDateString(
      'en-US',
      options,
    );

    document.querySelector('.text-today').textContent = formattedCurrentDate;
    document.querySelector('.text-tomorrow').textContent =
      formattedTomorrowDate;
    document.querySelector('.text-after').textContent =
      formattedAfterTomorrowDate;
  };

  const forecast = () => {
    const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?lat=';
    const API_KEY = '&appid=8ce19327be3e6730718f881dd238de8b';
    const API_UNITS = '&units=metric';
  };

  date();
  forecast();
};

export default weather;
