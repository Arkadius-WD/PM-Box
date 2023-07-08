import { dateString, getDayIndex, addDays } from './calendarHelper';
import { Event, MODE } from './calendarEvent';

export default class CalendarTemplate {
  constructor() {
    this.mode = MODE.VIEW;
    this.events = {};
    this.weekOffset = 0;
    this.readyToTrash = false;
    this.slotHeight = 2.6;
    this.weekStart = null;
    this.weekEnd = null;
    this.eventsLoaded = false;
  }

  setup() {
    this.setupTimes();
    this.setupDays();
    this.calculateCurrentWeek();
    this.showWeek();
    this.setupControls();
    this.loadEvents();
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
    header.classList.add('calendar__column-header');
    slots.classList.add('calendar__slots');

    for (let hour = 0; hour < 24; hour++) {
      const timeSlot = document.createElement('div');
      timeSlot.setAttribute('data-hour', hour);
      timeSlot.classList.add('calendar__time');
      timeSlot.textContent = `${hour}:00 - ${hour + 1}:00`;
      slots.appendChild(timeSlot);
    }

    document.querySelector('.calendar__days-time').appendChild(header);
    document.querySelector('.calendar__days-time').appendChild(slots);
  }

  setupDays() {
    const cal = this;
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
      header.appendChild(dayDisplay);

      for (let hour = 0; hour < 24; hour++) {
        const slot = document.createElement('div');
        slot.setAttribute('data-hour', hour);
        slot.classList.add('calendar__slot');
        slot.addEventListener('click', () => cal.clickSlot(hour, dayIndex));
        slot.addEventListener('mouseover', () => cal.hoverOver(hour));
        slot.addEventListener('mouseout', () => cal.hoverOut());
        slots.appendChild(slot);
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
    const calendarTime = document.querySelector(
      `.calendar__time[data-hour="${hour}"]`,
    );
    calendarTime.classList.add('currentTime');
  }

  hoverOut() {
    const calendarTime = document.querySelector(`.calendar__time.currentTime`);
    calendarTime.classList.remove('currentTime');
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

    const data = {
      start,
      end,
      date,
      title: '',
      description: '',
      color: 'red',
    };

    const event = new Event(data);
    this.openModal(event);
  }

  changeColor(event) {
    const colors = document.querySelectorAll('.event-modal__color');
    colors.forEach(color => {
      color.classList.remove('active');
    });
    event.target.classList.add('active');
  }

  openModal(event) {
    const eventModal = document.querySelector('.event-modal');
    const eventModalHeader = document.querySelector('.event-modal__header');
    const titleInput = document.querySelector('.event-modal__title');
    const dateInput = document.querySelector('.event-modal__date');
    const startInput = document.querySelector('.event-modal__start');
    const endInput = document.querySelector('.event-modal__end');
    const descriptionInput = document.querySelector(
      '.event-modal__description',
    );
    const colors = document.querySelectorAll('.event-modal__color');
    const calendarWindow = document.querySelector('.calendar__window');
    const submitButton = document.getElementById('submitButton');
    const deleteButton = document.getElementById('deleteButton');
    const copyButton = document.getElementById('copyButton');

    const defaultColor = colors[0];

    eventModalHeader.textContent =
      this.mode === MODE.CREATE ? 'Create a new event' : 'Update your event';

    titleInput.value = event.title;
    dateInput.value = event.date;
    startInput.value = event.start;
    endInput.value = event.end;
    descriptionInput.value = event.description;
    colors.dataset = event.color;

    eventModal.style.display = 'block';
    eventModal.style.transition = 'opacity 200ms';
    eventModal.style.opacity = 1;
    titleInput.focus();
    calendarWindow.classList.add('opaque');
    defaultColor.classList.add('active');

    eventModal.addEventListener('submit', e => {
      e.preventDefault();
      this.submitModal(event);
    });

    submitButton.addEventListener('click', e => {
      e.preventDefault();
      this.submitModal(event);
    });

    if (this.mode === MODE.UPDATE) {
      submitButton.value = 'Update';
      deleteButton.addEventListener('click', () => event.deleteIn(this));
      deleteButton.style.display = 'block';
      copyButton.addEventListener('click', () => event.copyIn(this));
      copyButton.style.display = 'block';
      defaultColor.classList.remove('active');
      document
        .querySelector(`.event-modal__color[data-color="${event.color}"]`)
        .classList.add('active');
    } else if (this.mode === MODE.CREATE) {
      submitButton.value = 'Create';
      deleteButton.style.display = 'none';
      copyButton.style.display = 'none';
    }
  }

  submitModal(event) {
    if (event.isValidIn(this)) {
      event.updateIn(this);
      this.closeModal();
      console.log('SUBMIT MODAL -----------', event);
    }
  }

  closeModal() {
    const calendar = document.querySelector('.calendar__window');
    const eventModal = document.querySelector('.event-modal');
    const errors = document.querySelector('.event-modal__errors');
    const colors = document.querySelectorAll('.event-modal__color');

    this.mode = MODE.VIEW;
    eventModal.style.opacity = '0';
    eventModal.style.transition = 'opacity 200ms';
    errors.textContent = '';
    calendar.classList.remove('opaque');

    setTimeout(() => {
      eventModal.style.display = 'none';
    }, 200);

    colors.forEach(color => {
      color.classList.remove('active');
    });
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
    document
      .querySelectorAll('.calendar__event')
      .forEach(element => element.remove());

    if (!this.eventsLoaded) {
      this.events = JSON.parse(localStorage.getItem('events'));
      if (this.events) {
        Object.entries(this.events).forEach(([date, eventIds]) => {
          Object.entries(eventIds).forEach(([id, eventData]) => {
            const event = new Event(eventData);
            if (!this.events[date][id]) {
              this.events[date][id] = event;
            }
          });
        });
      }
      this.eventsLoaded = true;
    }

    if (this.events) {
      const weekDays = Array.from({ length: 7 }, (_, dayIndex) =>
        dateString(addDays(this.weekStart, dayIndex)),
      );
      weekDays.forEach(date => {
        if (this.events[date]) {
          Object.values(this.events[date]).forEach(event => {
            event.showIn(this);
          });
        }
      });
    } else {
      this.events = {};
    }
  }

  trash() {
    if (this.mode !== MODE.VIEW) return;

    if (
      // eslint-disable-next-line no-alert
      window.confirm(
        `This will delete all the events in your calendar. This cannot be undone. If you are sure, click "OK" or "Cancel" if you resign.`,
      )
    ) {
      this.readyToTrash = true;
      this.events = {};
      this.saveEvents();
      const eventElements = document.querySelectorAll('calendar__event');
      while (eventElements.length > 0) {
        eventElements[0].remove();
      }
    } else {
      this.readyToTrash = true;
      setTimeout(() => {
        this.readyToTrash = false;
      }, 60 * 1000);
    }
  }
}
