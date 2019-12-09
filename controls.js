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
  fire : false,
  lastFireTime : [0, 0, 0, 0],
  ability : 3,
  abilityKeys : ["Q", "W", "E", "R"],
  abilityNames : ["", "rocket launcher", "laser blaster", "rail gun"]
};


document.addEventListener('keydown', function(event) {
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
    case " "
      CONTROLS.fire = true;
      break;
    default:
      break;
  }

  for (var i = 2; i <= 3; i++) {
    if (event.key == CONTROLS.abilityKeys[i]) {
      CONTROLS.ability = i;
    }
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
      CONTROLS.fire = false;
      break;
    default:
      break;
  }
});
