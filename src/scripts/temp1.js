import { dateString, getDayIndex, addDays } from './helper.js';
import { Event, MODE } from './Event.js';

class Calendar {
  constructor() {
    this.mode = MODE.VIEW;
    this.events = {};
    this.weekOffset = 0;
    this.readyToTrash = false;
    this.slotHeight = 30;
    this.weekStart = null;
    this.weekEnd = null;
    this.eventsLoaded = false;
  }

  setup() {
    this.setupTimes();
    this.setupDays();
    this.calculateCurrentWeek();
    this.showWeek();
    this.loadEvents();
    this.setupControls();
  }

  setupControls() {
    document
      .querySelector('.week-controls__btn-next')
      .addEventListener('click', () => this.changeWeek(1));
    document
      .querySelector('.week-controls__btn-prev')
      .addEventListener('click', () => this.changeWeek(-1));
    document
      .querySelector('.general-controls__btn-add')
      .addEventListener('click', () => this.addNewEvent());
    document
      .querySelector('.general-controls__btn-trash')
      .addEventListener('click', () => this.trash());
    document
      .getElementById('cancelButton')
      .addEventListener('click', () => this.closeModal());

    const colors = document.querySelectorAll('.event-modal__color');
    colors.forEach(color => {
      color.addEventListener('click', event => this.changeColor(event));
    });
  }

  setupTimes() {
    const header = document.createElement('div');
    const slots = document.createElement('div');

    header.classList.add('columnHeader');
    slots.classList.add('slots');

    for (let hour = 0; hour < 24; hour++) {
      const div = document.createElement('div');
      div.setAttribute('data-hour', hour);
      div.classList.add('time');
      div.innerText = `${hour}:00 - ${hour + 1}:00`;
      slots.appendChild(div);
    }
    document.querySelector('.calendar__days-time').appendChild(header);
    document.querySelector('.calendar__days-time').appendChild(slots);
  }

  setupDays() {
    const cal = this;
    const days = document.querySelectorAll('.day');

    days.forEach(function (day) {
      const dayIndex = parseInt(day.getAttribute('data-dayIndex'), 10);
      const name = day.getAttribute('data-name');
      const header = document.createElement('div');
      const slots = document.createElement('div');
      const dayDisplay = document.createElement('div');

      header.classList.add('columnHeader');
      header.innerText = name;
      slots.classList.add('slots');
      dayDisplay.classList.add('dayDisplay');
      header.appendChild(dayDisplay);

      for (let hour = 0; hour < 24; hour++) {
        const div = document.createElement('div');
        div.setAttribute('data-hour', hour);
        div.classList.add('slot');
        div.addEventListener('click', () => cal.clickSlot(hour, dayIndex));
        div.addEventListener('mouseover', () => cal.hoverOver(hour));
        div.addEventListener('mouseout', () => cal.hoverOut());
        slots.appendChild(div);
      }

      day.appendChild(header);
      day.appendChild(slots);
    });
  }

  calculateCurrentWeek() {
    const now = new Date();
    this.weekStart = addDays(now, -getDayIndex(now));
    this.weekEnd = addDays(this.weekStart, 6);
  }

  changeWeek(number) {
    this.weekOffset += number;
    this.weekStart = addDays(this.weekStart, 7 * number);
    this.weekEnd = addDays(this.weekEnd, 7 * number);
    this.showWeek();
    this.loadEvents();
  }

  showWeek() {
    const options = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    };
    document.getElementById('weekStartDisplay').innerText =
      this.weekStart.toLocaleDateString(undefined, options);
    document.getElementById('weekEndDisplay').innerText =
      this.weekEnd.toLocaleDateString(undefined, options);

    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      const date = addDays(this.weekStart, dayIndex);
      const display = date.toLocaleDateString(undefined, {
        month: '2-digit',
        day: '2-digit',
      });

