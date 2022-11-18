import { changeScene, scenes, images } from "./main.js";
import { Fruit } from "./fruit.js";
import { Player } from "./player.js";

let player;
let fruits = [];

export let score_count = 0;

export function setup() {
  initialize();
}

export function draw() {
  // background
  //   image(images.screens.play_background, 0, 0, width, height);
  background("#BFCA87");

  score_count = player.score;
  console.log(score_count);

  for (var i = fruits.length - 1; i >= 0; i--) {
    fruits[i].show();
    fruits[i].update();

    if (player.collides(fruits[i])) {
      console.log("You lose");
      initialize();
      changeScene(scenes.over);
      return false;
    }

    if (fruits[i].outOfCanvas()) {
      fruits.splice(i, 1);
      player.score += 10;
    }
  }

  // display and update player's movement
  player.update();
  player.show();

  if (frameCount % 60 == 0) {
    fruits.push(new Fruit(selectRandIndx()));
  }
}

export function keyPressed() {
  if ((keyCode === UP_ARROW || keyCode === 87) && player.onFloor()) {
    player.jump();
  }

  if (keyCode === DOWN_ARROW || keyCode === 83) {
    player.dodge();
  }
}
export function keyReleased() {
  if (keyCode === DOWN_ARROW || keyCode === 83) {
    player.unDodge();
  }
}

function initialize() {
  //initialize fruits and players
  fruits = [];
  player = new Player();
  fruits.push(new Fruit(selectRandIndx()));
}

function selectRandIndx() {
  return floor(random(0, 6));
}
