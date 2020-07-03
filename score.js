class Score {
  constructor(location, scoredEvent, wonEvent) {
    this.score = 0;
    this.location = location;
    this.color = color(255);
    this.size = 72;
    this.wonEvent = wonEvent;
    this.winAt = 7;
    scoredEvent.register(this.increment.bind(this));
  }

  render() {
    textSize(this.size);
    fill(this.color);
    text(this.score, this.location.x, this.location.y);
  }

  increment() {
    this.score += 1;
    if (this.score >= this.winAt) {
      this.wonEvent.notify();
    }
  }
}
