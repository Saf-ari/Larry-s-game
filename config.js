var GAME = {
  canvas : {
    width : 500,
    height : 750
  },
  started : false,
  level : 1,
  score : 0,
  assteroids : [],
  background: [],
  bullets: [],
  rocks: []
};

var SPACE_SHIP = {
  initialized : false,
  bullets : [],
  latest : {
    x : 0,
    y : 0
  }
};

var NEW_OBJECT = {
  x : 0,
  y : 0
};
