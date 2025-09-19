const page = document.documentElement;
let imageView = false;
let imageNum = 0;

function fullscreen() {
    if (page.requestFullscreen) {
        page.requestFullscreen();
    } else if (page.webkitRequestFullscreen) {
        page.webkitRequestFullscreen();
    } else if (page.msRequestFullscreen) {
        page.msRequestFullscreen();
    }

    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock("landscape").catch((err) => {
            console.warn("Orientation lock failed (likely due to non-mobile device):", err)
        })
    } else {console.warn("Screen Orientation API not supported.")}
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
    document.getElementById("image-display").style.display = "block";
    document.getElementById("displayed-image").src = `Game/Promo/screenie${imageNum}.webp`;
}

function disableImage(e) {
    if (e === "keybind" || e.target.id === "image-display") {
        imageView = false;
        document.getElementById("image-display").style.display = "none";
    }
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
                disableImage("keybind");
                break;
        }
    }
});

document.addEventListener("fullscreenchange", () => {
    let isFullscreen = document.fullscreenElement !== null;
    page.style.overflow = isFullscreen ? "hidden" : "visible";
    document.getElementById("game").style.display = isFullscreen ? "block" : "none";
});