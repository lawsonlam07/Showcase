const alphaUpper = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
const alphaLower = Array.from("abcdefghijklmnopqrstuvwxyz")
const nums = Array.from("0123456789")
const special = [".", ",", ";", ":", "\\", "/", "'", "!", "?", "#"]

let db = false

function randomise(text, len) {
    let str = ""
    for (i = 0; i < len; i++) {
        if (text[i] === " ") {
            str += " "
        } else if (alphaUpper.includes(text[i])) {
            str += alphaUpper[Math.floor(26*Math.random())]
        } else if (alphaLower.includes(text[i])) {
            str += alphaLower[Math.floor(26*Math.random())]
        } else if (nums.includes(text[i])) {
            str += nums[Math.floor(10*Math.random())]
        } else {
            str += special[Math.floor(10*Math.random())]
        }
    } return str
}

function glitchEffect(id, speed) {
    if (!db) {
        db = true
        let text = document.getElementById(id).innerHTML
        let len = text.length
        let iter = 0

        const interval = setInterval(() => {
             document.getElementById(id).innerText = text.slice(0, iter) + randomise(text.slice(iter, len), len-iter)
            iter += speed
            if (iter >= len+1) {
                document.getElementById(id).innerText = text
                db = false
                clearInterval(interval)
            }
        }, 50)
        }
}

setInterval (() => {
    let height1 = document.getElementById("p1").offsetHeight
    document.getElementById("portrait-div").style.height = height1 - 10 + "px"

    let height2 = document.getElementById("text-div").offsetHeight
    document.getElementById("github-div").style.height = height2 - 10 + "px"
    document.getElementById("github-div").style.width = height2 - 10 + "px"
    document.getElementById("open-div").style.height = height2 - 10 + "px"
    document.getElementById("open-div").style.width = height2 - 10 + "px"

    let width1 = document.getElementById("text-div").offsetWidth
    document.getElementById("text-div").style.left = window.innerWidth/2 - width1/2 - 17.5 + "px"
}, 1000)