class Ball {
  constructor() {
    this.location = createVector(width / 2, height / 2);
    this.color = color(255);
    this.radius = 30;
  }

  render() {
    noStroke();
    fill(this.color);
    ellipse(this.location.x, this.location.y, this.radius);
  }
}
