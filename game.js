let arenaColor;
let playerScore;
let aiScore;
let balls;

function setup() {
  createCanvas(1920, 1080);

  arenaColor = color(255, 255, 255, 100);
  playerScore = new Score(createVector(10, 65));
  aiScore = new Score(createVector(width - 50, 65));
  balls = [new Ball()];
}

function draw() {
  balls.forEach((ball) => ball.update(playerScore, aiScore));
  addBall();

  background(0);
  drawArena();
  playerScore.render();
  aiScore.render();
  balls.forEach((ball) => ball.render());
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
