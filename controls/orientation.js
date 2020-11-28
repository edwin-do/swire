
window.ondeviceorientation = function(event)
{
  // the alpha/beta/gamma values are in the event object, output them here
  document.getElementById("alpha").innerHTML = event.alpha;
  document.getElementById("beta").innerHTML = event.beta;
  document.getElementById("gamma").innerHTML = event.gamma;

// controls ball movement(portrait orientation)
  if (event.beta < 90){
    player_ball.vy = -7*(event.beta/90);
  }
  else if(event.beta > 90){
    player_ball.vy = 7*(event.beta/90);
  }

  player_ball.vx = 0.5*event.alpha;


  // determine if the device is pointing left or pointint right
  if (event.alpha < 0) 
    document.getElementById("horizontal").innerHTML = "Left";
  else 
    document.getElementById("horizontal").innerHTML = "Right";

  // determine if the device is pointing up or down
  if (event.beta < 0) 
    document.getElementById("vertical").innerHTML = "Down";
  else 
    document.getElementById("vertical").innerHTML = "Up";
}