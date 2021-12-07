"use strict";
import { POINT_TYPES } from "./constants";
import { getArrowDirection } from "./utils";

class Point {
  constructor({ x, y, type }, next = null) {
    this.coordinates = { x, y };
    this.next = null;
    this.setType(type);
  }

  setType(type) {
    if (POINT_TYPES.includes(type)) {
      this.type = type;
    } else {
      throw new Error("Invalid point type provided.");
    }
  }
}

class Snake {
  constructor(init, ctx) {
    this.color = "green";
    this.head = init;
    this.context = ctx;
    this.drawCell();
  }

  getHead() {
    return this.head;
  }

  drawCell() {
    this.context.fillStyle = this.color;
    this.context.strokeStyle = this.color;
    this.context.fillRect(
      this.head.coordinates.x,
      this.head.coordinates.y,
      10,
      10
    );
    this.context.strokeRect(
      this.head.coordinates.x,
      this.head.coordinates.y,
      10,
      10
    );
  }

  grow() {}

  move() {}
}

class Game {
  constructor(canvasCtx) {
    const initPosition = new Point({ x: 200, y: 200, type: "Body" });
    this.snake = new Snake(initPosition, canvasCtx);
    this.gameOver = false;
    this.direction = "Right";
  }

  getNextCell() {}

  setDirection(direction) {
    this.direction = direction;
  }

  checkCrash() {
    return false;
  }

  update() {
    if (!this.gameOver) {
      let nextCell;

      nextCell = this.getNextCell(this.snake.getHead());

      if (!this.checkCrash()) {
        // snake move
      } else {
        // change direction
        //
      }
    } else {
      return false;
    }
  }
}

function initApp() {
  const boardEl = document.querySelector("#app");
  const boardCtx = boardEl.getContext("2d");
  const game = new Game(boardCtx);
  // let runtime = setTimeout(game.update, 1000);

  // bind keyboard events
  //   const captureArrows = document.body.addEventListener("keydown", (e) => {
  //     if (!e.metaKey) {
  //       e.preventDefault();
  //     }
  //     let direction = getArrowDirection(e.code);
  //     game.setDirection(direction);
  //   });
}

initApp();
