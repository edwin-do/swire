function createEnemies(){
    for (var i = 0; i < num_enemies; i++)
    {
      var xdir = Math.random() > 0.50 ? 1 : -1;
      var ydir = Math.random() > 0.50 ? 1 : -1;
      var vx = xdir * Math.floor(4 + (Math.random() * 5));
      var vy = ydir * Math.floor(4 + (Math.random() * 5));
      enemy_balls[i] = 
        new ball(canvas.width-50,50 + (i*50),vx,vy,-1,-1,25,'red'); 
    }
}