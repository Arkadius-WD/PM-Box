import $ from 'jquery';
import { dateString, getDayIndex, addDays } from './calendarHelper';
import { Event, MODE } from './calendarEvent';

export default class Calendar {
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
    this.loadEvents();
    this.setupControls();
  }

  setupControls() {
    document
      .querySelector('#nextWeekBtn')
      .addEventListener('click', () => this.changeWeek(1));
    document
      .querySelector('#prevWeekBtn')
      .addEventListener('click', () => this.changeWeek(-1));
    document
      .querySelector('#addButton')
      .addEventListener('click', () => this.addNewEvent());
    document
      .querySelector('#trashButton')
      .addEventListener('click', () => this.trash());
    document
      .querySelector('#cancelButton')
      .addEventListener('click', () => this.closeModal());

    const colorElements = document.querySelectorAll('.color');
    colorElements.forEach(element => {
      element.addEventListener('click', this.changeColor);
    });
  }

  setupTimes() {
    const header = document.createElement('div');
    const slots = document.createElement('div');
    header.classList.add('columnHeader');
    slots.classList.add('slots');

    for (let hour = 0; hour < 24; hour++) {
      const timeSlot = document.createElement('div');
      timeSlot.setAttribute('data-hour', hour);
      timeSlot.classList.add('time');
      timeSlot.textContent = `${hour}:00 - ${hour + 1}:00`;
      slots.appendChild(timeSlot);
    }

    document.querySelector('.dayTime').appendChild(header);
    document.querySelector('.dayTime').appendChild(slots);
  }

  setupDays() {
    const cal = this;

    document.querySelectorAll('.day').forEach(dayElement => {
      const dayIndex = parseInt(dayElement.getAttribute('data-dayIndex'), 10);
      const name = dayElement.getAttribute('data-name');

      const header = document.createElement('div');
      header.classList.add('columnHeader');
      header.textContent = name;

      const slots = document.createElement('div');
      slots.classList.add('slots');

      const dayDisplay = document.createElement('div');
      dayDisplay.classList.add('dayDisplay');
      header.appendChild(dayDisplay);

      for (let hour = 0; hour < 24; hour++) {
        const slot = document.createElement('div');
        slot.setAttribute('data-hour', hour);
        slot.classList.add('slot');
        slot.addEventListener('click', () => cal.clickSlot(hour, dayIndex));
        slot.addEventListener('mouseover', () => cal.hoverOver(hour));
        slot.addEventListener('mouseout', () => cal.hoverOut());
        slots.appendChild(slot);
      }

      dayElement.appendChild(header);
      dayElement.appendChild(slots);
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

    document.querySelector('#weekStartDisplay').textContent =
      this.weekStart.toLocaleDateString(undefined, options);
    document.querySelector('#weekEndDisplay').textContent =
      this.weekEnd.toLocaleDateString(undefined, options);

    document.querySelectorAll('.day').forEach((dayElement, dayIndex) => {
      const date = addDays(this.weekStart, dayIndex);
      const display = date.toLocaleDateString(undefined, {
        month: '2-digit',
        day: '2-digit',
      });
      dayElement.querySelector('.dayDisplay').textContent = display;
    });

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
      .querySelector(`.day[data-dayIndex="${dayIndex}"]`)
      .classList.add('currentDay');
  }

  hideCurrentDay() {
    document.querySelectorAll('.day').forEach(dayElement => {
      dayElement.classList.remove('currentDay');
    });
  }

  hoverOver(hour) {
    document
      .querySelector(`.time[data-hour="${hour}"]`)
      .classList.add('currentTime');
  }

  hoverOut() {
    document.querySelectorAll('.time').forEach(timeElement => {
      timeElement.classList.remove('currentTime');
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
    document.querySelectorAll('.color').forEach(colorElement => {
      colorElement.classList.remove('active');
    });
    this.classList.add('active');
  }

  openModal(event) {
    document.getElementById('modalTitle').textContent =
      this.mode === MODE.UPDATE ? 'Update your event' : 'Create a new event';
    document.getElementById('eventTitle').value = event.title;
    document.getElementById('eventDate').value = event.date;
    document.getElementById('eventStart').value = event.start;
    document.getElementById('eventEnd').value = event.end;
    document.getElementById('eventDescription').value = event.description;

    const colorElements = document.getElementsByClassName('color');

    for (let i = 0; i < colorElements.length; i++) {
      colorElements[i].classList.remove('active');
      if (colorElements[i].getAttribute('data-color') === event.color) {
        colorElements[i].classList.add('active');
      }
    }

    if (this.mode === MODE.UPDATE) {
      document.getElementById('submitButton').value = 'Update';
      document.getElementById('deleteButton').style.display = 'block';
      document
        .getElementById('deleteButton')
        .removeEventListener('click', event.deleteIn);
      document.getElementById('deleteButton').addEventListener('click', () => {
        event.deleteIn(this);
      });
      document.getElementById('copyButton').style.display = 'block';
      document
        .getElementById('copyButton')
        .removeEventListener('click', event.copyIn);
      document.getElementById('copyButton').addEventListener('click', () => {
        event.copyIn(this);
      });
    } else if (this.mode === MODE.CREATE) {
      document.getElementById('submitButton').value = 'Create';
      document.getElementById('deleteButton').style.display = 'none';
      document.getElementById('copyButton').style.display = 'none';
    }

    document.getElementById('eventModal').style.display = 'block';
    document.getElementById('eventTitle').focus();
    document.getElementById('calendar').classList.add('opaque');

    $('#eventModal')
      .off('submit')
      .submit(e => {
        e.preventDefault();
        this.submitModal(event);
      });
  }

  submitModal(event) {
    if (event.isValidIn(this)) {
      event.updateIn(this);
      this.closeModal();
    }
  }

  closeModal() {
    const eventModal = document.querySelector('#eventModal');
    eventModal.style.display = 'none';
    document.querySelector('#errors').textContent = '';
    const calendar = document.querySelector('#calendar');
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
    document.querySelectorAll('.event').forEach(eventElement => {
      eventElement.remove();
    });

    if (!this.eventsLoaded) {
      this.events = JSON.parse(localStorage.getItem('events'));
      if (this.events) {
        Object.keys(this.events).forEach(date => {
          Object.keys(this.events[date]).forEach(id => {
            const event = new Event(this.events[date][id]);
            this.events[date][id] = event;
          });
        });
      }
      this.eventsLoaded = true;
    }

    if (this.events) {
      Object.keys(this.events).forEach(date => {
        Object.values(this.events[date]).forEach(event => {
          event.showIn(this);
        });
      });
    } else {
      this.events = {};
    }
  }

  trash() {
    if (this.mode !== MODE.VIEW) return;
    if (this.readyToTrash) {
      this.readyToTrash = false;
      this.events = {};
      this.saveEvents();
      document.querySelectorAll('.event').forEach(eventElement => {
        eventElement.remove();
      });
    } else {
      this.readyToTrash = true;
      // eslint-disable-next-line no-alert
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
