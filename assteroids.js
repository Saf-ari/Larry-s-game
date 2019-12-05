var alienImage = new Image();
alienImage.src="images/alien.png"

var rockImage = new Image();
rockImage.src="images/rock.png"

var lifeImage = new Image();
lifeImage.src = "images/rock.png"

function addAssteroid (type,x,y,health)
{
  GAME.assteroids.push(new Assteroid(type,x,y,health));
}

function addRock (x,y,horizontalSpeed,verticalSpeed)
{
  GAME.rocks.push(new Rock(x,y,horizontalSpeed,verticalSpeed));
}

function Rock(x,y,horizontalSpeed, verticalSpeed) {
  this.x = x;
  this.y =y;
  this.horizontalSpeed = horizontalSpeed;
  this.verticalSpeed = verticalSpeed;
}

function Assteroid (type, x,y, health){
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
var rockTimer=100;

function animateAssteroids() {
  if(rockTimer< 0&& getRandomInt(10)==4) {
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
      addRock(newX,newY,newHorizontal,newVertical);
      rockTimer = 100;
  }
  rockTimer--;

  if(fighterTimer<0){
    if(getRandomInt(10)==4) {
      addAssteroid("fighter",Math.random()*(GAME.canvas.width -100) + 50, -20, 1);
      fighterTimer=90;
    }
  }
  fighterTimer--;
  if(speedyTimer<0){
    if(getRandomInt(10)==4) {
      addAssteroid("speedy", Math.random()*(GAME.canvas.width -200) + 100, -20, 0);
      speedyTimer=400;
    }
  }
  speedyTimer--;

  for(var i = 0; i< GAME.rocks.length; i++) {
     GAME.rocks[i].x += GAME.rocks[i].horizontalSpeed;
     GAME.rocks[i].y += GAME.rocks[i].verticalSpeed;

    if(GAME.rocks[i].y>GAME.canvas.height|| GAME.rocks[i].x>GAME.canvas.length||GAME.rocks[i].x<-30||GAME.rocks[i]>510) {
      GAME.rocks.splice(i,1);
    }
  }

  for (var i = 0; i<GAME.assteroids.length; i++){
    GAME.assteroids[i].y+=1;
    if(GAME.assteroids[i].type == "speedy") {
      if(GAME.assteroids[i].positive) {
      GAME.assteroids[i].horizontalSpeed+=1;
    }
    if(!GAME.assteroids[i].positive) {
      GAME.assteroids[i].horizontalSpeed-=1;
    }
    if(GAME.assteroids[i].horizontalSpeed< -20) {
      GAME.assteroids[i].positive = true;
    }
    if(GAME.assteroids[i].horizontalSpeed> 20) {
      GAME.assteroids[i].positive= false;
    }
    GAME.assteroids[i].x+=GAME.assteroids[i].horizontalSpeed
  }
    if(GAME.assteroids[i].y>GAME.canvas.height){
      GAME.assteroids.splice(i,1);
      i--;
    }
  }
}

function renderAssteroids(context) {
  for(var i= 0; i< GAME.assteroids.length;i++) {
    context.drawImage(alienImage, GAME.assteroids[i].x,GAME.assteroids[i].y, 30,30);
  }
}

function renderRocks(context) {
  for(var i= 0; i< GAME.rocks.length;i++) {
    context.drawImage(rockImage, GAME.rocks[i].x,GAME.rocks[i].y, 40,40);
  }
}

function checkRockHit() {
  for(var i = 0; i < GAME.rocks.length; i++) {
    if (GAME.rocks[i].x < SPACE_SHIP.x + 40 && GAME.rocks[i].x + 40 >
      SPACE_SHIP.x && GAME.rocks[i].y < SPACE_SHIP.y + 52 &&
      GAME.rocks[i].y + 40 > SPACE_SHIP.y) {
        SPACE_SHIP.health--;
        GAME.rocks.splice(i,1);
        i--;
        GAME.score ++;
      }
    }
}

function renderLives(context){
  for (var i = 0; i < SPACE_SHIP.health; i ++){
    context.drawImage( lifeImage, i*20+10,5,20,20);
  }
}


function checkObstacleCollision() {
  for(var i = 0; i < GAME.assteroids.length; i++) {
  //If the obstacle collides with the player, it is removed from the array and the player
  //loses one (1) health point.
    if (GAME.assteroids[i].x < SPACE_SHIP.x + 50 && GAME.assteroids[i].x + 30 >
      SPACE_SHIP.x && GAME.assteroids[i].y < SPACE_SHIP.y + 40 &&
      GAME.assteroids[i].y + 30 > SPACE_SHIP.y) {
      SPACE_SHIP.health--;
        GAME.assteroids.splice(i,1);
        i--;

      }
    }
  }

  function checkBulletHit() {
    for(var i = 0; i < GAME.assteroids.length; i++) {
      for(var j = 0; j < SPACE_SHIP.bullets.length; j++) {
        if(GAME.assteroids[i].x < SPACE_SHIP.bullets[j].x + 10 && GAME.assteroids[i].x + 30 > SPACE_SHIP.bullets[j].x && GAME.assteroids[i].y < SPACE_SHIP.bullets[j].y +20 && GAME.assteroids[i].y + 30 > SPACE_SHIP.bullets[j].y) {
          if(GAME.assteroids[i].health>0) {
            GAME.assteroids[i].health--;
          }
          else {
            GAME.assteroids.splice(i,1);
            i--;
            GAME.score++;
          }
          SPACE_SHIP.bullets.splice(j,1);
          break;
    }
  }
}
}
