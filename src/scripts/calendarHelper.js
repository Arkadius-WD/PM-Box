const calendarHelper = () => {
  // DATE FUNCTIONS
  const dayInMilis = 1000 * 60 * 60 * 24;

  const addDays = (date, number) => {
    return new Date(date.getTime() + number * dayInMilis);
  };

  const getDayIndex = date => {
    const falseIndex = date.getDay();
    return falseIndex === 0 ? 6 : falseIndex - 1;
  };

  const dateString = date => {
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

  const MODE = {
    VIEW: 1,
    UPDATE: 2,
    CREATE: 3,
  };
};

export default calendarHelper;
