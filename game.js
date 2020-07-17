let arenaColor;
let playerScore;
let aiScore;
let balls;
let aiScoredEvent;
let playerScoredEvent;
let gameOverEvent;
let isPlaying;

function setup() {
  createCanvas(1920, 1080);

  aiScoredEvent = createEvent();
  playerScoredEvent = createEvent();
  gameOverEvent = createEvent();
  arenaColor = color(255, 255, 255, 100);
  playerScore = new Score(createVector(10, 65), playerScoredEvent);
  aiScore = new Score(createVector(width - 50, 65), aiScoredEvent);
  balls = [new Ball()];
  isPlaying = true;
  gameOverEvent.register(() => (isPlaying = false));
}

function draw() {
  if (isPlaying) {
    balls.forEach((ball) => ball.update(aiScoredEvent, playerScoredEvent));
    addBall();

    background(0);
    drawArena();
    playerScore.render();
    aiScore.render();
    playerScore.update(gameOverEvent);
    aiScore.update(gameOverEvent);
    balls.forEach((ball) => ball.render());
  } else {
    textSize(64);
    fill(200);
    text("game over", 50, 50);
  }
}

function drawArena() {
  noStroke();
  fill(arenaColor);
  rect(width / 2 - 10, 2.5, 20, height - 5);
  noFill();
  stroke(arenaColor);
  strokeWeight(5);
  rect(0, 0, width, height);
}

function addBall() {
  if (random() > 0.9) {
    balls.push(new Ball());
  }
}

function createEvent() {
  const callbacks = [];

  return {
    register(callback) {
      callbacks.push(callback);
    },

    notify() {
      callbacks.forEach((callback) => callback());
    },
  };
}
