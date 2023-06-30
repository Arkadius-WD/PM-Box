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

    let eventSlot = document.getElementById(this.id);
    if (!eventSlot) {
      eventSlot = document.createElement('div');
      eventSlot.setAttribute('id', this.id);
      eventSlot.classList.add('calendar__event');
      eventSlot.addEventListener('click', () => this.clickIn(calendar));
    }

    const height = calendar.slotHeight;
    eventSlot.textContent = this.title;
    eventSlot.style.top = `${
      (this.startHour + this.startMinutes / 60) * height
    }vh`;
    eventSlot.style.bottom = `${
      24 * height - (this.endHour + this.endMinutes / 60) * height
    }vh`;
    eventSlot.style.backgroundColor = `var(--color-${this.color})`;

    const slotsContainer = document.querySelector(
      `.calendar__day[data-dayIndex="${this.dayIndex}"] .calendar__slots`,
    );
    slotsContainer.appendChild(eventSlot);

    const { duration } = this;
    if (duration < 45) {
      eventSlot.classList.remove('calendar__shortEvent');
      eventSlot.classList.add('calendar__veryShortEvent');
    } else if (duration < 59) {
      eventSlot.classList.remove('calendar__veryShortEvent');
      eventSlot.classList.add('calendar__shortEvent');
    } else {
      eventSlot.classList.remove(
        'calendar__shortEvent',
        'calendar__veryShortEvent',
      );
    }

    console.log(height);
  }

  clickIn(calendar) {
    if (calendar.mode !== MODE.VIEW) return;
    calendar.mode = MODE.UPDATE;
    calendar.openModal(this);
  }

  updateIn(calendar) {
    this.prevDate = this.date;
    this.title = document.querySelector('.event-modal__title').value;
    this.start = document.querySelector('.event-modal__start').value;
    this.end = document.querySelector('.event-modal__end').value;
    this.date = document.querySelector('.event-modal__date').value;
    this.description = document.querySelector(
      '.event-modal__description',
    ).value;
    this.color = document
      .querySelector('.event-modal__color.active')
      .getAttribute('data-color');
    this.saveIn(calendar);
    this.showIn(calendar);
  }

  copyIn(calendar) {
    if (calendar.mode !== MODE.UPDATE) return;
    calendar.closeModal();
    calendar.mode = MODE.CREATE;
    const copy = new Event({
      title: `Copy of ${this.title}`,
      start: this.start,
      end: this.end,
      date: this.date,
      description: this.description,
      color: this.color,
    });
    calendar.openModal(copy);
  }

  deleteIn(calendar) {
    calendar.closeModal();
    const elementToRemove = document.getElementById(this.id);
    if (elementToRemove) {
      elementToRemove.remove();
    }
    delete calendar.events[this.date][this.id];
    if (Object.values(calendar.events[this.date]).length === 0) {
      delete calendar.events[this.date];
    }
    calendar.saveEvents();
  }

  isValidIn(calendar) {
    const newStart = document.querySelector('.event-modal__start').value;
    const newEnd = document.querySelector('.event-modal__end').value;
    const newDate = document.querySelector('.event-modal__date').value;
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
      errors.textContent = 'The start cannot be after the end.';
      return false;
    }
    if (duration < 30) {
      errors.textContent = 'Events should be at least 30 minutes.';
      return false;
    }
    return true;
  }
}
