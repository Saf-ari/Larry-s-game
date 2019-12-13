  var title = new Image();
title.src="images/title.png";
var start = new Image();
start.src="images/start.png";




function handleShipAnimation() {
  if (CONTROLS.ship.forward && !(SPACE_SHIP.y < 3)) {
    SPACE_SHIP.y -=  SPACE_SHIP.speed;
  }
  if (CONTROLS.ship.backward && !(SPACE_SHIP.y > GAME.canvas.height - 33)) {
    SPACE_SHIP.y +=  SPACE_SHIP.speed;
  }
  if (CONTROLS.ship.left && !(SPACE_SHIP.x < 3)) {

    SPACE_SHIP.x -= SPACE_SHIP.speed;
  }
  if (CONTROLS.ship.right && !(SPACE_SHIP.x > GAME.canvas.width - 12)) {
    SPACE_SHIP.x += SPACE_SHIP.speed;
  }
}


function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');

  context.font = "30px Arial";
  context.fillStyle = "blue";

  if (GAME.score > document.cookie){
      //document.cookie = GAME.score;
    }
  if (GAME.started) {
    // 1 - Reposition the objects
    backgroundMusic.play();
    handleShipAnimation();
    weaponControl();
    animateBullets();
    animateLaser();
    animateBackground();
    animateAliens();
    checkRockHit();
    checkBulletHit();
    checkAlienHit();
    checkLaserHitAlien();
    checkLaserHitRock();
    checkPowerUpHit();
    
    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 500, 750);

    // 3 - Draw new items

    RenderBackground(context);
    RenderSpaceship(context);
    renderBullets(context);
    renderLaser(context);
    renderAliens(context);
    renderRocks(context);
    renderLives(context);
    renderScore (context);
    renderPowerUps(context);
    if(SPACE_SHIP.health == 0) {
      GAME.started = false;
      GAME.score = 0;
    }
  } else {
    context.fillStyle = "#000000";
    context.fillRect(0, 0, 500, 750);
    context.drawImage(title,50,100,400,130);
    context.drawImage(start,100,500,300,50);
    if (CONTROLS.firing) {

      SPACE_SHIP.health = 3;
      GAME.started = true;
      GAME.rocks = [];
      GAME.aliens = [];
      SPACE_SHIP.x = 200;
      SPACE_SHIP.y = 500;
      SPACE_SHIP.bullets = [];
      GAME.score = 0;
    }
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
