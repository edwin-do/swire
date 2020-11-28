    // run the code when the document has finished loading
    var c = canvas.getContext("2d");
    window.onload = function() {
        // get the canvas element 
        var canvas = document.getElementById("canvas");    
  
        // create the enemy balls
        // createEnemies();
        // recogonizes and carries out any game logic, i.e. collisions 
        game_logic();
  
        // draws the game state to the canvas
        function draw()
        {
          // clear the canvas so that we start off with a blank canvas
          c.clearRect(0,0,canvas.width,canvas.height);
  
          // draw the ball and hole to the screen
          player_ball.draw();
          black_hole.draw();
  
          // draw the hits to the screen in the top-left corner
          c.font = "30px serif";
          c.fillText("Drops: " + drops, 15, 30);
        }
  
        // game loop runs every 30 milliseconds
        setInterval(function() {
  
          game_logic();
          draw();
  
        } , 30);
  
      }