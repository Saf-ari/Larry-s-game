var alienImage = new Image();
alienImage.src="images/alien.png"

var rockImage = new Image();
rockImage.src="images/rock.png"

var lifeImage = new Image();
lifeImage.src = "images/heart.png"

var healthImage = new Image();
healthImage.src = "images/healthPickup.png"

var shieldImage = new Image();
shieldImage.src = "images/heart.png"

var fireRateImage = new Image();
fireRateImage.src = "images/rapidFireBoost.png"

function addAlien (type,x,y,health)
{
  GAME.aliens.push(new Alien(type,x,y,health));
}

function addRock (x,y,horizontalSpeed,verticalSpeed)
{
  GAME.rocks.push(new Rock(x,y,horizontalSpeed,verticalSpeed));
}

function addPowerUp (type,x,y){
  GAME.powerUps.push(new PowerUp(type,x,y));
}

function Rock(x,y,horizontalSpeed, verticalSpeed) {
  this.x = x;
  this.y =y;
  this.horizontalSpeed = horizontalSpeed;
  this.verticalSpeed = verticalSpeed;
}

function PowerUp(type,x,y){
  this.type = type;
  this.x = x;
  this.y = y;
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
var rockTimer=100;

function animateAliens() {
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
  for(var i = 0; i< GAME.rocks.length; i++) {
     GAME.rocks[i].x += GAME.rocks[i].horizontalSpeed;
     GAME.rocks[i].y += GAME.rocks[i].verticalSpeed;
    if(GAME.rocks[i].y>GAME.canvas.height|| GAME.rocks[i].x>GAME.canvas.length||GAME.rocks[i].x<-30||GAME.rocks[i]>510) {
      GAME.rocks.splice(i,1);
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

function spawnPowerUp (x,y){
  var ran = Math.random()*3;
  if (ran < 1){
    addPowerUp("fireRate", x, y);
  } else if (ran < 2){
    addPowerUp ("health",x,y);
  } else {
    addPowerUp ("shield",x,y);
  }
}

function renderPowerUps (context){
  //draw them and then move them down 4
  for (var i = 0; i < GAME.powerUps.length; i ++){
    if (GAME.powerUps [i].type == "fireRate"){
      context.drawImage(fireRateImage, GAME.powerUps[i].x,GAME.powerUps[i].y, 30,30);
    } else if (GAME.powerUps [i].type == "health"){
      context.drawImage(healthImage, GAME.powerUps[i].x,GAME.powerUps[i].y, 30,30);
    } else {
      context.drawImage(shieldImage, GAME.powerUps[i].x,GAME.powerUps[i].y, 30,30);
    }
    GAME.powerUps [i].y += 1;
  }
}

function renderAliens(context) {
  for(var i= 0; i< GAME.aliens.length;i++) {
    context.drawImage(alienImage, GAME.aliens[i].x,GAME.aliens[i].y, 30,30);
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
      }
    }
}


function renderLives(context){
  for (var i = 0; i < SPACE_SHIP.health; i ++){
    context.drawImage( lifeImage, i*20+10,5,20,20);
  }
}

function checkAlienHit() {
  for(var i = 0; i < GAME.aliens.length; i++) {
  //If the obstacle collides with the player, it is removed from the array and the player
  //loses one (1) health point.
    if (GAME.aliens[i].x < SPACE_SHIP.x + 50 && GAME.aliens[i].x + 30 >
      SPACE_SHIP.x && GAME.aliens[i].y < SPACE_SHIP.y + 40 &&
      GAME.aliens[i].y + 30 > SPACE_SHIP.y) {
      SPACE_SHIP.health--;
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
            var random = Math.random () * 100 + 1;
            if (random <10){
              spawnPowerUp(GAME.aliens[i].x,GAME.aliens[i].y);
            }
            GAME.score++;
            GAME.aliens.splice(i,1);
            i--;
          }
          SPACE_SHIP.bullets.splice(j,1);
          break;
        }
      }
    }

  }

  function checkPowerUpHit(){
    for(var i = 0; i < GAME.powerUps.length; i++) {
    //If the powerUp collides with the player, it is removed from the array and the player
    //gets the powerup
      if (GAME.powerUps[i].x < SPACE_SHIP.x + 50 && GAME.powerUps[i].x + 30 >
        SPACE_SHIP.x && GAME.powerUps[i].y < SPACE_SHIP.y + 40 &&
        GAME.powerUps[i].y + 30 > SPACE_SHIP.y) {
          if (GAME.powerUps[i].type == "fireRate"){
            //shoot faster
            bulletPickupSound.play();
          } else if (GAME.powerUps[i].type == "health") {
            if ((SPACE_SHIP.health < 3 && SPACE_SHIP.shieldActive == false) || (SPACE_SHIP.health< 4 && SPACE_SHIP.shieldActive)){
             SPACE_SHIP.health ++;
          } else {
             if (!SPACE_SHIP.shieldActive){
               SPACE_SHIP.shieldActive = true;
               SPACE_SHIP.health ++;
             }
           }
             var k;
             k = getRandomInt(3);
             if (k == 0){
               shieldPickupSound1.play();
             }
             else if (k == 1){
               shieldPickupSound2.play();
             }
             else{
               shieldPickupSound3.play();
             }
          }

          GAME.powerUps.splice(i,1);
          i--;

        }
      }
  }
