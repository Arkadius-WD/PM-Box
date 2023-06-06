class Event {
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

  isValidIn(calendar) {
    // todo
    console.log('test isValidIn', this);
  }

  updateIn(calendar) {
    const titleInput = document.querySelector('.event-modal__title');
    const startInput = document.querySelector('.event-modal__start');
    const endInput = document.querySelector('.event-modal__end');
    const dateInput = document.querySelector('.event-modal__date');
    const descriptionInput = document.querySelector(
      '.event-modal__description',
    );
    const colors = document.querySelectorAll('.event-modal__color');

    this.title = titleInput.value;
    this.start = startInput.value;
    this.end = endInput.value;
    this.date = dateInput.value;
    this.description = descriptionInput.value;
    this.color = colors.value;
    this.showIn(calendar);
  }

  showIn() {
    // todo
    console.log('show event', this);
  }
}

export default Event;
