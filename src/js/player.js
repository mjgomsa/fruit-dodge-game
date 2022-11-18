import { images } from "./main.js";

export class Player {
  constructor() {
    this.playerHeight = 160;
    this.playerWidth = 140;
    this.y = height;
    this.x = 40;
    this.isRunning = true;

    this.gravity = 0.98;
    this.velocity = 0;
    this.jump_height = 25;
    this.score = 0;

    this.show = function () {
      if (this.isRunning) {
        push();
        image(
          images.player.running,
          this.x,
          this.y,
          this.playerWidth,
          this.playerHeight
        );
        pop();
      } else {
        push();
        image(
          images.player.sliding,
          this.x,
          this.y,
          this.playerWidth,
          this.playerHeight
        );
        pop();
      }

      // draw player score
      push();
      fill("#2B3305");
      textSize(25);
      textStyle(BOLD);
      text("SCORE: " + this.score, 20, 30);
      pop();
    };

    this.update = function () {
      // update player's frame after jump or dodge
      this.velocity += this.gravity;
      this.y += this.velocity;

      if (this.y + this.playerHeight > height) {
        this.y = height - this.playerHeight;
        this.velocity = 0;
      }
    };

    this.onFloor = function () {
      return this.y == height - this.playerHeight;
    };

    this.jump = function () {
      this.velocity -= this.jump_height;
    };

    this.dodge = function () {
      if (this.playerHeight == 160) {
        this.playerHeight = this.playerHeight / 2;
        this.isRunning = false;
      }
    };

    this.unDodge = function () {
      if (this.playerHeight == 80) {
        this.playerHeight = 160;
        this.isRunning = true;
      }
    };

    this.collides = function (fruit) {
      return collideRectRect(
        this.x,
        this.y,
        this.playerWidth,
        this.playerHeight,
        fruit.x,
        fruit.y,
        fruit.size,
        fruit.size
      );
    };
  }
}
