const calendar = () => {
  // Date functions
  const dayInMillis = 1000 * 60 * 60 * 24;

  const addDays = (date, number) => {
    return new Date(date.getTime() + number * dayInMillis);
  };

  const getDayIndex = date => {
    const falseIndex = date.getDay();
    return falseIndex === 0 ? 6 : falseIndex - 1;
  };

  // Creating of calendar in calendar-window
  class Calendar {
    constructor() {
      this.weekStart = null;
      this.weekEnd = null;
    }

    setup() {
      this.setupTimes();
      this.setupDays();
      this.calculateCurrentWeek();
    }

    setupTimes() {
      const header = document.createElement('div');
      const slots = document.createElement('div');

      header.classList.add('calendar__column-header');
      slots.classList.add('calendar__slots');

      for (let hour = 0; hour < 24; hour++) {
        const timeSlot = document.createElement('div');
        timeSlot.setAttribute('data-hour', hour);
        timeSlot.classList.add('calendar__time');
        timeSlot.textContent = `${hour}:00 - ${hour + 1}:00`;
        slots.appendChild(timeSlot);
      }

      const dayTime = document.querySelector('.calendar__days-time');
      dayTime.appendChild(header);
      dayTime.appendChild(slots);
    }

    setupDays() {
      const calendarDays = document.querySelectorAll('.calendar__day');

      calendarDays.forEach(day => {
        const dayIndex = parseInt(day.getAttribute('data-dayIndex'), 10);
        const name = day.getAttribute('data-name');
        const header = document.createElement('div');
        header.classList.add('calendar__column-header');
        header.textContent = name;
        const slots = document.createElement('div');
        slots.classList.add('calendar__slots');

        for (let hour = 0; hour < 24; hour++) {
          const call = this;
          const slot = document.createElement('div');
          slot.setAttribute('data-hour', hour);
          slot.classList.add('calendar__slot');
          slot.addEventListener('click', () => call.clickSlot(hour, dayIndex));
          slot.addEventListener('mouseover', () => call.hoverOver(hour));
          slot.addEventListener('mouseout', () => call.hoverOut());
          slots.appendChild(slot);
        }

        day.appendChild(header);
        day.appendChild(slots);
      });
    }

    clickSlot(hour, dayIndex) {
      console.log('click!', hour, dayIndex);
    }

    hoverOver(hour) {
      console.log('hover!', hour);
    }

    hoverOut() {
      // todo
    }

    calculateCurrentWeek() {
      const now = new Date();
      this.weekStart = addDays(now, -getDayIndex(now));
      this.weekEnd = addDays(this.weekStart, 6);
    }

    // showWeek() {
    //   ('#weekStartDisplay').text(this.weekStart);
    // }
  }

  document.addEventListener('DOMContentLoaded', () => {
    new Calendar().setup();
  });
};

export default calendar;
