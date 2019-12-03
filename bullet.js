var bulletImage = new Image();
bulletImage.src="images/bullet.png"

function addBullet (x,y)
{
  SPACE_SHIP.bullets.push(new Bullet(x,y));
}

function Bullet (x,y)
{
  this.x = x;
  this.y = y;
}

function animateBullets() {
 CONTROLS.fire.lastFireTime--;
 if (CONTROLS.fire.active == true)
 {
   if (CONTROLS.fire.lastFireTime <= 0)
   {
     addBullet(SPACE_SHIP.x + 24.5, SPACE_SHIP.y);
     CONTROLS.fire.lastFireTime = 25;
   }
 }
  for(var i = 0; i < SPACE_SHIP.bullets.length ; i++)
  {
    SPACE_SHIP.bullets[i].y -= 4;
    if(SPACE_SHIP.bullets[i].y<-20) {
      SPACE_SHIP.bullets.splice(i,1);
      i--;
    }
  }
}

function renderBullets(context) {
  for(var i = 0; i < SPACE_SHIP.bullets.length; i++)
  {
    context.drawImage(bulletImage, SPACE_SHIP.bullets[i].x,SPACE_SHIP.bullets[i].y, 2,8);
  }
}
