// var new_x = Math.random() * 1000;
// var new_y = Math.random() * 600;

class hole {
  
    // create a ball object
    constructor(r,color) {
      this.x = Math.random() * 900;  // x position
      this.y = Math.random() * 500;  // y position
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

var black_hole = new hole( 50, 'black');



  