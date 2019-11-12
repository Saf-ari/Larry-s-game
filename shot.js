
function addShots (x,y)
{
  GAME.shots.push(new Assteroid(x,y));
}

function Shots (x,y){
  this.x = x;
  this.y = y;
}

var shotAddTimer=69;

function shotsAssteroids (){
  if(shotsAddTimer==0){
    addShots(SPACE_SHIP.x, SPACE_SHIP.y);
    shotsAddTimer=69;
  }
  shotsAddTimer--;

  for (var i = 0; i<GAME.shots.length; i++){
    GAME.shots[i].y+=2;
    if(GAME.shots[i].y>GAME.canvas.height){
      GAME.shots.splice(i,1);
      i--;
    }
  }
}

function renderShots(context){
  context.fillStyle='red';
  for (var i = 0; i<GAME.shots.length;i++)
  {
    context.fillRect(GAME.shots[i].x,GAME.shots[i].y,20,20);
  }
}
