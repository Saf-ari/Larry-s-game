
function addAssteroid (x,y)
{
  GAME.assteroids.push(new Assteroid(x,y));
}

function Assteroid (x,y){
  this.x = x;
  this.y = y;
}

var assteroidAddTimer=69;

function animateAssteroids (){
  if(assteroidAddTimer==0){
    addAssteroid(Math.random()*GAME.canvas.width, 0);
    assteroidAddTimer=69;
  }
  assteroidAddTimer--;

  for (var i = 0; i<GAME.assteroids.length; i++){
    GAME.assteroids[i].y+=2;
    if(GAME.assteroids[i].y>GAME.canvas.height){
      GAME.assteroids.splice(i,1);
      i--;
    }
  }
}

function renderAssteroids(context){
  context.fillStyle='red';
  for (var i = 0; i<GAME.assteroids.length;i++)
  {
    context.fillRect(GAME.assteroids[i].x,GAME.assteroids[i].y,20,20);
  }
}
