const page = document.documentElement;
let imageView = false;
let imageNum = 0;

function fullscreen() {
  if (page.requestFullscreen) {
    page.requestFullscreen();
  } else if (page.mozRequestFullscreen) {
    page.mozRequestFullscreen();
  } else if (page.webkitRequestFullscreen) {
    page.webkitRequestFullscreen();
  } else if (page.msRequestFullscreen) {
    page.msRequestFullscreen();
  }
}

function setupImage(e) {
  imageView = true;
  imageNum = e.target.dataset.num;
  displayImage();
}

function prevImage() {
  imageNum--;
  imageNum = imageNum >= 0 ? imageNum : 4;
  displayImage();
}

function nextImage() {
  imageNum++;
  imageNum = imageNum <= 4 ? imageNum : 0;
  displayImage();
}

function displayImage() {
  let imageScreen = document.getElementById("image-display");
  let image = document.getElementById("displayed-image");
  imageScreen.style.display = "flex";
  image.src = `Game/Promo/screenie${imageNum}.webp`;
}

function disableImage() {
  imageView = false;
  document.getElementById("image-display").style.display = "none";
}

document.addEventListener("keydown", function (e) {
  if (imageView) {
    switch (e.key) {
      case "ArrowLeft":
        prevImage();
        break;
      case "ArrowRight":
        nextImage();
        break;
      case "Escape":
        disableImage();
        break;
    }
  }
});

document.addEventListener("fullscreenchange", () => {
  let isFullscreen = document.fullscreenElement !== null;
  page.style.overflow = isFullscreen ? "hidden" : "visible";
  document.querySelector("#game").style.display = isFullscreen ? "block" : "none";
});