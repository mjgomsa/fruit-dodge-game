import * as titleScene from "./titleScene.js";
import * as playScene from "./playScene.js";
import * as overScene from "./overScene.js";

var currentScene;

export let scenes = {
  title: titleScene,
  play: playScene,
  over: overScene,
};

export const images = {};

Object.assign(window, {
  preload,
  draw,
  setup,
  mousePressed,
  keyPressed,
  keyReleased,
});

function preload() {
  Object.values(scenes).forEach((scene) => scene.preload?.());

  preloadImages();
}

function setup() {
  createCanvas(1200, 400);
  noFill();
  noStroke();
  textFont("Joystix");

  Object.values(scenes).forEach((scene) => scene.setup?.());
  changeScene(scenes.title);
}

function draw() {
  // update
  currentScene?.update?.();

  // draw
  currentScene?.draw?.();
}

function mousePressed() {
  currentScene?.mousePressed?.();
}

function keyPressed() {
  currentScene?.keyPressed?.();
}

function keyReleased() {
  currentScene?.keyReleased?.();
}

export function changeScene(newScene) {
  if (!newScene) {
    console.error("newScene not provided");
    return;
  }
  if (newScene === currentScene) {
    console.error("newScene is already currentScene");
    return;
  }
  currentScene?.leave?.();
  currentScene = newScene;
  currentScene.enter?.();
}

function preloadImages() {
  images.player = {};
  images.player.running = loadImage("./assets/girl_running.gif");
  images.player.sliding = loadImage("./assets/girl_sliding.png");

  images.screens = {};
  images.screens.play_background = loadImage("./assets/background.png");
  images.screens.end_background = loadImage("./assets/end_scene.png");
  images.screens.start_background = loadImage("./assets/start_scene.png");

  images.fruits = [];
  images.fruits[0] = loadImage("./assets/apple.png");
  images.fruits[1] = loadImage("./assets/bannana.png");
  images.fruits[2] = loadImage("./assets/cherry.png");
  images.fruits[3] = loadImage("./assets/orange.png");
  images.fruits[4] = loadImage("./assets/pear.png");
  images.fruits[5] = loadImage("./assets/watermelon.png");
}
