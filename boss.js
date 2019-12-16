<<<<<<< Updated upstream
var bossSprite = new Image();
bossSprite.src = "images/boss.png";
=======
function animateBoss() {
  if (BOSS.x < SPACE_SHIP.x) {
    BOSS.x += BOSS.speed;
  } else if (BOSS.x > SPACE_SHIP.x) {
    BOSS.x -= BOSS.speed;
  }
}
>>>>>>> Stashed changes
