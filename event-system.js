class EventSystem {
  constructor() {
    this.observers = [];
  }

  register(observer) {
    this.observers.push(observer);
  }

  notify(event) {
    this.observers.forEach((observer) => observer.onNotify(event));
  }
}

const EVENTS = {
  playerScored: "playerScored",
  aiScored: "aiScored",
  playerWon: "playerWon",
  aiWon: "aiWon",
};
