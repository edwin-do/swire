    // change the direction of the ball based on the arrow key input
    document.onkeydown = function(e) {
        console.log(e.code);
        if (e.code == "ArrowDown") player_ball.vy = 5;
        else if (e.code == "ArrowUp") player_ball.vy = -5;
        else if (e.code == "ArrowRight") player_ball.vx = 5;
        else if (e.code == "ArrowLeft") player_ball.vx = -5;        
      };
  
      // when the player releases a key, stop the movement in that direction
      document.onkeyup = function(e) { 
        if (e.code == "ArrowDown") player_ball.vy = 0;
        else if (e.code == "ArrowUp") player_ball.vy = 0;
        else if (e.code == "ArrowRight") player_ball.vx = 0;
        else if (e.code == "ArrowLeft") player_ball.vx = 0;        
      };