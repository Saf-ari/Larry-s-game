var boosters = new Image();
var static = new Image();
var boostersShield = new Image();
var staticShield = new Image();
boosters.src="images/rocketBoosting.png";
static.src="images/rocketStatic.png";
boostersShield.src="images/spaceshipThrustShield.png";
staticShield.src="images/spaceshipShield.png";

// Populate a global variable for the spaceship
function InitializeSpaceship() {
  initializeSounds();
  addBackground(0,0);
  addBackground(0,-750);
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  SPACE_SHIP.x = 200;
  SPACE_SHIP.y = 500;
  SPACE_SHIP.health = 3;
  SPACE_SHIP.speed = 3;
  SPACE_SHIP.initialized = true;
  SPACE_SHIP.bullets = [];
  SPACE_SHIP.shieldActive = false;
}
// Rotate rotates a point around
// cx, cy   :   The central point
// x, y     :   The coordinates of point to be rotatedPoint
// angle    :   Angle in degrees of rotation
// function Rotate(cx, cy, x, y, angle) {
//     var radians = (Math.PI / 180) * angle,
//         cos = Math.cos(radians),
//         sin = Math.sin(radians),
//         nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
//         ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
//     return [nx, ny];
// }
//
//  RotateAroundOrigin
//  x, y     :   The coordinates of point to be rotatedPoint
//  angle    :   Angle in degrees of rotation
//  function RotateAroundOrigin(x, y, angle) {
//   return Rotate(0, 0, x, y, angle);
// }

/**  RenderSpaceship
 *
 *  Renders all spaceship points after adjusting them for the rotation and position
 *    in space
 */


function RenderSpaceship(context) {
  if (!SPACE_SHIP.initialized) {
    return;
  }
  if (CONTROLS.ship.forward && !(SPACE_SHIP.y < 3)) {
    if (SPACE_SHIP.shieldActive){
      context.drawImage(boostersShield, SPACE_SHIP.x,SPACE_SHIP.y, 50,52);
    }
    else{
      context.drawImage(boosters, SPACE_SHIP.x,SPACE_SHIP.y, 50,52);
    }

  }
  else {
    if (SPACE_SHIP.shieldActive){
      context.drawImage(staticShield, SPACE_SHIP.x,SPACE_SHIP.y, 50,40);
    }
    else{
      context.drawImage(static, SPACE_SHIP.x,SPACE_SHIP.y, 50,40);
    }

  }

  //543/50
  //309/40



  // Move to the point where drawing will start
  // var rotatedPoint = RotateAroundOrigin(
  //   SPACE_SHIP.positions[0].x,
  //   SPACE_SHIP.positions[0].y,
  //   SPACE_SHIP.rotation
  // );
  // context.moveTo(SPACE_SHIP.x + rotatedPoint[0],SPACE_SHIP.y +  rotatedPoint[1]);
  // SPACE_SHIP.latest.x = SPACE_SHIP.x + rotatedPoint[0];
  // SPACE_SHIP.latest.y = SPACE_SHIP.y + rotatedPoint[1];
  // Begin rendering the space ship points (rotating them each time)
  // context.beginPath();
  // for (var i = 0; i < SPACE_SHIP.positions.length; i++) {
  //   var rotatedPoint = RotateAroundOrigin(
  //     SPACE_SHIP.positions[i].x,
  //     SPACE_SHIP.positions[i].y,
  //     SPACE_SHIP.rotation
  //   );
  //   context.lineTo(
  //     SPACE_SHIP.x + (rotatedPoint[0] * SPACE_SHIP.scale),
  //     SPACE_SHIP.y + (rotatedPoint[1] * SPACE_SHIP.scale)
  //   );
  // }
  // context.lineWidth = 1;
  // switch (SPACE_SHIP.health) {
  //   case 3:
  //     context.strokeStyle = 'green';
  //     break;
  //   case 2:
  //     context.strokeStyle = 'blue';
  //     break;
  //   case 1:
  //     context.strokeStyle = 'orange';
  //     break;
  //   case 0:
  //     context.strokeStyle = 'red';
  //     break;
  //   default:
  //     context.strokeStyle = 'white';
  //     break;
  // }
}
