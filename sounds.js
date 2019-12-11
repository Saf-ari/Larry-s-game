function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

function initializeSounds(){
  var bossSound = new sound("sounds/boss.wav");
  var bulletSound = new sound("sounds/bullet.wav");
  var bulletPickupSound = new sound("sounds/bulletPickup.wav");
  var collisionSound1 = new sound("sounds/collision1.wav");
  var collisionSound2 = new sound("sounds/collision2.wav");
  var collisionSound3 = new sound("sounds/collision3.wav");
  var healthPickupSound = new sound("sounds/healthpickup.wav");
  var lazerSound = new sound("sounds/lazer.wav");
  var shieldPickupSound1 = new sound("sounds/shieldPickup1.wav");
  var shieldPickupSound2 = new sound("sounds/shieldPickup2.wav");
  var shieldPickupSound3 = new sound("sounds/shieldPickup3.wav");
  var backgroundMusic = new sound("sounds/space.wav");
}
