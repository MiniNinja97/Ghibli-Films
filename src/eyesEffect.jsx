import React from "react";
import Sketch from "react-p5";

export default function EyesEffect() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    p5.colorMode(p5.HSB);
    p5.angleMode(p5.DEGREES);
  };

  const draw = (p5) => {
    p5.clear();

    // Vänster öga
    let leftX = 150;
    let leftY = 200;
    let leftAngle = p5.atan2(p5.mouseY - leftY, p5.mouseX - leftX);

    p5.push();
    p5.translate(leftX, leftY);
    p5.fill(255);
    p5.ellipse(0, 0, 50, 50);
    p5.rotate(leftAngle);
    p5.fill(0);
    p5.ellipse(12.5, 0, 25, 25);
    p5.pop();

    // Höger öga
    let rightX = 250;
    let rightY = 200;
    let rightAngle = p5.atan2(p5.mouseY - rightY, p5.mouseX - rightX);

    p5.push();
    p5.translate(rightX, rightY);
    p5.fill(255);
    p5.ellipse(0, 0, 50, 50);
    p5.rotate(rightAngle);
    p5.fill(0);
    p5.ellipse(12.5, 0, 25, 25);
    p5.pop();
  };

  // Använd klass istället för inline-style
  return (
    <div className="eyes-effect">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

