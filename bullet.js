var bulletImage = new Image();
bulletImage.src="images/bullet.png"

function addBullet (bullets, x,y) {
  bullets.push(new Bullet(x,y));
}

function Bullet (x,y)
{
  this.x = x;
  this.y = y;
  this.speed = 4;
  this.w = 2;
  this.h = 8;
}

function animateBullets(bullets, direction) {
  for(var i = 0; i < bullets.length ; i++) {
    bullets[i].y += direction*bullets[i].speed;
    if (bullets[i].y < -bullets[i].h) {
      bullets.splice(i,1);
      i--;
    }
  }
}

function renderBullets(context) {
  for(var i = 0; i < SPACE_SHIP.bullets.length; i++) {
    context.drawImage(bulletImage, SPACE_SHIP.bullets[i].x, SPACE_SHIP.bullets[i].y, SPACE_SHIP.bullets[i].w, SPACE_SHIP.bullets[i].h);
  }
  for(var i = 0; i < BOSS.bullets.length; i++) {
    context.drawImage(bulletImage, BOSS.bullets[i].x, BOSS.bullets[i].y, BOSS.bullets[i].w, BOSS.bullets[i].h);
  }
}
