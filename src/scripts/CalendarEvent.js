class CalendarEvent {
  titleInput = document.querySelector('.event-modal__title');

  startInput = document.querySelector('.event-modal__start');

  endInput = document.querySelector('.event-modal__end');

  dateInput = document.querySelector('.event-modal__date');

  descriptionInput = document.querySelector('.event-modal__description');

  colors = document.querySelectorAll('.event-modal__color');

  constructor(data) {
    this.id = data.id || this.generateId();
    this.title = data.title || '';
    this.start = data.start || '';
    this.end = data.end || '';
    this.date = data.date || '';
    this.description = data.description || '';
    this.color = data.color || '';
    this.events = [];
  }

  generateId = (length = 20) => {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      id += chars.charAt(randomIndex);
    }
    return id;
  };

  isValidIn(calendar) {
    const newStart = this.startInput.value;
    const newEnd = this.endInput.value;
    const newDate = this.dateInput.value;
    const errors = document.querySelector('.event-modal__errors');

    // calendar.forEach(event => {
    //   if (
    //     event.id !== this.id &&
    //     event.end > newStart &&
    //     event.start < newEnd
    //   ) {
    //     errors.textContent = `This collides with the event ${event.title} (${event.start} - ${event.end}).`;
    //     return false;
    //   }
    //   return true;
    // });

    const duration =
      (new Date(`${newDate}T${newEnd}`).getTime() -
        new Date(`${newDate}T${newStart}`).getTime()) /
      (1000 * 60);
    if (duration < 0) {
      errors.textContent = `The start cannpt be after the end`;
      return false;
    }
    if (duration < 30) {
      errors.textContent = `Events coont be under 30 minutes`;
      return false;
    }
    return true;
  }

  updateIn(calendar) {
    this.title = this.titleInput.value;
    this.start = this.startInput.value;
    this.end = this.endInput.value;
    this.date = this.dateInput.value;
    this.description = this.descriptionInput.value;
    this.color = this.colors.value;
    this.showIn(calendar);
    this.saveIn(calendar);
  }

  showIn() {
    // todo
    // console.log('show event', this);
  }

  saveIn() {
    // todo
    // calendar.events.push(this);
  }
}

export default CalendarEvent;
