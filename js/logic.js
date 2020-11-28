// global variables
var drops = 0;

function game_logic()
{
  // check if the balls have collided with a boundary
  player_ball.boundary_check();

  // check if the player ball has entered the hole
  var dx = (black_hole.x ) - (player_ball.x + 0.8*player_ball.vx);
  var dy = (black_hole.y ) - (player_ball.y + 0.8*player_ball.vy);
  var distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < black_hole.radius + player_ball.radius) {
        drops++;
        black_hole = new hole('black');
      }

  // move the ball
  player_ball.move();

}