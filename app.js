const dogSound = new Audio();
dogSound.src = "./assets/audio/dog.wav";

document.addEventListener("keydown", function(e) {
    if (e.key == "q") {
        dogSound.play();
    }
  });

const catSound = new Audio();
catSound.src = "./assets/audio/cat.mp3"

document.addEventListener("keydown", function(e) {
    if (e.key == "w") {
        catSound.play();
    }
  });

const horseSound = new Audio();
horseSound.src = "./assets/audio/horse.wav"

document.addEventListener("keydown", function(e) {
    if (e.key == "e") {
        horseSound.play();
    }
  });

const cowSound = new Audio();
cowSound.src = "./assets/audio/cow.wav"

document.addEventListener("keydown", function(e) {
    if (e.key == "r") {
        cowSound.play();
    }
  });

const duckSound = new Audio();
duckSound.src = "./assets/audio/duck.wav"

document.addEventListener("keydown", function(e) {
    if (e.key == "a") {
        duckSound.play();
    }
  });

const birdSound = new Audio();
birdSound.src = "./assets/audio/birdsong.wav"

document.addEventListener("keydown", function(e) {
    if (e.key == "s") {
        birdSound.play();
    }
  });

const elephantSound = new Audio();
elephantSound.src = "./assets/audio/elephant.wav"

document.addEventListener("keydown", function(e) {
    if (e.key == "d") {
        elephantSound.play();
    }
  });

const foxSound = new Audio();
foxSound.src = "./assets/audio/fox.mp3"

document.addEventListener("keydown", function(e) {
    if (e.key == "f") {
        foxSound.play();
    }
  });