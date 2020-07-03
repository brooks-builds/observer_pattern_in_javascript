class Ball {
  constructor(playerScoredEvent, aiScoredEvent) {
    this.location = createVector(width / 2, height / 2);
    this.color = color(255);
    this.diameter = 30;
    this.speed = 5;
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.velocity.normalize();
    this.velocity.mult(this.speed);
    this.playerScoredEvent = playerScoredEvent;
    this.aiScoredEvent = aiScoredEvent;
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
      this.aiScoredEvent.notify();
    } else if (this.location.x + this.diameter / 2 >= width) {
      this.reverseVelocity("x");
      this.playerScoredEvent.notify();
    }
  }

  reverseVelocity(key = "y") {
    this.velocity[key] *= -1;
  }
}
