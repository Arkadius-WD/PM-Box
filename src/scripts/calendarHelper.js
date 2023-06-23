export const dateString = date => {
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
};

export const getDayIndex = date => {
  const falseIndex = date.getDay();
  return falseIndex === 0 ? 6 : falseIndex - 1;
};

export const addDays = (date, number) => {
  const dayInMilis = 1000 * 60 * 60 * 24;
  return new Date(date.getTime() + number * dayInMilis);
};

export const generateId = (length = 20) => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';

  if (length <= 0) {
    return '';
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars.charAt(randomIndex);
  }
  return id;
};
