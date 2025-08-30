import React, { useState } from "react";
import Sketch from "react-p5";

let snowflakes = [];

export default function SnowBackground() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);

    for (let i = 0; i < 300; i++) {
      snowflakes.push(new Snowflake(p5));
    }
  };

  const draw = (p5) => {
    p5.background(0);

    let currentTime = p5.frameCount / 60;
    for (let flake of snowflakes) {
      flake.update(p5, currentTime);
      flake.display(p5);
    }
  };

  return (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
    }}
  >
    <Sketch setup={setup} draw={draw} />
  </div>
);
}

class Snowflake {
  constructor(p5) {
    this.posX = 0;
    this.posY = p5.random(-p5.height, 0);
    this.initialAngle = p5.random(0, 360);
    this.size = p5.random(2, 5);
    this.radius = p5.sqrt(p5.random(p5.pow(p5.width / 2, 2)));
    this.color = p5.color(
  p5.random(200, 256),   
  p5.random(200, 256),  
  p5.random(200, 256),   
  p5.random(100, 200)    
);
  }

  update(p5, time) {
    let angularSpeed = 35;
    let angle = this.initialAngle + angularSpeed * time;

    this.posX = p5.width / 2 + this.radius * p5.sin(angle);
    let ySpeed = 4 / this.size;
    this.posY += ySpeed;

    if (this.posY > p5.height) {
      this.posY = -50;
    }
  }

  display(p5) {
    p5.fill(this.color);
    p5.noStroke();
    p5.ellipse(this.posX, this.posY, this.size);
  }
}
