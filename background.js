var image = new Image();
image.src="images/background.png"

var lifeImage = new Image();
lifeImage.src = "images/heart.png"

var shieldImage = new Image();
shieldImage.src = "images/shieldheart.png"

function addBackground (x,y)
{
  GAME.background.push(new Background(x,y));
}

function Background (x,y)
{
  this.x = x;
  this.y = y;
}
var backgroundAddTimer = 275;

function animateBackground ()
{
  for(var i = 0; i < GAME.background.length; i++) {
    GAME.background[i].y+=0.5;
    if(GAME.background[i].y>GAME.canvas.height){
      GAME.background.splice(i,1);
      addBackground(0,-750);
      i--;
    }
  }
}

function renderScore(context){

}

function RenderBackground(context){
  for(var i= 0; i< GAME.background.length;i++) {
    context.drawImage(image, GAME.background[i].x,GAME.background[i].y, 500,750);
  }
}

function renderLives(context){
  for (var i = 0; i < SPACE_SHIP.health; i ++){
    context.drawImage( lifeImage, i*20+10,5,20,20);
    if (i == SPACE_SHIP.health-1 && SPACE_SHIP.shieldActive){
      context.drawImage(shieldImage, (i + 1)*20+10,5,20,20)
    }
  }
}
