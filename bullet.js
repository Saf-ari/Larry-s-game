function InitializeBullet() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  BULLET = {
    x : 300,
    y : 150,
    rotation : 0,
    health : 3,
    positions : [
      {
        x : 0,
       	y : 0
      },
      {
        x : 0,
       	y : 1
      },
      {
        x : 1,
       	y : 1
      },
      {
        x : 1,
       	y : 0
      },
      {
        x : 0,
       	y : 0
      },
    ],
    latest : {
        y : BULLET.y,
        x : BULLET.x
    },
    scale : 5,
    speed : 3,
    initialized : true
  };
}

// Rotate rotates a point around
// cx, cy   :   The central point
// x, y     :   The coordinates of point to be rotatedPoint
// angle    :   Angle in degrees of rotation
/*function Rotate(cx, cy, x, y, angle) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}*/

// RotateAroundOrigin
// x, y     :   The coordinates of point to be rotatedPoint
// angle    :   Angle in degrees of rotation
/*function RotateAroundOrigin(x, y, angle) {
  return Rotate(0, 0, x, y, angle);
}*/

/**  RenderSpaceship
 *
 *  Renders all spaceship points after adjusting them for the rotation and position
 *    in space
 */
function RenderBullet(context){
  if (!BULLET.initialized) {
    return;
  }


  // Move to the point where drawing will start

  context.fillRect(BULLET.x,BULLET.y, 69,69);
  //context.moveTo(SPACE_SHIP.x + rotatedPoint[0],SPACE_SHIP.y +  rotatedPoint[1]);
  /*
  SPACE_SHIP.latest.x = SPACE_SHIP.x + rotatedPoint[0];
  SPACE_SHIP.latest.y = SPACE_SHIP.y + rotatedPoint[1];
  */
  // Begin rendering the space ship points (rotating them each time)
  /*context.beginPath();
  for (var i = 0; i < BULLET.positions.length; i++) {
    var rotatedPoint = RotateAroundOrigin(
      BULLET.positions[i].x,
      BULLET.positions[i].y,
      BULLET.rotation
    );
    context.lineTo(
      BULLET.x,
      BULLET.y
    );
  }
  context.lineWidth = 1;
  context.stroke();*/
}
