let eventSystem;
let arena;

function setup() {
  createCanvas(1920, 1080);

  eventSystem = new EventSystem();
  arena = new Arena(eventSystem);
}

function draw() {
  background(0);
  arena.update();
  arena.render();
}
