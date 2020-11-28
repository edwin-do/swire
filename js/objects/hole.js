class hole {
  
    // create a ball object
    constructor(color) {
      this.x = 100+ Math.random() * 850;  // x position
      this.y = 200 + Math.random() * 200;  // y position
      this.w = 70;
      this.h = 70;
      this.radius = Math.sqrt(2*(50/2)^2); // radius
      this.color = color;
    }

    // draw the ball to the canvas
    draw() {
      c.beginPath();
      c.fillStyle = this.color;
      // set x and y at the center of the square
      c.fillRect(this.x -this.w/2, this.y - this.h/2, this.w, this.h);

    } 

  }

  // create black hole
  var black_hole = new hole('black');



  