// for accelerometer control
var x_sensitivity = 0.3;
var y_sensitivity = 4;

window.ondeviceorientation = function(event)
{
// controls ball movement (Display up orientation with beta at 20)
// assumes the natural phone position is 20; ranges from 10-40 for natual movement
  // if (event.beta < 20 && event.beta > 10){
  //   player_ball.vy = -1.5*y_sensitivity*(event.beta/10);
  // }
  // else if(event.beta > 20 && event.beta < 40){
  //   player_ball.vy = y_sensitivity*(event.beta/10);
  // }

  // assume starting position is display up, portrait mode
  player_ball.vy = y_sensitivity*(event.beta/5);
  player_ball.vx = x_sensitivity*((event.alpha + event.gamma)/2);
}

document.getElementById("btn_sensitivityX").onclick = function(){
  x_sensitivity = document.getElementById("inputSensitivityX").value;
  document.getElementById("sensitivityX").textContent = document.getElementById("inputSensitivityX").value;
}

document.getElementById("btn_sensitivityY").onclick = function(){
  y_sensitivity = document.getElementById("inputSensitivityY").value;
  document.getElementById("sensitivityY").textContent = document.getElementById("inputSensitivityY").value;
}