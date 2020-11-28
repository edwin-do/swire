// global variables

var hits = 0;
var num_enemies = 3;
var enemy_balls = [];
var c = canvas.getContext("2d");

function game_logic()
{
  // check if the balls have collided with a boundary
  player_ball.boundary_check();
  for (var i = 0; i < num_enemies; i++) enemy_balls[i].boundary_check();

  // check if the player ball collides with any other balls
  for (var i = 0; i < num_enemies; i++) {

    // calculate the distance between the future ball positions
    var dx = (enemy_balls[i].x + enemy_balls[i].vx) - (player_ball.x + player_ball.vx);
    var dy = (enemy_balls[i].y + enemy_balls[i].vy) - (player_ball.y + player_ball.vy);
    var distance = Math.sqrt(dx * dx + dy * dy);

    // if a collision occurs, flip both ball's velocities
    if (distance < enemy_balls[i].radius + player_ball.radius) {
      hits++;
      enemy_balls[i].vx = -enemy_balls[i].vx;
      enemy_balls[i].vy = -enemy_balls[i].vy;
    }
  }

  // move the balls
  player_ball.move();
  for (var i = 0; i < num_enemies; i++) enemy_balls[i].move();

}