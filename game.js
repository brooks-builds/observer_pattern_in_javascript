let arenaColor;

function setup() {
  createCanvas(1920, 1080);

  arenaColor = color(255, 255, 255, 100);
}

function draw() {
  background(0);

  drawArena();
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
