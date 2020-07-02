class Ball {
  constructor() {
    this.location = createVector(width / 2, height / 2);
    this.color = color(255);
    this.diameter = 30;
    this.speed = 5;
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.velocity.normalize();
    this.velocity.mult(this.speed);
  }

  render() {
    noStroke();
    fill(this.color);
    ellipse(this.location.x, this.location.y, this.diameter);
  }

  update() {
    this.location.add(this.velocity);
    this.bounce();
  }

  bounce() {
    if (this.location.y - this.diameter / 2 <= 0) {
      this.reverseVelocity("y");
    } else if (this.location.y + this.diameter / 2 >= height) {
      this.reverseVelocity("y");
    }

    if (this.location.x - this.diameter / 2 <= 0) {
      this.reverseVelocity("x");
    } else if (this.location.x + this.diameter / 2 >= width) {
      this.reverseVelocity("x");
    }
  }

  reverseVelocity(key = "y") {
    this.velocity[key] *= -1;
  }
}
