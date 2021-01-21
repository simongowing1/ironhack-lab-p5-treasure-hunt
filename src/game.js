class Player {
  constructor() {
      this.col = 0;
      this.row = 0;
      this.image;
    }
    moveUp() {
        this.row -= 10;
    }
    moveDown() {
        this.row += 10;
    }
    moveLeft() {
        this.col -= 10;
    }
    moveRight() {
        this.col += 10;
    }
    preload() {
      this.image = loadImage('assets/character-down.png')
    }
    drawPlayer() {

      this.col = constrain(this.col, 0, (width - 100))
      this.row = constrain(this.row, 0, (height - 100))
      
      image(this.image, this.col, this.row, 100, 100)

      if (keyIsDown(UP_ARROW)) {
        this.moveUp();
        this.image =loadImage('assets/character-up.png')
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.moveDown();
        this.image =loadImage('assets/character-down.png')
      }
      if (keyIsDown(LEFT_ARROW)) {
        this.moveLeft();
        this.image =loadImage('assets/character-left.png')
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.moveRight();
        this.image =loadImage('assets/character-right.png')
    }
    
    }
  }

class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.image;
  }
  preload() {
    this.image = loadImage('assets/treasure.png')
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * 100;
    this.row = Math.floor(Math.random() * 10) * 100;
  }

  drawTreasure(){
    image(this.image, this.col, this.row, 100, 100)
  }

}

class Game {

  drawGrid() {
    clear();
    stroke('black');
    strokeWeight(10);
    for (let x = 0; x < WIDTH+1; x += SQUARE_SIDE) {
      for (let y = 0; y < HEIGHT+1; y += SQUARE_SIDE) {
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }


    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
  }
}
