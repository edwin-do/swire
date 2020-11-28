var hits = 0;
var num_enemies = 3;
var enemy_balls = [];
var c = canvas.getContext("2d");

window.ondeviceorientation = function(event)
{
  // the alpha/beta/gamma values are in the event object, output them here
  document.getElementById("alpha").innerHTML = event.alpha;
  document.getElementById("beta").innerHTML = event.beta;
  document.getElementById("gamma").innerHTML = event.gamma;

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