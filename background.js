var image = new Image();
image.src="images/background.png"

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
  context.fillStyle = 'red';
  context.fillText ("Score: " + GAME.score, 450, 10);
  context.fillText ("High Score: " + document.cookie, 430, 20)
}

function RenderBackground(context){
  for(var i= 0; i< GAME.background.length;i++) {
    context.drawImage(image, GAME.background[i].x,GAME.background[i].y, 500,750);
  }
}
