class Event {
  titleInput = document.querySelector('.event-modal__title');

  startInput = document.querySelector('.event-modal__start');

  endInput = document.querySelector('.event-modal__end');

  dateInput = document.querySelector('.event-modal__date');

  descriptionInput = document.querySelector('.event-modal__description');

  colors = document.querySelectorAll('.event-modal__color');

  constructor(data) {
    this.id = data.id || this.generateId();
    this.title = data.title;
    this.start = data.start;
    this.end = data.end;
    this.date = data.date;
    this.description = data.description;
    this.color = data.color;
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

  isValidIn() {
    this.start = this.startInput.value;
    this.end = this.endInput.value;
    this.date = this.dateInput.value;
  }

  updateIn(calendar) {
    this.title = this.titleInput.value;
    this.start = this.startInput.value;
    this.end = this.endInput.value;
    this.date = this.dateInput.value;
    this.description = this.descriptionInput.value;
    this.color = this.colors.value;
    this.showIn(calendar);
  }

  showIn() {
    // todo
    console.log('show event', this);
  }
}

export default Event;
