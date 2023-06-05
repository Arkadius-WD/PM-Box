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
    console.log('test isValidIn');
  }

  updateIn(calendar) {
    // todo
  }
}

export default Event;
