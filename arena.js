class Arena {
  constructor(eventSystem) {
    this.color = color(255, 255, 255, 100);
    this.isPlaying = true;
    this.gameOverMessage = "";
    this.playerScore = new Score(createVector(10, 65), eventSystem);
    this.aiScore = new Score(createVector(width - 50, 65), eventSystem, false);
    this.balls = [new Ball(eventSystem)];
    eventSystem.register(this);
  }

  render() {
    if (this.isPlaying) {
      this.playerScore.render();
      this.aiScore.render();
      noStroke();
      fill(this.color);
      rect(width / 2 - 10, 2.5, 20, height - 5);
      noFill();
      stroke(this.color);
      strokeWeight(5);
      rect(0, 0, width, height);
      this.balls.forEach((ball) => ball.render());
    } else {
      textSize(124);
      textAlign(CENTER, CENTER);
      text(this.gameOverMessage, 0, 0, width, height);
    }
  }

  onNotify(event) {
    if (event == EVENTS.playerWon) {
      this.isPlaying = false;
      this.gameOverMessage = "You Won!!!";
    } else if (event == EVENTS.aiWon) {
      this.isPlaying = false;
      this.gameOverMessage = "I can't believe you suck so much";
    }
  }

  update() {
    if (this.isPlaying) {
      this.balls.forEach((ball) => ball.update());
      this.addBall();
    }
  }

  addBall() {
    if (random() > 0.9) {
      this.balls.push(new Ball(eventSystem));
    }
  }
}