      document.querySelector(
        `.calendar__day[data-dayIndex="${dayIndex}"] .dayDisplay`,
      ).innerText = display;
    }
    if (this.weekOffset === 0) {
      this.showCurrentDay();
    } else {
      this.hideCurrentDay();
    }
  }

  showCurrentDay() {
    const now = new Date();
    const dayIndex = getDayIndex(now);
    document
      .querySelector(`.calendar__day[data-dayIndex="${dayIndex}"]`)
      .classList.add('currentDay');
  }

  hideCurrentDay() {
    const days = document.querySelectorAll('.calendar__day');
    days.forEach(day => {
      day.classList.remove('currentDay');
    });
  }

  hoverOver(hour) {
    const time = document.querySelector(`.time[data-hour="${hour}"]`);
    time.classList.add('currentTime');
  }

  hoverOut() {
    const times = document.querySelectorAll('.time');
    times.forEach(function (time) {
      time.classList.remove('currentTime');
    });
  }

  clickSlot(hour, dayIndex) {
    if (this.mode !== MODE.VIEW) return;
    this.mode = MODE.CREATE;
    const start = `${hour.toString().padStart(2, '0')}:00`;
    const end =
      hour < 23
        ? `${(hour + 1).toString().padStart(2, '0')}:00`
        : `${hour.toString().padStart(2, '0')}:59`;

    const date = dateString(addDays(this.weekStart, dayIndex));

    const event = new Event({
      start,
      end,
      date,
      title: '',
      description: '',
      color: 'red',
    });
    this.openModal(event);
  }

  changeColor() {
    const colors = document.getElementsByClassName('color');
    for (let i = 0; i < colors.length; i++) {
      colors[i].classList.remove('active');
    }
    this.classList.add('active');
  }

  openModal(event) {
    const modalTitle = document.getElementById('modalTitle');
    const eventTitle = document.getElementById('eventTitle');
    const eventDate = document.getElementById('eventDate');
    const eventStart = document.getElementById('eventStart');
    const eventEnd = document.getElementById('eventEnd');
    const eventDescription = document.getElementById('eventDescription');
    const colors = document.getElementsByClassName('color');
    const deleteButton = document.getElementById('deleteButton');
    const copyButton = document.getElementById('copyButton');

    modalTitle.innerText =
      this.mode === MODE.UPDATE ? 'Update your event' : 'Create a new event';

    eventTitle.value = event.title;
    eventDate.value = event.date;
    eventStart.value = event.start;
    eventEnd.value = event.end;
    eventDescription.value = event.description;

    for (let i = 0; i < colors.length; i++) {
      colors[i].classList.remove('active');
    }

    document
      .querySelector(`.color[data-color="${event.color}"]`)
      .classList.add('active');

    if (this.mode === MODE.UPDATE) {
      document.getElementById('submitButton').value = 'Update';

      deleteButton.style.display = 'block';
      deleteButton.removeEventListener('click', event.deleteIn);
      deleteButton.addEventListener('click', () => event.deleteIn(this));

      copyButton.style.display = 'block';
      copyButton.removeEventListener('click', event.copyIn);
      copyButton.addEventListener('click', () => event.copyIn(this));
    } else if (this.mode === MODE.CREATE) {
      document.getElementById('submitButton').value = 'Create';
      document.getElementById('deleteButton').style.display = 'none';
      document.getElementById('copyButton').style.display = 'none';
    }
    const eventModal = document.getElementById('eventModal');
    eventModal.style.display = 'block';
    eventTitle.focus();
    const calendar = document.getElementById('calendar');
    calendar.classList.add('opaque');
    eventModal.removeEventListener('submit', this.submitModal);
    eventModal.addEventListener('submit', e => {
      e.preventDefault();
      this.submitModal(event);
    });
  }

  submitModal(event) {
    const errors = document.getElementById('errors');
    errors.innerText = '';
    if (event.isValidIn(this)) {
      event.updateIn(this);
      this.closeModal();
    } else {
      const errorMessages = event.getValidationErrors(this);
      errorMessages.forEach(function (message) {
        const error = document.createElement('div');
        error.innerText = message;
        errors.appendChild(error);
      });
    }
  }

  closeModal() {
    const eventModal = document.getElementById('eventModal');
    eventModal.style.display = 'none';
    const errors = document.getElementById('errors');
    errors.innerText = '';
    const calendar = document.getElementById('calendar');
    calendar.classList.remove('opaque');
    this.mode = MODE.VIEW;
  }

  addNewEvent() {
    if (this.mode !== MODE.VIEW) return;
    this.mode = MODE.CREATE;
    const event = new Event({
      start: '12:00',
      end: '13:00',
      date: dateString(this.weekStart),
      title: '',
      description: '',
      color: 'red',
    });
    this.openModal(event);
  }

  saveEvents() {
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  loadEvents() {
    const events = localStorage.getItem('events');
    if (events) {
      this.events = JSON.parse(events);
      Object.keys(this.events).forEach(date => {
        Object.keys(this.events[date]).forEach(id => {
          const event = new Event(this.events[date][id]);
          this.events[date][id] = event;
        });
      });
    } else {
      this.events = {};
    }
    const eventElements = document.getElementsByClassName('event');
    while (eventElements.length > 0) {
      eventElements[0].remove();
    }
    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      const date = dateString(addDays(this.weekStart, dayIndex));
      if (this.events[date]) {
        const eventsList = Object.values(this.events[date]);
        eventsList.forEach(function (event) {
          event.showIn(this);
        }, this);
      }
    }
  }

  trash() {
    if (this.mode !== MODE.VIEW) return;
    if (this.readyToTrash) {
      this.readyToTrash = false;
      this.events = {};
      this.saveEvents();
      const eventElements = document.getElementsByClassName('event');
      while (eventElements.length > 0) {
        eventElements[0].remove();
      }
    } else {
      this.readyToTrash = true;
      window.alert(
        'This will delete all the events in your calendar. ' +
          'This cannot be undone. If you are sure, click ' +
          'the trash can again in the next minute.',
      );
      setTimeout(() => {
        this.readyToTrash = false;
      }, 60 * 1000);
    }
  }
}
