const schedule = () => {
  class Calendar {
    setup() {
      this.setupTimes();
    }

    // eslint-disable-next-line class-methods-use-this
    setupTimes() {
      const header = document.createElement('div');
      header.classList.add('columnHeader');

      const slots = document.createElement('div');
      slots.classList.add('slots');

      for (let hour = 0; hour < 24; hour++) {
        const timeSlot = document.createElement('div');
        timeSlot.setAttribute('data-hour', hour);
        timeSlot.classList.add('time');
        timeSlot.textContent = `${hour}:00 - ${hour + 1}:00`;
        slots.appendChild(timeSlot);
      }

      const dayTime = document.querySelector('.calendar__days-time');
      dayTime.appendChild(header);
      dayTime.appendChild(slots);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    new Calendar().setup();
  });
};

export default schedule;
