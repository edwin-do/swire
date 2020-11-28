// global variables
var hits = 0;

function game_logic()
{
  // check if the balls have collided with a boundary
  player_ball.boundary_check();

  // check if the player ball has entered the hole
  var dx = (black_hole.x ) - (player_ball.x + player_ball.vx);
  var dy = (black_hole.y ) - (player_ball.y + player_ball.vy);
  var distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < black_hole.radius + player_ball.radius) {
        hits++;
        black_hole = new hole(50, 'black');
      }

  // move the ball
  player_ball.move();

}