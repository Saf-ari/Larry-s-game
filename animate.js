/**
*  handleShipAnimation moves the ship based on its direction and
*    keyboard control
*
*/
/*function fireBullet()
{
  bullets.push(new bullet);
}
*/
function handleBulletAnimation() {
    BULLET.y -= 1;
}

function handleShipAnimation() {
  if (CONTROLS.ship.forward && !(SPACE_SHIP.y < 3)) {
    /*var radians = (Math.PI / 180) * SPACE_SHIP.rotation,
    cos = Math.cos(radians),
    sin = Math.sin(radians);
    SPACE_SHIP.x += SPACE_SHIP.speed * sin;*/
    SPACE_SHIP.y -=  SPACE_SHIP.speed;
  }
  if (CONTROLS.ship.backward && !(SPACE_SHIP.y > GAME.canvas.height - 33)) {
    /*var radians = (Math.PI / 180) * SPACE_SHIP.rotation,
    cos = Math.cos(radians),
    sin = Math.sin(radians);
    SPACE_SHIP.x -= SPACE_SHIP.speed * sin;*/
    SPACE_SHIP.y +=  SPACE_SHIP.speed;
  }
  if (CONTROLS.ship.left && !(SPACE_SHIP.x < 3)) {

    SPACE_SHIP.x -= SPACE_SHIP.speed;
  }
  if (CONTROLS.ship.right && !(SPACE_SHIP.x > GAME.canvas.width - 12)) {
    SPACE_SHIP.x += SPACE_SHIP.speed;
  }
  /*if (CONTROLS.ship.rotateClockwise) {
  SPACE_SHIP.rotation -= 4;
}
if (CONTROLS.ship.rotateCounterClockwise) {
SPACE_SHIP.rotation += 4;
}*/

// Check if asteroid is leaving the boundary, if so, switch sides

}



function RenderNewObject(context) {
  //context.fillRect(NEW_OBJECT.x,NEW_OBJECT.y,50,50);
  // Draw a new item here using the canvas 'context' variable
}

function HandleNewObjectMovement() {


  //NEW_OBJECT.y += 1;

}


function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects
    handleShipAnimation();
    handleBulletAnimation();
    HandleNewObjectMovement();

    
    animateAssteroids();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw new items
    RenderSpaceship(context);
    RenderBullet(context);
    RenderNewObject(context);
    renderAssteroids(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
