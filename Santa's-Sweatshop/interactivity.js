function fullscreen() {
    const elem = document.documentElement
    if (elem.requestFullscreen) {
        elem.requestFullscreen()
    } else if (elem.mozRequestFullscreen) {
        elem.mozRequestFullscreen()
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen()
    }
}

document.addEventListener("fullscreenchange", () => {
  let isFullscreen = document.fullscreenElement !== null;
  document.querySelector("#game").style.display = isFullscreen ? "block" : "none";
});