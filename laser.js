var LASER = {
  active : false,
  image : new Image(),
  x : 0,
  y : 0,
  w : 50,
  h : 100,
  duration : 200
}

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
    context.drawImage(LASER.image, LASER.x, LASER.y, LASER.w, LASER.h);
  }
}
