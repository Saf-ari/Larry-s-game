var LASER = {
  active : false,
  images : [new Image(), new Image(), new Image()],
  x : 0,
  y : 0,
  w : 40,
  h : 750,
  duration : 200
}
LASER.images[0].src = "images/newLaser.png";

function animateLaser() {
  if (LASER.active) {
    LASER.x = SPACE_SHIP.x;
    LASER.y = SPACE_SHIP.y - LASER.h;
    if (CONTROLS.lastFireTime[2] < SPACE_SHIP.firingSpeed[2] - LASER.duration) {
      LASER.active = false;
    }
  }
}

function renderLaser(context) {
  if (LASER.active) {
    context.drawImage(LASER.images[0], LASER.x+5, LASER.y, LASER.w, LASER.h);
  }
}
