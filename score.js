class Score {
  constructor(location, scoredEvent) {
    this.score = 0;
    this.location = location;
    this.color = color(255);
    this.size = 72;

    scoredEvent.register(this.handleScoredEvent.bind(this));
  }

  render() {
    textSize(this.size);
    fill(this.color);
    text(this.score, this.location.x, this.location.y);
  }

  handleScoredEvent() {
    this.score += 1;
  }

  update(gameOverEvent) {
    if (this.score >= 7) gameOverEvent.notify();
  }
}
