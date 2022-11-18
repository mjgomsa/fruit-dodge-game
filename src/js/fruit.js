import { images } from "./main.js";

export class Fruit {
  constructor(indx) {
    this.x = width;
    this.size = 50;
    this.y = random(100, height - this.size);
    this.speed = 10;
    this.indx = indx;

    this.show = function () {
      // fill(255);
      // rect(this.x, this.y, this.size, this.size);
      image(images.fruits[this.indx], this.x, this.y, this.size, this.size);
    };

    this.update = function () {
      this.x -= this.speed;
    };

    this.outOfCanvas = function () {
      return this.x < -this.size ? true : false;
    };
  }
}
