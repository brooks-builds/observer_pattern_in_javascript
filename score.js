class Score {
  constructor(location) {
    this.score = 0;
    this.location = location;
    this.color = color(255);
    this.size = 72;
  }

  render() {
    textSize(this.size);
    fill(this.color);
    text(this.score, this.location.x, this.location.y);
  }
}
