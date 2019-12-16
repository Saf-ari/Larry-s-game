var GAME = {
  canvas : {
    width : 500,
    height : 750
  },
  started : false,
  level : 1,
  score : 0,
  aliens : [],
  background: [],
  rocks: [],
  enemyBullets : [],
  powerUps: [],
  weaponNames : ["", "Rocket Launcher", "Laser Blaster", "Rail Gun"]
};

var SPACE_SHIP = {
  initialized : false,
  bullets : [],
  x : 0,
  y : 0,
  speed : 0,
  health : 3,
  shieldActive : false,
  firingSpeed : [0,0,1000,25],
  currentWeapon : 3
};

var BOSS = {
  active : false,
  bullets : [],
  x : 200,
  y : 50,
  w : 70,
  h : 70,
  speed : 3,
  health : 3,
  image : new Image(),
  firingSpeed : 10
};
