var alienImage = new Image();
alienImage.src="images/alien.png"

var rockImage = new Image();
rockImage.src="images/rock.png"

var lifeImage = new Image();
lifeImage.src = "images/heart.png"

function addAsteroid (type,x,y,health)
{
  GAME.asteroids.push(new Asteroid(type,x,y,health));
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

function Asteroid (type, x,y, health){
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

function animateAsteroids() {
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
      addAsteroid("fighter",Math.random()*(GAME.canvas.width -100) + 50, -20, 1);
      fighterTimer=90;
    }
  }
  fighterTimer--;
  if(speedyTimer<0){
    if(getRandomInt(10)==4) {
      addAsteroid("speedy", Math.random()*(GAME.canvas.width -200) + 100, -20, 0);
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

  for (var i = 0; i<GAME.asteroids.length; i++){
    GAME.asteroids[i].y+=1;
    if(GAME.asteroids[i].type == "speedy") {
      if(GAME.asteroids[i].positive) {
      GAME.asteroids[i].horizontalSpeed+=1;
    }
    if(!GAME.asteroids[i].positive) {
      GAME.asteroids[i].horizontalSpeed-=1;
    }
    if(GAME.asteroids[i].horizontalSpeed< -20) {
      GAME.asteroids[i].positive = true;
    }
    if(GAME.asteroids[i].horizontalSpeed> 20) {
      GAME.asteroids[i].positive= false;
    }
    GAME.asteroids[i].x+=GAME.asteroids[i].horizontalSpeed
  }
    if(GAME.asteroids[i].y>GAME.canvas.height){
      GAME.asteroids.splice(i,1);
      i--;
    }
  }
}

function renderAsteroids(context) {
  for(var i= 0; i< GAME.asteroids.length;i++) {
    context.drawImage(alienImage, GAME.asteroids[i].x,GAME.asteroids[i].y, 30,30);
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
  for(var i = 0; i < GAME.asteroids.length; i++) {
  //If the obstacle collides with the player, it is removed from the array and the player
  //loses one (1) health point.
    if (GAME.asteroids[i].x < SPACE_SHIP.x + 50 && GAME.asteroids[i].x + 30 >
      SPACE_SHIP.x && GAME.asteroids[i].y < SPACE_SHIP.y + 40 &&
      GAME.asteroids[i].y + 30 > SPACE_SHIP.y) {
      SPACE_SHIP.health--;
        GAME.asteroids.splice(i,1);
        i--;

      }
    }
  }

  function checkBulletHit() {
    for(var i = 0; i < GAME.asteroids.length; i++) {
      for(var j = 0; j < SPACE_SHIP.bullets.length; j++) {
        if(GAME.asteroids[i].x < SPACE_SHIP.bullets[j].x + 10 && GAME.asteroids[i].x + 30 > SPACE_SHIP.bullets[j].x && GAME.asteroids[i].y < SPACE_SHIP.bullets[j].y +20 && GAME.asteroids[i].y + 30 > SPACE_SHIP.bullets[j].y) {
          if(GAME.asteroids[i].health>0) {
            GAME.asteroids[i].health--;
          }
          else {
            GAME.asteroids.splice(i,1);
            i--;
            GAME.score++;
          }
          SPACE_SHIP.bullets.splice(j,1);
          break;
    }
  }
}
}
