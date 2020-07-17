class ObserverSystem {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notify(event) {
    this.observers.forEach((observer) => observer.onNotify(event));
  }
}
