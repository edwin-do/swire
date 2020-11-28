
    // run the code when the document has finished loading
    window.onload = function() {
        // get the canvas element 
        var canvas = document.getElementById("canvas");    
  
        // create the enemy balls

        for (var i = 0; i < num_enemies; i++)
        {
          var xdir = Math.random() > 0.50 ? 1 : -1;
          var ydir = Math.random() > 0.50 ? 1 : -1;
          var vx = xdir * Math.floor(4 + (Math.random() * 5));
          var vy = ydir * Math.floor(4 + (Math.random() * 5));
          enemy_balls[i] = 
            new ball(canvas.width-50,50 + (i*50),vx,vy,-1,-1,25,'red'); 
        }
  
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
  
        // recogonizes and carries out any game logic, i.e. collisions 
        game_logic()
  
        // draws the game state to the canvas
        function draw()
        {
          // clear the canvas so that we start off with a blank canvas
          c.clearRect(0,0,canvas.width,canvas.height);
  
          // draw the balls to the screen
          player_ball.draw();
          for (var i = 0; i < num_enemies; i++) enemy_balls[i].draw();
  
          // draw the hits to the screen in the top-left corner
          c.font = "20px serif";
          c.fillText("Hits: " + hits, 5, 20);
        }
  
        // game loop runs every 30 milliseconds
        setInterval(function() {
  
          game_logic();
          draw();
  
        } , 30);
  
      }