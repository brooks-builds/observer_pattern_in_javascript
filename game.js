let arenaColor;
let playerScore;
let aiScore;
let balls;
let playerScoredEvent;
let aiScoredEvent;
let playerWonEvent;
let aiWonEvent;
let isPlaying;
let gameOverMessage = "";

function setup() {
  createCanvas(1920, 1080);

  playerScoredEvent = eventSystemFactory();
  aiScoredEvent = eventSystemFactory();
  playerWonEvent = eventSystemFactory();
  aiWonEvent = eventSystemFactory();
  arenaColor = color(255, 255, 255, 100);
  playerScore = new Score(
    createVector(10, 65),
    playerScoredEvent,
    playerWonEvent
  );
  aiScore = new Score(createVector(width - 50, 65), aiScoredEvent, aiWonEvent);
  balls = [new Ball(playerScoredEvent, aiScoredEvent)];
  isPlaying = true;

  aiWonEvent.register(() => {
    isPlaying = false;
    gameOverMessage = "Really????";
  });
  playerWonEvent.register(() => {
    isPlaying = false;
    gameOverMessage = "There was no doubt you were going to win, great job!";
  });
}

function draw() {
  background(0);
  if (isPlaying) {
    balls.forEach((ball) => ball.update());
    // addBall();
    drawArena();
    playerScore.render();
    aiScore.render();
    balls.forEach((ball) => ball.render());
  } else {
    textSize(124);
    textAlign(CENTER, CENTER);
    text(gameOverMessage, 0, 0, width, height);
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
    balls.push(new Ball(playerScoredEvent, aiScoredEvent));
  }
}

function eventSystemFactory() {
  const callbacks = [];

  return {
    notify() {
      callbacks.forEach((callback) => callback());
    },

    register(callback) {
      callbacks.push(callback);
    },
  };
}
