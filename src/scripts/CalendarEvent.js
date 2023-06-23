import { getDayIndex, generateId, dateString } from './calendarHelper';

export const MODE = {
  VIEW: 1,
  UPDATE: 2,
  CREATE: 3,
};

export class Event {
  constructor(data) {
    this.id = data.id || generateId();
    this.title = data.title;
    this.start = data.start;
    this.end = data.end;
    this.date = data.date;
    this.prevDate = data.date;
    this.description = data.description;
    this.color = data.color;
  }

  get dayIndex() {
    return getDayIndex(new Date(this.date));
  }

  get duration() {
    return (
      (new Date(`${this.date}T${this.end}`).getTime() -
        new Date(`${this.date}T${this.start}`).getTime()) /
      (1000 * 60)
    );
  }

  get startHour() {
    return parseInt(this.start.substring(0, 2), 10);
  }

  get startMinutes() {
    return parseInt(this.start.substring(3, 5), 10);
  }

  get endHour() {
    return parseInt(this.end.substring(0, 2), 10);
  }

  get endMinutes() {
    return parseInt(this.end.substring(3, 5), 10);
  }

  saveIn(calendar) {
    console.log(this);
    if (this.prevDate && this.date !== this.prevDate) {
      delete calendar.events[this.prevDate][this.id];
      if (Object.values(calendar.events[this.prevDate]).length === 0) {
        delete calendar.events[this.prevDate];
      }
    }
    if (!calendar.events[this.date]) {
      calendar.events[this.date] = {};
    }
    calendar.events[this.date][this.id] = this;
    calendar.saveEvents();
  }

  showIn(calendar) {
    if (
      this.date < dateString(calendar.weekStart) ||
      this.date > dateString(calendar.weekEnd)
    ) {
      const elementToRemove = document.getElementById(this.id);
      if (elementToRemove) {
        elementToRemove.remove();
      }
      return;
    }

    let eventSlot;
    if (document.getElementById(this.id)) {
      eventSlot = document.getElementById(this.id);
    } else {
      eventSlot = document.createElement('div');
      eventSlot.classList.add('event');
      eventSlot.setAttribute('id', this.id);
      eventSlot.addEventListener('click', () => this.clickIn(calendar));
    }

    const h = calendar.slotHeight;
    eventSlot.textContent = this.title;
    eventSlot.style.top = `${
      (this.startHour + this.startMinutes / 60) * h + 2
    }px`;
    eventSlot.style.bottom = `${
      24 * h - (this.endHour + this.endMinutes / 60) * h + 1
    }px`;
    eventSlot.style.backgroundColor = `var(--color-${this.color})`;

    const dayIndexSelector = `.day[data-dayIndex="${this.dayIndex}"] .slots`;
    const dayElement = document.querySelector(dayIndexSelector);
    if (dayElement) {
      dayElement.appendChild(eventSlot);
    }

    const { duration } = this;
    if (duration < 45) {
      eventSlot.classList.remove('shortEvent');
      eventSlot.classList.add('veryShortEvent');
    } else if (duration < 59) {
      eventSlot.classList.remove('veryShortEvent');
      eventSlot.classList.add('shortEvent');
    } else {
      eventSlot.classList.remove('shortEvent');
      eventSlot.classList.remove('veryShortEvent');
    }
  }

  clickIn(calendar) {
    if (calendar.mode !== MODE.VIEW) return;
    calendar.mode = MODE.UPDATE;
    calendar.openModal(this);
  }

  updateIn(calendar) {
    const titleInput = document.querySelector('.event-modal__title');
    const startInput = document.querySelector('.event-modal__start');
    const endInput = document.querySelector('.event-modal__end');
    const dateInput = document.querySelector('.event-modal__date');
    const descriptionInput = document.querySelector(
      '.event-modal__description',
    );
    const activeColorElement = document.querySelector(
      '.event-modal__color.active',
    );
    const color = activeColorElement.getAttribute('data-color');
    this.title = titleInput.value;
    this.start = startInput.value;
    this.end = endInput.value;
    this.date = dateInput.value;
    this.description = descriptionInput.value;
    this.prevDate = this.date;
    this.color = color;
    this.saveIn(calendar);
    this.showIn(calendar);
  }

  copyIn() {
    // todo
  }

  deleteIn() {
    // todo
  }

  isValidIn(calendar) {
    const startInput = document.querySelector('.event-modal__start');
    const endInput = document.querySelector('.event-modal__end');
    const dateInput = document.querySelector('.event-modal__date');
    const newStart = startInput.value;
    const newEnd = endInput.value;
    const newDate = dateInput.value;
    const errors = document.querySelector('.event-modal__errors');

    if (calendar.events[newDate]) {
      const conflictingEvent = Object.values(calendar.events[newDate]).find(
        event =>
          event.id !== this.id && event.end > newStart && event.start < newEnd,
      );
      if (conflictingEvent) {
        errors.textContent = `This collides with the event '${conflictingEvent.title}' (${conflictingEvent.start} - ${conflictingEvent.end}).`;
        return false;
      }
    }

    const duration =
      (new Date(`${newDate}T${newEnd}`).getTime() -
        new Date(`${newDate}T${newStart}`).getTime()) /
      (1000 * 60);
    if (duration < 0) {
      errors.textContent = `The start cannot be after the end`;
      return false;
    }
    if (duration < 30) {
      errors.textContent = `Events cannot be under 30 minutes`;
      return false;
    }
    return true;
  }
}
