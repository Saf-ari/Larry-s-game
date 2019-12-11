var GAME = {
  canvas : {
    width : 500,
    height : 750
  },
  started : false,
  level : 1,
  score : 0,
  asteroids : [],
  background: [],
  bullets: [],
  rocks: [],
  weaponNames : ["", "Rocket Launcher", "Laser Blaster", "Rail Gun"]
};

var SPACE_SHIP = {
  initialized : false,
  bullets : [],
  x : 0,
  y : 0,
  firingSpeed : [0,0,1000,25],
  currentWeapon : 3
};

var NEW_OBJECT = {
  x : 0,
  y : 0
};
