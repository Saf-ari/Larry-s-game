/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

var CONTROLS = {
  ship : {
    forward : false,
    back : false,
    rotateClockwise : false,
    rotateCounterClockwise : false
  },
  firing : false,
  lastFireTime : [0, 0, 0, 0],
  weaponKeys : ["q", "w", "e", "r"],
};

function weaponSwitchControl(key) {
  for (var i = 2; i <= 3; i++) {
    if (key == CONTROLS.weaponKeys[i]) {
      SPACE_SHIP.currentWeapon = i;
    }
  }
}


document.addEventListener('keydown', function(event) {
  weaponSwitchControl(event.key);
  switch (event.key) {
    case "ArrowUp":
//      CONTROLS.ship.forward = true;
      CONTROLS.ship.forward = true;
      break;
    case "ArrowDown":
      CONTROLS.ship.backward = true;
      break;
    case "ArrowLeft":
      CONTROLS.ship.left = true;
      break;
    case "ArrowRight":
      CONTROLS.ship.right = true;
      break;
    case " ":
      CONTROLS.firing = true;
      break;
    default:
      break;
  }
});

document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.ship.forward = false;
      break;
    case "ArrowDown":
      CONTROLS.ship.backward = false;
      break;
    case "ArrowLeft":
      CONTROLS.ship.left = false;
      break;
    case "ArrowRight":
      CONTROLS.ship.right = false;
      break;
    case " ":
      CONTROLS.firing = false;
      break;
    default:
      break;
  }
});

function fire(weaponNumber) {
  if (weaponNumber == 3) {
    LASER.active = false;
    addBullet(SPACE_SHIP.bullets, SPACE_SHIP.x + 24.5, SPACE_SHIP.y);
  } else if (weaponNumber == 2) {
    LASER.active = true;
  }
}

function weaponControl() {
  for (var i = 2; i <= 3; i++) {
    CONTROLS.lastFireTime[i]--;
  }

  if (CONTROLS.firing == true)
  {
    if (CONTROLS.lastFireTime[SPACE_SHIP.currentWeapon] <= 0)
    {
      fire(SPACE_SHIP.currentWeapon);
      CONTROLS.lastFireTime[SPACE_SHIP.currentWeapon] = SPACE_SHIP.firingSpeed[SPACE_SHIP.currentWeapon];
    }
  }
}
