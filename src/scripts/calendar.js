const calendar = () => {
  // DATE FUNCTIONS
  const dayInMillis = 1000 * 60 * 60 * 24;

  const addDays = (date, number) => {
    return new Date(date.getTime() + number * dayInMillis);
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

  // CREATING OF CALENDAR
  class Calendar {
    constructor() {
      this.weekStart = null;
      this.weekEnd = null;
      this.weekOffSet = 0;
      this.mode = MODE.VIEW;
    }

    setup() {
      this.setupTimes();
      this.setupDays();
      this.calculateCurrentWeek();
      this.showWeek();
      this.setupControls();
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
        const slots = document.createElement('div');
        const dayDisplay = document.createElement('div');

        header.classList.add('calendar__column-header');
        header.textContent = name;
        slots.classList.add('calendar__slots');
        dayDisplay.classList.add('dayDisplay');

        for (let hour = 0; hour < 24; hour++) {
          const self = this;
          const slot = document.createElement('div');
          slot.setAttribute('data-hour', hour);
          slot.classList.add('calendar__slot');
          slot.addEventListener('click', () => self.clickSlot(hour, dayIndex));
          slot.addEventListener('mouseover', () => self.hoverOver(hour));
          slot.addEventListener('mouseout', () => self.hoverOut());
          slots.appendChild(slot);
        }

        day.appendChild(header);
        day.appendChild(slots);
        header.appendChild(dayDisplay);
      });
    }

    clickSlot(hour, dayIndex) {
      if (this.mode !== MODE.VIEW) {
        return;
      }
      this.mode = MODE.CREATE;
      const start = `${hour.toString().padStart(2, '0')}:00`;
      const end =
        hour < 23
          ? `${(hour + 1).toString().padStart(2, '0')}:00`
          : `${hour.toString().padStart(2, '0')}:59`;
      const date = dateString(addDays(this.weekStart, dayIndex));
      const event = {
        start,
        end,
        date,
        title: '',
        description: '',
        color: 'red',
      };

      this.openModal(event);
    }

    openModal(event) {
      const eventModalHeader = document.querySelector('.event-modal__header');
      const eventModal = document.querySelector('.event-modal');

      eventModalHeader.textContent =
        this.mode === MODE.CREATE ? 'Create a new event' : 'Update your event';
      eventModal.style.display = 'block';

      function fadeIn(element, duration) {
        element.style.opacity = 0;
        const start = performance.now();

        function animate(currentTime) {
          const elapsed = currentTime - start;
          element.style.opacity = elapsed / duration;

          if (elapsed < duration) {
            requestAnimationFrame(animate);
          }
        }

        requestAnimationFrame(animate);
      }

      document.querySelector('.event-modal__title').value = event.title;
      document.querySelector('.event-modal__date').value = event.date;
      document.querySelector('.event-modal__start').value = event.start;
      document.querySelector('.event-modal__end').value = event.end;
      document.querySelector('.event-modal__description').value =
        event.description;
      document.querySelector('.event-modal__color').classList.remove('active');
      document
        .querySelector(`.event-modal__color[data-color=${event.color}]`)
        .classList.add('active');

      if (this.mode === MODE.UPDATE) {
        document.getElementById('submitButton').value = 'Update';
        document.getElementById('deleteButton').style.display = 'block';
        document
          .getElementById('deleteButton')
          .addEventListener('click', () => {
            // todo
            console.log('delete event', event);
          });
        document.getElementById('copyButton').addEventListener('click', () => {
          // todo
          console.log('copy event', event);
        });
      } else if (this.mode === MODE.CREATE) {
        document.getElementById('submitButton').value = 'Create';
        document.getElementById('deleteButton').style.display = 'none';
        document.getElementById('copyButton').style.display = 'none';
      }

      fadeIn(eventModal, 200);
      document.querySelector('.event-modal__title').focus();
      document.querySelector('.calendar').classList.add('opaque');
      document.querySelector('.event-modal').addEventListener('submit', e => {
        e.preventDefault();
        // todo
        console.log('submit event', event);
      });
    }

    hoverOver(hour) {
      const calendarTime = document.querySelector(
        `.calendar__time[data-hour="${hour}"]`,
      );
      calendarTime.classList.add('currentTime');
    }

    hoverOut() {
      const calendarTime = document.querySelector(
        `.calendar__time.currentTime`,
      );
      calendarTime.classList.remove('currentTime');
    }

    calculateCurrentWeek() {
      const now = new Date();
      this.weekStart = addDays(now, -getDayIndex(now));
      this.weekEnd = addDays(this.weekStart, 6);
    }

    showWeek() {
      const options = {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      };
      document.querySelector('.week__start-display').textContent =
        this.weekStart.toLocaleDateString(undefined, options);
      document.querySelector('.week__end-display').textContent =
        this.weekEnd.toLocaleDateString(undefined, options);
      for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        const date = addDays(this.weekStart, dayIndex);
        const display = date.toLocaleDateString(undefined, {
          month: '2-digit',
          day: '2-digit',
        });
        const dayElement = document.querySelector(
          `.calendar__day[data-dayIndex="${dayIndex}"] .dayDisplay`,
        );
        dayElement.textContent = display;
      }

      if (this.weekOffSet === 0) {
        this.setCurrentDay(true); // Pokazuje aktualny dzień
      } else {
        this.setCurrentDay(false); // Ukrywa aktualny dzień
      }
    }

    setupControls() {
      const nextButton = document.querySelector('.week-controls__btn-next');
      const prevButton = document.querySelector('.week-controls__btn-prev');

      nextButton.addEventListener('click', () => this.changeWeek(1));
      prevButton.addEventListener('click', () => this.changeWeek(-1));
    }

    changeWeek(number) {
      this.weekOffSet += number;
      this.weekStart = addDays(this.weekStart, 7 * number);
      this.weekEnd = addDays(this.weekEnd, 7 * number);
      this.showWeek();
    }

    setCurrentDay(isVisible) {
      const now = new Date();
      const dayIndex = getDayIndex(now);
      const dayElement = document.querySelector(
        `.calendar__day[data-dayIndex="${dayIndex}"]`,
      );

      if (isVisible) {
        dayElement.classList.add('currentDay');
      } else {
        dayElement.classList.remove('currentDay');
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    new Calendar().setup();
  });
};

export default calendar;
