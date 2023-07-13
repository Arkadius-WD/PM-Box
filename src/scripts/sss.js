class Event {
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
}

export default Event;
