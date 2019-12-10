var alienImage = new Image();
alienImage.src="images/alien.png"

var rockImage = new Image();
rockImage.src="images/rock.png"

<<<<<<< Updated upstream:asteroids.js
function addAlien (type,x,y,health)
{
=======
function addAlien (type,x,y,health){
>>>>>>> Stashed changes:aliens.js
  GAME.aliens.push(new Alien(type,x,y,health));
}

function addRock (x,y,horizontalSpeed,verticalSpeed){
  GAME.rocks.push(new Rock(x,y,horizontalSpeed,verticalSpeed));
}

function Rock(x,y,horizontalSpeed, verticalSpeed) {
  this.x = x;
  this.y =y;
  this.horizontalSpeed = horizontalSpeed;
  this.verticalSpeed = verticalSpeed;
}

function Alien (type, x,y, health){
  this.type = type;
  this.x = x;
  this.y = y;
  this.health = health;
  this.horizontalSpeed = 0;
  this.positive = true;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var fighterTimer=300;
var speedyTimer=1200;
var alienTimer=100;

function animateAliens() {
  if(alienTimer< 0 && getRandomInt(10)==4) {
      var newX;
      if(getRandomInt(2) == 1) {
        newX = -20;
      }
      else {
        newX = 500;
      }
      var newY = getRandomInt(600) + 100;
      var newVertical = getRandomInt(3) + 1;
      var newHorizontal = getRandomInt(3) + 1;
      if(newX == 500) {
        newHorizontal = -newHorizontal;
      }
      if(newY >250) {
        newVertical = -newVertical;
      }
      addAlien(newX,newY,newHorizontal,newVertical);
      alienTimer = 100;
  }
  alienTimer--;

  if(fighterTimer<0){
    if(getRandomInt(10)==4) {
      addAlien("fighter",Math.random()*(GAME.canvas.width -100) + 50, -20, 1);
      fighterTimer=90;
    }
  }
  fighterTimer--;
  if(speedyTimer<0){
    if(getRandomInt(10)==4) {
      addAlien("speedy", Math.random()*(GAME.canvas.width -200) + 100, -20, 0);
      speedyTimer=400;
    }
  }
  speedyTimer--;

  for(var i = 0; i< GAME.aliens.length; i++) {
     GAME.aliens[i].x += GAME.aliens[i].horizontalSpeed;
     GAME.aliens[i].y += GAME.aliens[i].verticalSpeed;

    if(GAME.aliens[i].y>GAME.canvas.height|| GAME.aliens[i].x>GAME.canvas.length||GAME.aliens[i].x<-30||GAME.aliens[i]>510) {
      GAME.aliens.splice(i,1);
    }
  }

  for (var i = 0; i<GAME.aliens.length; i++){
    GAME.aliens[i].y+=1;
    if(GAME.aliens[i].type == "speedy") {
      if(GAME.aliens[i].positive) {
      GAME.aliens[i].horizontalSpeed+=1;
    }
    if(!GAME.aliens[i].positive) {
      GAME.aliens[i].horizontalSpeed-=1;
    }
    if(GAME.aliens[i].horizontalSpeed< -20) {
      GAME.aliens[i].positive = true;
    }
    if(GAME.aliens[i].horizontalSpeed> 20) {
      GAME.aliens[i].positive= false;
    }
    GAME.aliens[i].x+=GAME.aliens[i].horizontalSpeed
  }
    if(GAME.aliens[i].y>GAME.canvas.height){
      GAME.aliens.splice(i,1);
      i--;
    }
  }
}

function renderAliens(context) {
  for(var i= 0; i< GAME.aliens.length;i++) {
    context.drawImage(alienImage, GAME.aliens[i].x,GAME.aliens[i].y, 30,30);
  }
}

function renderRocks(context) {
  for(var i= 0; i< GAME.aliens.length;i++) {
    context.drawImage(rockImage, GAME.aliens[i].x,GAME.aliens[i].y, 40,40);
  }
}

function checkRockHit() {
  for(var i = 0; i < GAME.rocks.length; i++) {
    if (GAME.rocks[i].x < SPACE_SHIP.x + 40 && GAME.rocks[i].x + 40 >
      SPACE_SHIP.x && GAME.rocks[i].y < SPACE_SHIP.y + 52 &&
      GAME.rocks[i].y + 40 > SPACE_SHIP.y) {
        SPACE_SHIP.health--;
        if (SPACE_SHIP.shieldActive){
          SPACE_SHIP.shieldActive == false;
        }
        GAME.rocks.splice(i,1);
        i--;
      }
    }
}
<<<<<<< Updated upstream:asteroids.js
function checkObstacleCollision() {
=======


function checkAlienHit() {
>>>>>>> Stashed changes:aliens.js
  for(var i = 0; i < GAME.aliens.length; i++) {
  //If the obstacle collides with the player, it is removed from the array and the player
  //loses one (1) health point.
    if (GAME.aliens[i].x < SPACE_SHIP.x + 50 && GAME.aliens[i].x + 30 >
      SPACE_SHIP.x && GAME.aliens[i].y < SPACE_SHIP.y + 40 &&
      GAME.aliens[i].y + 30 > SPACE_SHIP.y) {
      SPACE_SHIP.health--;
      if (SPACE_SHIP.shieldActive){
        SPACE_SHIP.shieldActive == false;
      }
        GAME.aliens.splice(i,1);
        i--;
      }
    }
  }

  function checkBulletHit() {
    for(var i = 0; i < GAME.aliens.length; i++) {
      for(var j = 0; j < SPACE_SHIP.bullets.length; j++) {
        if(GAME.aliens[i].x < SPACE_SHIP.bullets[j].x + 10 && GAME.aliens[i].x + 30 > SPACE_SHIP.bullets[j].x && GAME.aliens[i].y < SPACE_SHIP.bullets[j].y +20 && GAME.aliens[i].y + 30 > SPACE_SHIP.bullets[j].y) {
          if(GAME.aliens[i].health>0) {
            GAME.aliens[i].health--;
          }
          else {
            GAME.aliens.splice(i,1);
            i--;
          }
          SPACE_SHIP.bullets.splice(j,1);
          break;
    }
  }
}
}
