var bossSound
var bulletSound
var bulletPickupSound
var collisionSound1
var collisionSound2
var collisionSound3
var healthPickupSound
var lazerSound
var shieldPickupSound1
var shieldPickupSound2
var shieldPickupSound3
var backgroundMusic;

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
  bossSound = new sound("sounds/boss.wav");
  bulletSound = new sound("sounds/bullet.wav");
  bulletPickupSound = new sound("sounds/bulletPickup.wav");
  collisionSound1 = new sound("sounds/collision1.wav");
  collisionSound2 = new sound("sounds/collision2.wav");
  collisionSound3 = new sound("sounds/collision3.wav");
  healthPickupSound = new sound("sounds/healthpickup.wav");
  lazerSound = new sound("sounds/lazer.wav");
  shieldPickupSound1 = new sound("sounds/shieldPickup1.wav");
  shieldPickupSound2 = new sound("sounds/shieldPickup2.wav");
  shieldPickupSound3 = new sound("sounds/shieldPickup3.wav");

  backgroundMusic = new sound("sounds/space.wav");
}
