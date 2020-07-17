class Score {
  constructor(location, observerSystem, type = "player") {
    this.score = 0;
    this.location = location;
    this.color = color(255);
    this.size = 72;
    observerSystem.addObserver(this);
    this.type = type;
  }

  render() {
    textSize(this.size);
    fill(this.color);
    text(this.score, this.location.x, this.location.y);
  }

  onNotify(event) {
    if (event == EVENT_AI_SCORED && this.type == "ai") {
      this.score += 1;
    } else if (event == EVENT_PLAYER_SCORED && this.type == "player") {
      this.score += 1;
    }
  }
}
