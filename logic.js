// global variables
var hits = 0;
var num_enemies = 3;
var enemy_balls = [];

function game_logic()
{
  // check if the balls have collided with a boundary
  player_ball.boundary_check();
  for (var i = 0; i < num_enemies; i++) enemy_balls[i].boundary_check();

  // check if the player ball has entered the hole
  var dx = (black_hole.x ) - (player_ball.x + player_ball.vx);
  var dy = (black_hole.y ) - (player_ball.y + player_ball.vy);
  var distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < black_hole.radius + player_ball.radius) {
        hits++;
        black_hole = new hole(50, 'black');
      }
  
  // check if the player ball collides with any other balls
  // for (var i = 0; i < num_enemies; i++) {

  //   // calculate the distance between the future ball positions
  //   var dx = (enemy_balls[i].x + enemy_balls[i].vx) - (player_ball.x + player_ball.vx);
  //   var dy = (enemy_balls[i].y + enemy_balls[i].vy) - (player_ball.y + player_ball.vy);
  //   var distance = Math.sqrt(dx * dx + dy * dy);

  //   // if a collision occurs, flip both ball's velocities
  //   if (distance < enemy_balls[i].radius + player_ball.radius) {
  //     hits++;
  //     enemy_balls[i].vx = -enemy_balls[i].vx;
  //     enemy_balls[i].vy = -enemy_balls[i].vy;
  //   }
  // }

  // move the balls
  player_ball.move();
  for (var i = 0; i < num_enemies; i++) enemy_balls[i].move();

}