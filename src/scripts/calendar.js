import CalendarTemplate from './CalendarTemplate';

const calendar = () => {
  document.addEventListener('DOMContentLoaded', () => {
    new CalendarTemplate().setup();
  });
};

export default calendar;
