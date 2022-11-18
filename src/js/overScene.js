import { changeScene, images, scenes } from "./main.js";
import { score_count } from "./playScene.js";

export function draw() {
  // background("black");
  image(images.screens.end_background, 0, 0, width, height);

  // draw info
  push();
  fill("#BFCA87");
  textSize(50);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text("Score:", width * 0.6, height * 0.39);
  pop();

  push();
  fill("#BFCA87");
  textSize(167);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text(score_count, width * 0.58, height * 0.65);
  pop();

  push();
  fill("#BFCA87");
  textSize(23);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text("Click to play again", width * 0.58, height * 0.84);
  pop();
}

export function mousePressed() {
  changeScene(scenes.title);
}
