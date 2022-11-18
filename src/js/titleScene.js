import { changeScene, images, scenes } from "./main.js";

export function draw() {
  // background("black");
  image(images.screens.start_background, 0, 0, width, height);

  // draw info
  push();
  fill("Black");
  textSize(110);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text("FRUIT", width * 0.6, height * 0.39);
  text("DODGE", width * 0.6, height * 0.59);
  pop();

  push();
  fill("black");
  textSize(30);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text("Click anywhere to play", width * 0.65, height * 0.84);
  pop();
}

export function mousePressed() {
  changeScene(scenes.play);
}
