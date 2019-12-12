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
  powerUps: []
};

var SPACE_SHIP = {
  initialized : false,
  bullets : [],
  x : 0,
  y : 0,
  speed : 0,
  health : 3,
  shieldActive : false,
  firingSpeed : 25
};

var NEW_OBJECT = {
  x : 0,
  y : 0
};
