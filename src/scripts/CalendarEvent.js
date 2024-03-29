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
    this.prevDate = this.date;
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
    let eventSlot;
    const existingElement = document.getElementById(this.id);
    if (existingElement) {
      eventSlot = existingElement;
    } else {
      eventSlot = document.createElement('div');
      eventSlot.setAttribute('class', 'event');
      eventSlot.setAttribute('id', this.id);
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
      `.day[data-dayIndex="${this.dayIndex}"] .slots`,
    );
    slotsContainer.appendChild(eventSlot);

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
    this.prevDate = this.date;
    this.title = document.getElementById('eventTitle').value;
    this.start = document.getElementById('eventStart').value;
    this.end = document.getElementById('eventEnd').value;
    this.date = document.getElementById('eventDate').value;
    this.description = document.getElementById('eventDescription').value;
    this.color = document
      .querySelector('.color.active')
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
    const newStart = document.getElementById('eventStart').value;
    const newEnd = document.getElementById('eventEnd').value;
    const newDate = document.getElementById('eventDate').value;
    if (calendar.events[newDate]) {
      const event = Object.values(calendar.events[newDate]).find(
        eventItem =>
          eventItem.id !== this.id &&
          eventItem.end > newStart &&
          eventItem.start < newEnd,
      );
      if (event) {
        const errorsElement = document.getElementById('errors');
        errorsElement.textContent = `This collides with the event '${event.title}'
              (${event.start} - ${event.end}).`;
        return false;
      }
    }
    const duration =
      (new Date(`${newDate}T${newEnd}`).getTime() -
        new Date(`${newDate}T${newStart}`).getTime()) /
      (1000 * 60);
    if (duration < 0) {
      const errorsElement = document.getElementById('errors');
      errorsElement.textContent = 'The start cannot be after the end.';
      return false;
    }
    if (duration < 30) {
      const errorsElement = document.getElementById('errors');
      errorsElement.textContent = 'Events should be at least 30 minutes.';
      return false;
    }
    return true;
  }
}
