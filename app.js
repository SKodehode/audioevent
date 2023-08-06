const dogSound = new Audio("./assets/Audio/dog.mp3");
/* dogSound.src = "./assets/Audio/dog.mp3"; */ 

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
horseSound.src = "./assets/audio/horse.mp3"

document.addEventListener("keydown", function(e) {
    if (e.key == "e") {
        horseSound.play();
    }
  });

const cowSound = new Audio();
cowSound.src = "./assets/audio/cow.mp3"

document.addEventListener("keydown", function(e) {
    if (e.key == "r") {
        cowSound.play();
    }
  });

const duckSound = new Audio();
duckSound.src = "./assets/audio/duck.mp3"

document.addEventListener("keydown", function(e) {
    if (e.key == "a") {
        duckSound.play();
    }
  });

const birdSound = new Audio();
birdSound.src = "./assets/audio/birdsong.mp3"

document.addEventListener("keydown", function(e) {
    if (e.key == "s") {
        birdSound.play();
    }
  });

const elephantSound = new Audio();
elephantSound.src = "./assets/audio/elephant.mp3"

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
