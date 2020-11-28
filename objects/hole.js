// var new_x = Math.random() * 1000;
// var new_y = Math.random() * 600;

class hole {
  
    // create a ball object
    constructor(r,color) {
      this.x = Math.random() * 1000;  // x position
      this.y = Math.random() * 600;  // y position
      this.radius = r; // radius
      this.color = color;
    }

    // draw the ball to the canvas
    draw() {
      c.beginPath();
      c.fillStyle = this.color;
      c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      c.fill(); 

    } 

    // newPosition(){
    //     new_x = Math.random() * 1000;
    //     new_y = Math.random() * 500; 
    // }

  }

var black_hole = new hole( 50, 'black');



  