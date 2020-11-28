class ball {
  
    // create a ball object
    constructor(x,y,vx,vy,bvx,bvy,radius,color) {
      this.x = x;  // x position
      this.y = y;  // y position
      this.vx = vx; // x velocity
      this.vy = vy; // y velocity
      this.bvx = bvx; // x velocity after bounce = vx * bvx
      this.bvy = bvy; // y velocity after bounce = vy * bvy
      this.radius = radius; 
      this.color = color;
    }

    // draw the ball to the canvas
    draw() {
      c.beginPath();
      c.fillStyle = this.color;
      c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      c.fill();          
    } 

    // move the ball according to the velocity
    move() {
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
    }

    // determine if the ball has hit a boundary, multiply it by the 
    // bounce values for the desired effect
    boundary_check() {
      if ((this.y + this.radius) + this.vy > canvas.height || 
        (this.y - this.radius) + this.vy < 0) {
          this.vy = this.bvy * this.vy;
      }
      if ((this.x + this.radius) + this.vx > canvas.width || 
          (this.x - this.radius) + this.vx < 0) {
          this.vx = this.bvx * this.vx;
      }          
    }
  }

  var player_ball = new ball(25,250,0,0,0,0,25,'green');