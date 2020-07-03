class Score {
  constructor(location, eventSystem, isPlayer = true) {
    this.isPlayer = isPlayer;
    this.score = 0;
    this.location = location;
    this.color = color(255);
    this.size = 72;
    this.eventSystem = eventSystem;
    this.winAt = 7;
    eventSystem.register(this);
  }

  render() {
    textSize(this.size);
    fill(this.color);
    text(this.score, this.location.x, this.location.y);
  }

  onNotify(event) {
    if (event == EVENTS.playerScored && this.isPlayer) {
      this.increment();
      if (this.score >= this.winAt) {
        this.eventSystem.notify(EVENTS.playerWon);
      }
    } else if (event == EVENTS.aiScored && !this.isPlayer) {
      this.increment();
      if (this.score >= this.winAt) {
        this.eventSystem.notify(EVENTS.aiWon);
      }
    }
  }

  increment() {
    this.score += 1;
  }
}
