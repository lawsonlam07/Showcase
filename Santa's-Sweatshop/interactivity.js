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

document.addEventListener("fullscreenchange", () => {
  let isFullscreen = document.fullscreenElement !== null
  page.style.overflow = isFullscreen ? "hidden" : "visible"
  document.querySelector("#game").style.display = isFullscreen ? "block" : "none"
});