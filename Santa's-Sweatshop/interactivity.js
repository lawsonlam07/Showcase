const page = document.documentElement

function fullscreen() {
    if (page.requestFullscreen) {
        page.requestFullscreen()
    } else if (page.mozRequestFullscreen) {
        page.mozRequestFullscreen()
    } else if (page.webkitRequestFullscreen) {
        page.webkitRequestFullscreen()
    } else if (page.msRequestFullscreen) {
        page.msRequestFullscreen()
    }
}

function displayImage(e) {
    let imageScreen = document.getElementById("image-display")
    let image = document.getElementById("displayed-image")
    console.log(e.target.src)
    imageScreen.style.display = "block"
    image.src = e.target.src
}

function disableImage() {
    document.getElementById("image-display").style.display = "none"
}

document.addEventListener("fullscreenchange", () => {
  let isFullscreen = document.fullscreenElement !== null
  page.style.overflow = isFullscreen ? "hidden" : "visible"
  document.querySelector("#game").style.display = isFullscreen ? "block" : "none"
});