const game = new Game();
const player = new Player();
const treasure = new Treasure();

function preload() {
  player.preload();
  treasure.preload();
  treasure.setRandomPosition();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");

}

function draw() {
  
  game.drawGrid();
  treasure.drawTreasure();
  player.drawPlayer();
}

function keyPressed() {
  if (UP_ARROW) {
      player.moveUp();
  }
  if (DOWN_ARROW) {
      player.moveDown();
  }
  if (LEFT_ARROW) {
      player.moveLeft();
  }
  if (RIGHT_ARROW) {
      player.moveRight();
  }
}

function setRandomPosition() {
  
}