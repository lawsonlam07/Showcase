let currentTime = new Date().getTime()
let trailArr = []
let presentArr = []
let debrisArr = []
let muted = false
let ldm = false
let mode = "main"
let menu = "main"
let pick
let dayNum
let campaignCharm
let campaignGamemode = false
let loadingElement

let slowMo = 0
let boost = 0
let combo = 0
let comboUI = [0]
let comboCounter = 0
let presentValue = 100
let presentList = []
let naughtyList = []
let niceList = []
let colours = ["red", "purple", "grey", "green", "blue"]
let colourTable = {
	"red": [237, 28, 36],
	"purple": [111, 49, 152],
	"grey": [180, 180, 180],
	"green": [168, 230, 29],
	"blue": [0, 183, 239]
}

let specialText = ""
let specialTimer = 0
let mouseText = ""
let mouseTimer = 0
let mouseColor = [0, 0, 0]
let timer = 0
let stopwatch = 0
let stopwatchArr = []
let lives = 0
let explosionTimer = 0

let zenBest = 0
let blitzBest = 9999
let timedBest = -1
let survivalBest = -1
let chaosBest = 0
let chaosPresents = 1

let charm = 0
let honour = 0
let presentId = 0
let veloArr = [0]
for (let i = 0; i < 1000; i++) {
	veloArr.push(veloArr[veloArr.length - 1] + 1.25 * veloArr.length + Math.floor(i / 3) * 0.25)
}

function preload() {
	snowflakes = {
		20: loadImage("Trail/pixil-frame-0.png"),
		19: loadImage("Trail/pixil-frame-0 (1).png"),
		18: loadImage("Trail/pixil-frame-0 (2).png"),
		17: loadImage("Trail/pixil-frame-0 (3).png"),
		16: loadImage("Trail/pixil-frame-0 (4).png"),
		15: loadImage("Trail/pixil-frame-0 (5).png"),
		14: loadImage("Trail/pixil-frame-0 (6).png"),
		13: loadImage("Trail/pixil-frame-0 (7).png"),
		12: loadImage("Trail/pixil-frame-0 (8).png"),
		11: loadImage("Trail/pixil-frame-0 (9).png"),
		10: loadImage("Trail/pixil-frame-0 (10).png"),
		9: loadImage("Trail/pixil-frame-0 (11).png"),
		8: loadImage("Trail/pixil-frame-0 (12).png"),
		7: loadImage("Trail/pixil-frame-0 (13).png"),
		6: loadImage("Trail/pixil-frame-0 (14).png"),
		5: loadImage("Trail/pixil-frame-0 (15).png"),
		4: loadImage("Trail/pixil-frame-0 (16).png"),
		3: loadImage("Trail/pixil-frame-0 (17).png"),
		2: loadImage("Trail/pixil-frame-0 (18).png"),
		1: loadImage("Trail/pixil-frame-0 (19).png")
	}
	presents = {
		"red1": loadImage("Presents/pixil-frame-0.png"),
		"red2": loadImage("Presents/pixil-frame-0 (1).png"),
		"purple1": loadImage("Presents/pixil-frame-0 (2).png"),
		"purple2": loadImage("Presents/pixil-frame-0 (3).png"),
		"green1": loadImage("Presents/pixil-frame-0 (4).png"),
		"green2": loadImage("Presents/pixil-frame-0 (5).png"),
		"blue1": loadImage("Presents/pixil-frame-0 (6).png"),
		"blue2": loadImage("Presents/pixil-frame-0 (7).png"),
		"grey1": loadImage("Presents/pixil-frame-0 (8).png"),
		"grey2": loadImage("Presents/pixil-frame-0 (9).png")
	}
	powerUps = {
		"slowMo": loadImage("PowerUps/iceCream.png"),
		"combo": loadImage("PowerUps/doughnut.png"),
		"duration": loadImage("PowerUps/clock.png"),
		"boost": loadImage("PowerUps/melon.png"),
		"bomb": loadImage("PowerUps/bomb.png")
	}
	buttons = {
		"back": loadImage("Buttons/back.png"),
		"again": loadImage("Buttons/again.png"),
		"menu": loadImage("Buttons/menu.png"),
		"logo": loadImage("Buttons/logo.png"),
		"background": loadImage("Buttons/background.png"),
		"story": loadImage("Buttons/story.png"),
		"minigames": loadImage("Buttons/minigames.png"),
		"zen": loadImage("Buttons/zen.png"),
		"blitz": loadImage("Buttons/blitz.png"),
		"minute": loadImage("Buttons/minute.png"),
		"survival": loadImage("Buttons/survival.png"),
		"chaos": loadImage("Buttons/chaos.png"),
		"list": loadImage("Buttons/list.png"),
		"ldm": loadImage("Buttons/ldm.png"),
		"hdm": loadImage("Buttons/hdm.png"),
		"unmute": loadImage("Buttons/unmute.png"),
		"mute": loadImage("Buttons/mute.png")
	}
	story = {
		"elf": loadImage("Story/elf.png"),
		"cut": loadImage("Story/cut.png"),
		"list": loadImage("Story/list.png"),
		"charm": loadImage("Story/charm.png"),
		"baphomelf": loadImage("Story/baphomelf.png"),
		"group": loadImage("Story/group.png"),
		"struck": loadImage("Story/struck.png"),
		"birmingham": loadImage("Story/birmingham.png"),
		"20": loadImage("Story/20.png"),
		"21": loadImage("Story/21.png"),
		"22": loadImage("Story/22.png"),
		"23": loadImage("Story/23.png"),
		"24": loadImage("Story/24.png"),
		"25": loadImage("Story/25.png"),
		"combo": loadImage("Story/combo.png"),
		"powerups": loadImage("Story/powerups.png"),
		"sad": loadImage("Story/sad.png")
	}
	sfx = {
		"rip": loadSound("SFX/rip.mp3"),
		"rip1": loadSound("SFX/rip1.mp3"),
		"rip2": loadSound("SFX/rip2.mp3"),
		"ice": loadSound("SFX/ice.mp3"),
		"break": loadSound("SFX/break.mp3"),
		"rage": loadSound("SFX/rage.mp3"),
		"time": loadSound("SFX/time.mp3"),
		"boom": loadSound("SFX/boom.mp3"),
		"squelch": loadSound("SFX/squelch.mp3"),
		"click": loadSound("SFX/click.mp3")
	}
	songs = {
		"xmas": loadSound("Songs/It's Christmas!.mp3")
	}
}

function setup() {
	trailArr.push(new Snowflake())
	textFont("Courier New")
	angleMode(DEGREES)
	rectMode(CENTER)
	imageMode(CENTER)
	textAlign(CENTER)

	presentList = Object.keys(presents)
	randomPresent(true)
	randomPresent(true)
	randomPresent(true)

	songs["xmas"].loop()
}

function safePlay(id) {
	if (Object.values(sfx).filter(v => v.isPlaying()).length === 0 && !muted) {
		sfx[id].play()
	}
}

function toggleMute() {
	muted = !muted
	if (muted) {songs["xmas"].pause()} else {songs["xmas"].play()}
}

function randint(lb, ub) {
	let range = ub - lb + 1
    return Math.floor(Math.random() * range) + lb
}

function choice(arr) {
	let index = Math.floor(Math.random() * arr.length)
	return arr[index]
}

function mouseHalfBounds(xLB, xUB, yLB, yUB) {
	let xBounds = windowWidth/2 + xLB <= mouseX && mouseX <= windowWidth/2 + xUB
	let yBounds = windowHeight/2 + yLB <= mouseY && mouseY <= windowHeight/2 + yUB
	return xBounds && yBounds
}

function mouseFullBounds(xLB, xUB, yLB, yUB) {
	let xBounds = windowWidth + xLB <= mouseX && mouseX <= windowWidth + xUB
	let yBounds = yLB <= mouseY && mouseY <= yUB
	return xBounds && yBounds
}

function slicingCollision(x, y) {
	let smallX = Math.min(mouseX, trailArr[trailArr.length - 1].x) - 50
	let bigX = Math.max(mouseX, trailArr[trailArr.length - 1].x) + 50

	if (smallX <= x  && x <= bigX) {
		let smallY = Math.min(mouseY, trailArr[trailArr.length - 1].y)
		let bigY = Math.max(mouseY, trailArr[trailArr.length - 1].y)
		let lerpedY = lerp(smallY, bigY, (bigX-x)/(bigX-smallX))
		
		if (lerpedY - 50 <= y && y <= lerpedY + 50) {
			return true;
		}
	}
	return false;
}

class Snowflake {
	constructor(x, y, velocityX, velocityY, rotSpeed, state) {
		this.x = mouseX
		this.y = mouseY
		this.velocityX = Math.random() * choice([1, -1])
		this.velocityY = Math.random() * 7.5
		this.rotSpeed = Math.random() * 5 * choice([1, -1])
		this.state = 20
		this.orientation = 0
	}

	draw() {
		image(snowflakes[this.state], this.x, this.y)
		if (!ldm) {
			this.x += this.velocityX
			this.y += this.velocityY
			this.velocityY += 0.25
			this.orientation += this.rotSpeed
			translate(this.x, this.y)
			rotate(this.orientation)
			translate(-this.x, -this.y)
		}
		this.state--
	}
}

class Present {
	constructor(x, y, velocityX, velocityY, rotSpeed, skin, cycle) {
		this.Id = presentId
		this.x = x
		this.y = y
		this.skin = skin
		this.orientation = 0
		this.alive = true
		this.velocityX = velocityX
		this.velocityY = velocityY
		this.rotSpeed = rotSpeed
		this.gravity = 0.75
		this.isPowerUp = Object.keys(powerUps).includes(skin)
		this.cycle = cycle
		presentId++
	}
	
	draw() {
		if (currentTime <= slowMo) {
			this.x -= this.velocityX / 2
			this.y += this.velocityY / 2
			this.velocityY += this.gravity / 2
			this.orientation += this.rotSpeed / 2
		} else {
			this.x -= this.velocityX
			this.y += this.velocityY
			this.velocityY += this.gravity
			this.orientation += this.rotSpeed
		}
		
		if (slicingCollision(this.x, this.y)) {
			charm += presentValue
			this.alive = false
			if (this.isPowerUp) {
				specialTimer = currentTime + 1500
				mouseTimer = currentTime + 1000
				switch (this.skin) {
					case "slowMo": startSlowMo(); break;
					case "combo": startCombo(); break;
					case "duration": addTime(); break;
					case "bomb": explosion(); break;
					case "boost": startBoost(); break;
				}
			} else {
				safePlay(choice(["rip", "rip1", "rip2"]))
				if (niceList.includes(this.skin.slice(0, -1)) && mode === "story") {
					honour -= 10
				}
			}
			
			if (!ldm && debrisArr.length < 100) {
				for (let i = 0; i < randint(5, 15); i++) {
					debrisArr.push(new Debris(this.x, this.y, this.skin))
				}
			} comboCheck()
		} else if (this.y >= windowHeight + 50) {
			this.alive = false
			if (mode === "story") {
				if (niceList.includes(this.skin.slice(0, -1))) {
					honour += 10
				} else {
					honour--
				}
			}
		}
		
		if (this.alive) {
			if (!ldm) {
				translate(this.x, this.y)
				rotate(this.orientation)
				translate(-this.x, -this.y)
			}
			if (this.isPowerUp) {
				image(powerUps[this.skin], this.x, this.y)
			} else {
				image(presents[this.skin], this.x, this.y)
			}
		} else {
			presentArr = presentArr.filter(v => v.Id !== this.Id)
			if (this.cycle) {randomPresent(this.cycle)}
		}
	}
}

class Debris {
	constructor(x, y, skin) {
		this.x = x + randint(-50, 50)
		this.y = y + randint(-50, 50)
		this.size = randint(5, 10)
		this.gravity = randint(50, 100) / 100
		this.velocityX = randint(-10, 10)
		this.velocityY = randint(-10, 0)
		this.orientation = randint(0, 359)
		this.rotSpeed = randint(-10, 10)
		this.opacity = 255
		this.fadeSpeed = randint(5, 8)
		switch (skin) {
			case "red1":
			case "red2":
				this.colour = colourTable["red"].map(v => v + randint(-10, 10))
				break
			case "purple1":
			case "purple2":
				this.colour = colourTable["purple"].map(v => v + randint(-10, 10))
				break
			case "grey1":
			case "grey2":
				this.colour = colourTable["grey"].map(v => v + randint(-10, 10))
				break
			case "green1":
			case "green2":
				this.colour = colourTable["green"].map(v => v + randint(-10, 10))
				break
			case "blue1":
			case "blue2":
				this.colour = colourTable["blue"].map(v => v + randint(-10, 10))
				break
			case "slowMo":
				pick = choice([[78, 52, 46], [239, 154, 154], [171, 139, 99]])
				this.colour = pick.map(v => v + randint(-10, 10))
				break
			case "combo":
				pick = choice([[179, 112, 57], [62, 39, 35]])
				this.colour = pick.map(v => v + randint(-10, 10))
				break
			case "duration":
				pick = choice([[207, 216, 220], [38, 50, 56]])
				this.colour = pick.map(v => v + randint(-10, 10))
				break
			case "bomb":
				pick = choice([[228, 8, 10], [254, 153, 0], [255, 222, 89]])
				this.colour = pick.map(v => v + randint(-10, 10))
				break
			case "boost":
				this.colour = [130, 119, 23].map(v => v + randint(-10, 10))
				break
			default:
				this.colour = [0, 0, 0]
				break
		}
	}

	draw() {
		if (currentTime <= slowMo) {
			this.x -= this.velocityX / 2
			this.y += this.velocityY / 2
			this.velocityY += this.gravity / 2
			this.orientation += this.rotSpeed / 2
			this.opacity = max(0, this.opacity - (this.fadeSpeed / 2))
		} else {
			this.x -= this.velocityX
			this.y += this.velocityY
			this.velocityY += this.gravity
			this.orientation += this.rotSpeed
			this.opacity = max(0, this.opacity - this.fadeSpeed)
		}

		translate(this.x, this.y)
		rotate(this.orientation)
		translate(-this.x, -this.y)
		stroke(0, 0)
		fill(...this.colour, this.opacity)
		square(this.x, this.y, this.size)
	}
}

function initiateMenu() {
	safePlay("click")
	mode = "main"
	menu = "main"
	campaignGamemode = false
	presentArr = []
	presentList = [...Object.keys(presents)]
	charm = 0
	comboCounter = 0
	slowMo = 0
	boost = 0
	combo = 0
	presentValue = 100
	randomPresent(true)
	randomPresent(true)
	randomPresent(true)
}

function mainMenu() {
	image(buttons["logo"], windowWidth/2, windowHeight/2 - 93.5)
	image(buttons["story"], windowWidth/2, windowHeight/2 + 39)
	image(buttons["minigames"], windowWidth/2, windowHeight/2 + 144)
	if (loadingElement) {image(buttons["back"], windowWidth - 75, 35)}
	image(buttons[ldm ? "ldm" : "hdm"], 60, windowHeight-60)
	image(buttons[muted ? "mute" : "unmute"], windowWidth-60, windowHeight-60)
	handlePresents()
	comboHandler()
	handleMouseText()
}

function initiateModes() {
	safePlay("click")
	mode = "modes"
	menu = "modes"
	presentArr = []
	presentList = [...Object.keys(presents)]
	charm = 0
	comboCounter = 0
	slowMo = 0
	boost = 0
	combo = 0
	presentValue = 100
	randomPresent(true)
	randomPresent(true)
	randomPresent(true)
}

function modesMenu() {
	image(buttons["back"], windowWidth - 75, 35)
	image(buttons["zen"], windowWidth/2, windowHeight/2 - 170)
	image(buttons["blitz"], windowWidth/2, windowHeight/2 - 85)
	image(buttons["minute"], windowWidth/2, windowHeight/2)
	image(buttons["survival"], windowWidth/2, windowHeight/2 + 85)
	image(buttons["chaos"], windowWidth/2, windowHeight/2 + 170)
	image(buttons[ldm ? "ldm" : "hdm"], 60, windowHeight-60)
	image(buttons[muted ? "mute" : "unmute"], windowWidth-60, windowHeight-60)
	handlePresents()
	comboHandler()
	handleMouseText()
	push()
	textAlign(LEFT)
	rectMode(CORNER)
	fill(185, 229, 237)
	if (mouseHalfBounds(-200, 200, -200, -140)) {
		rect(mouseX, mouseY, 200, 100, 10)
		rect(mouseX, mouseY - 25, 200, 25, 10)
		textSize(17)
		let txt = "Zen; A stress-free gamemode with no bombs or time constraints."
		stroke("navy")
		fill("black")
		text(txt, mouseX + 7, mouseY + 7, 200, 100)
		text(`Charm: ${zenBest}`, mouseX + 7, mouseY - 20, 200, 100)
	} else if (mouseHalfBounds(-200, 200, -115, -55)) {
		rect(mouseX, mouseY, 200, 100, 10)
		rect(mouseX, mouseY - 25, 200, 25, 10)
		textSize(16)
		let txt = "Blitz; A sprint to gain 25,000 charm in the fastest time possible."
		stroke("navy")
		fill("black")
		text(txt, mouseX + 7, mouseY + 10, 200, 100)
		if (blitzBest === 9999) {
			text(`PB: N/A`, mouseX + 7, mouseY - 20, 200, 100)
		} else {
			text(`PB: ${blitzBest} Seconds`, mouseX + 7, mouseY - 20, 200, 100)
		}
	} else if (mouseHalfBounds(-200, 200, -30, 30)) {
		rect(mouseX, mouseY, 200, 100, 10)
		rect(mouseX, mouseY - 25, 200, 25, 10)
		textSize(15.5)
		let txt = "Minute Hell:        One minute.      Maximum score.    What could go wrong?"
		stroke("navy")
		fill("black")
		text(txt, mouseX + 7, mouseY + 12, 200, 100)
		if (timedBest === -1) {
			text(`PB: N/A`, mouseX + 7, mouseY - 20, 200, 100)
		} else {
			text(`PB: ${timedBest} Charm`, mouseX + 7, mouseY - 20, 200, 100)
		}
	} else if (mouseHalfBounds(-200, 200, 55, 115)) {
		rect(mouseX, mouseY, 200, 100, 10)
		rect(mouseX, mouseY - 25, 200, 25, 10)
		textSize(16)
		let txt = "Survival; Bombs kill and spawn more frequently. Try not to die!"
		stroke("navy")
		fill("black")
		text(txt, mouseX + 7, mouseY + 12, 200, 100)
		if (survivalBest === -1) {
			text(`PB: N/A`, mouseX + 7, mouseY - 20, 200, 100)
		} else {
			text(`PB: ${survivalBest} Charm`, mouseX + 7, mouseY - 20, 200, 100)
		}
	} else if (mouseHalfBounds(-200, 200, 140, 200)) {
		rect(mouseX, mouseY, 200, 100, 10)
		rect(mouseX, mouseY - 25, 200, 25, 10)
		textSize(15)
		let txt = "Chaos; It's a slippery slope to hell... Embrace Chaos! LDM endorsed."
		stroke("navy")
		fill("black")
		text(txt, mouseX + 7, mouseY + 12, 200, 100)
		text(`Charm: ${chaosBest}`, mouseX + 7, mouseY - 20, 200, 100)
	}
	pop()
}

function slideShow(txt, img) {
	push()
	fill(0)
	strokeWeight(5)
	stroke(0)
	rect(windowWidth/2, windowHeight/2, windowWidth*2, windowHeight*2)
	image(story[img], windowWidth/2, windowHeight/2, 128 * windowHeight/128, windowHeight)
	fill(255)
	text(txt, windowWidth/2, windowHeight - 150, windowWidth*0.75)
	pop()
}

function generateLists(naughtyNum) {
    let remaining = [...colours]
    naughtyList = []
    for (i = 0; i < naughtyNum; i++) {
        let pick = choice(remaining)
        naughtyList.push(pick)
        remaining = remaining.filter(v => v !== pick)
    } niceList = colours.filter(v => !naughtyList.includes(v))
}

function handleList() {
	push()
	imageMode(CORNER)
	rectMode(CORNER)
	strokeWeight(3)
	stroke(59)
	image(buttons["list"], windowWidth - 250, 0)
	for (let i = 0; i < naughtyList.length; i++) {
		fill(...colourTable[naughtyList[i]])
		rect(windowWidth - 210, i*60 + 75, 50, 50)
	}
	for (let i = 0; i < niceList.length; i++) {
		fill(...colourTable[niceList[i]])
		rect(windowWidth - 90, i*60 + 75, 50, 50)
	}
	pop()
}

function judgement() {
	if (honour >= 0) {
		let txt = `You finished the day with ${campaignCharm} total charm. Santa has deemed your performance to be adequate.`
		slideShow(txt, "charm")
	} else {
		let txt = `You finished the day with ${campaignCharm} total charm. Santa disapproves of your actions.`
		slideShow(txt, "charm")
	} 
}

function initiateStory() {
	safePlay("click")
	mode = "story"
	menu = "story"
	presentArr = []
	presentList = [...Object.keys(presents)]
	charm = 0
	campaignCharm = 0
	comboCounter = 0
	lives = 3
	honour = 0
	slowMo = 0
	boost = 0
	combo = 0
	dayNum = 0 // remember to reset this to 0 when done testing
	presentValue = 100
	startStory = currentTime
	timer = startStory + 73000
}

function nextDay() {
	campaignCharm += charm
	startStory = currentTime
	charm = 0
	dayNum++
}

const campaign = [
	() => { // day 0
		if (currentTime <= startStory + 4000) {
			let txt = "You are an elf, and have recently been promoted to the head of sorting!"
			slideShow(txt, "elf")
		} else if (currentTime <= startStory + 8000) {
			let txt = "Your job is to make sure that the naughty children do not recieve presents."
			slideShow(txt, "cut")
		} else if (currentTime <= startStory + 15000) {
			let txt = "Conveniently, naughty presents are sorted by colour. (List will be on top-right of screen & pattern does not matter.) Note that following this is optional, but determines your ending."
			slideShow(txt, "list")
		} else if (currentTime <= startStory + 22000) {
			let txt = "All presents also contain a certain amount of 'charm', which contain magical powers, and are said to make an elf stronger and more cherubic. The level of charm you have also determines your ending."
			slideShow(txt, "charm")
		} else if (currentTime <= startStory + 26000) {
			let txt = "Baphomelf, your predecessor and the most charming elf of all, was power hungry, and acquired all the charm he could. He very nearly destroyed Christmas."
			slideShow(txt, "baphomelf")
		} else if (currentTime <= startStory + 30000) {
			let txt = "He amassed a group of like-minded elves, who were tired of working in the freezing cold, and orchestrated a rebellion against Santa."
			slideShow(txt, "group")
		} else if (currentTime <= startStory + 33000) {
			let txt = "Baphomelf and his allies eventually lost the war, and were struck down by Santa."
			slideShow(txt, "struck")
		} else if (currentTime <= startStory + 37000) {
			let txt = "For the crime of rebellion, they suffered a fate worse than death... They were exiled to Birmingham for eternity."
			slideShow(txt, "birmingham")
		} else if (currentTime <= startStory + 43000) {
			let txt = "Anyways, it's the first day of your job. Just cut the 'naughty' gifts. Leave the 'nice' gifts. 5 Days until Christmas. Good Luck."
			slideShow(txt, "20")
			generateLists(4)
		} else {
			if (currentTime <= startStory + 73000) {
				if (!Math.floor(Math.random() * 100)) {randomPresent(false)}
				handleList()
				handleTimer()
				handlePresents()
				handleMouseText()
			} else {nextDay()}
		}
	},

	() => { // day 1
		if (currentTime <= startStory + 4000) {
			judgement()
		} else if (currentTime <= startStory + 12000) {
			let txt = "Today, we will be introducing some powerups, which affect how the game is played. The ice cream slows down the game, and the melon increases the amount of charm you get per present."
			slideShow(txt, "powerups")
		} else if (currentTime <= startStory + 16000) {
			let txt = "And thus, begins your second day on the job. 4 Days until Christmas."
			slideShow(txt, "21")
			timer = startStory + 46000
			presentList = [...Object.keys(presents), "slowMo", "boost"]
			presentArr = []
			randomPresent(true)
			generateLists(3)
		} else {
			if (currentTime <= startStory + 46000) {
				if (!Math.floor(Math.random() * 100)) {randomPresent(false)}
				handleList()
				handleTimer()
				handlePowerUps()
				handlePresents()
				handleMouseText()
			}  else {nextDay()}
		}
	},

	() => { // day 2
		if (currentTime <= startStory + 4000) {
			judgement()
		} else if (currentTime <= startStory + 14000) {
			let txt = "This time, you'll learn about combos. Combos reward points based on how long they are. You start a combo by slashing presents in quick succession. The doughnut also offers a combo boost."		
			slideShow(txt, "combo")
		} else if (currentTime <= startStory + 22000) {
			let txt = "Day 3; this time, the day ends after you get 10,000 charm. Note that you only get alerted to a combo after it is broken."
			slideShow(txt, "22")
			campaignGamemode = "score"
			presentArr = []
			randomPresent(true)
			presentList = [...Object.keys(presents), "slowMo", "boost", "combo"]
			generateLists(3)
		} else {
			if (charm < 10000) {
				if (!Math.floor(Math.random() * 100)) {randomPresent(false)}
				handleList()
				handlePowerUps()
				handlePresents()
				comboHandler()
				handleMouseText()
			} else {nextDay()}
		}
	},

	() => { // day 3
		if (currentTime <= startStory + 4000) {
			judgement()
		} else if (currentTime <= startStory + 8000) {
			let txt = "Now, to introduce bombs. Avoid these at all costs. (Don't ask why there are bombs, it is a sweatshop after all.)"
			push()
			fill(0)
			strokeWeight(5)
			stroke(0)
			rect(windowWidth/2, windowHeight/2, windowWidth*2, windowHeight*2)
			image(powerUps["bomb"], windowWidth/2, windowHeight/2, 51 * windowHeight/51, windowHeight)
			fill(255)
			text(txt, windowWidth/2, windowHeight - 150, windowWidth*0.75)
			pop()
		} else if (currentTime <= startStory + 12000) {
			let txt = "Day 4 - this day ends when you die..."
			slideShow(txt, "23")
			presentList = [...Object.keys(presents), "slowMo", "combo", "boost", "bomb", "bomb", "bomb"]
			generateLists(2)
			campaignGamemode = "survival"
		} else {
			if (lives > 0) {
				if (!Math.floor(Math.random() * 100)) {randomPresent(false)}
				handleLives()
				handleList()
				handlePowerUps()
				handlePresents()
				comboHandler()
				handleMouseText()
			} else {nextDay()}
		}
	},

	() => { // day 4
		if (currentTime <= startStory + 4000) {
			judgement()
		} else if (currentTime <= startStory + 8000) {
			let txt = "Nothing new to introduce here. Get to 15,000 score. The last day until Christmas."
			slideShow(txt, "24")
			campaignGamemode = "score1"
			presentArr = []
			randomPresent(true)
			randomPresent(true)
			presentList = [...Object.keys(presents), "slowMo", "boost", "combo"]
			generateLists(3)
		} else {
			if (charm < 15000) {
				if (!Math.floor(Math.random() * 100)) {randomPresent(false)}
				handleList()
				handlePowerUps()
				handlePresents()
				comboHandler()
				handleMouseText()
			} else {nextDay()}
		}
	},

	() => { // day 5
		if (currentTime <= startStory + 4000) {
			judgement()
		} else if (currentTime <= startStory + 8000) {
			let txt = "Introducing the stopwatch! In a timed gamemode such as this, it can grant you an few extra seconds..."
			push()
			fill(0)
			strokeWeight(5)
			stroke(0)
			rect(windowWidth/2, windowHeight/2, windowWidth*2, windowHeight*2)
			image(powerUps["duration"], windowWidth/2, windowHeight/2, 51 * windowHeight/51, windowHeight)
			fill(255)
			text(txt, windowWidth/2, windowHeight - 150, windowWidth*0.75)
			pop()		
		} else if (currentTime <= startStory + 12000) {
			let txt = "There has been a sudden influx of naughty gifts on Christmas. You know what to do."
			slideShow(txt, "cut")
		} else if (currentTime <= startStory + 16000) {
			let txt = "It's Christmas. Final Day."
			slideShow(txt, "25")
			presentList = [...Object.keys(presents), "slowMo", "combo", "boost", "duration", "bomb", "bomb"]
			generateLists(5)
			campaignGamemode = "timed"
			timer = currentTime + 60000
		} else {
			if (currentTime <= timer) {
				if (!Math.floor(Math.random() * 100)) {randomPresent(false)}
				handleTimer()
				handleList()
				handlePowerUps()
				handlePresents()
				comboHandler()
				handleMouseText()
			} else {nextDay()}
		}
	},

	() => { // day 6
		if (currentTime <= startStory + 7500) {
			if (honour >= 0) {
				if (campaignCharm >= 35000) {
					let txt = `You finished the game with ${campaignCharm} total charm. You continued being a subservient elf until your death. [Ending 1/4]`
					slideShow(txt, "elf")
				} else {
					let txt = `You finished the game with ${campaignCharm} total charm. You were ridiculed due to your low charm by other elves. [Ending 2/4]`
					slideShow(txt, "sad")
				}
			} else {
				if (campaignCharm >= 75000) {
					let txt = `You finished the game with ${campaignCharm} total charm. You overthrew Santa. [Ending 3/4]`
					slideShow(txt, "baphomelf")
				} else {
					let txt = `You finished the game with ${campaignCharm} total charm. You tried to stage a rebellion, but failed. You were sentenced to BIRMINGHAM. [Ending 4/4]`
					slideShow(txt, "birmingham")
				}
			} 
		} else {
			menu = "gOver"
			handleGOverUI(`Charm: ${campaignCharm}`, "pink")
		}
	}
]

function campaignMode() {
	campaign[dayNum]()
	image(buttons["back"], 75, windowHeight - 35)
}

function resetTimed() {
	safePlay("click")
	mode = "timed"
	menu = "game"
	presentArr = []
	presentList = [...Object.keys(presents), ...Object.keys(powerUps)]
	timer = new Date().getTime() + 60000
	charm = 0
	comboCounter = 0
	slowMo = 0
	boost = 0
	combo = 0
	presentValue = 100
	randomPresent(true)
}

function handleTimer() {
	push()
	textSize(50)
	strokeWeight(3)
	stroke(((timer - currentTime)/1000 >= 6) && "grey" || "red")
	text(Math.floor((timer - currentTime)/1000), windowWidth/2, 100)
	pop()
}

function timedMode() {
	if (currentTime <= timer) {
		if (!Math.floor(Math.random() * 100)) {randomPresent(false)}
		image(buttons["back"], windowWidth - 75, 35)
		handleTimer()
		handlePowerUps()
		handlePresents()
		comboHandler()
		handleMouseText()
	} else {
		menu = "gOver"
		timedBest = Math.max(timedBest, charm)
		handleGOverUI(`Charm: ${charm}`, "pink")
	}
}

function addTime() {
	if (mode === "timed" || campaignGamemode === "timed") {
		specialText = "=> More Time: +3 seconds"
		mouseText = "+3 Seconds"
		timer += 3000
	} else if (mode === "score") {
		specialText = "=> Save Time: -3 seconds"
		mouseText = "-3 Seconds"
		stopwatch += 3000
	}

	mouseColor = [200, 200, 200]
	safePlay("time")
}

function resetScore() {
	safePlay("click")
	presentList = [...Object.keys(presents), ...Object.keys(powerUps)]
	stopwatch = new Date().getTime()
	mode = "score"
	menu = "game"
	presentArr = []
	stopwatchArr = []
	charm = 0
	comboCounter = 0
	slowMo = 0
	boost = 0
	combo = 0
	presentValue = 100
	randomPresent(true)
}

function handleStopwatch() {
	push()
	textSize(50)
	strokeWeight(3)
	stroke("grey")
	text(Math.floor((currentTime - stopwatch)/1000), windowWidth/2, 100)
	pop()
}

function scoreMode() {
	if (charm < 25000) {
		if (!Math.floor(Math.random() * 100)) {randomPresent(false)}
		image(buttons["back"], windowWidth - 75, 35)
		handleStopwatch()
		handlePowerUps()
		handlePresents()
		comboHandler()
		handleMouseText()
	} else {
		menu = "gOver"
		stopwatchArr.push(Math.floor((currentTime - stopwatch)/1000))
		handleGOverUI(`Time: ${stopwatchArr[0]}`, "grey")
		blitzBest = Math.min(stopwatchArr[0], blitzBest)
	}
}

function resetSurvival() {
	safePlay("click")
	presentList = [...Object.keys(presents), "slowMo", "combo", "boost", "bomb", "bomb", "bomb"]
	lives = 3
	mode = "survival"
	menu = "game"
	presentArr = []
	stopwatchArr = []
	charm = 0
	comboCounter = 0
	slowMo = 0
	boost = 0
	combo = 0
	presentValue = 100
	randomPresent(true)
}

function handleLives() {
	push()
	textSize(50)
	strokeWeight(3)
	stroke("red")
	text(`Lives: ${lives}`, windowWidth/2, 100)
	pop()
}

function survivalMode() {
	if (lives > 0) {
		if (!Math.floor(Math.random() * 100)) {randomPresent(false)}
		image(buttons["back"], windowWidth - 75, 35)
		handleLives()
		handlePowerUps()
		handlePresents()
		comboHandler()
		handleMouseText()
	} else {
		menu = "gOver"
		handleGOverUI(`Charm: ${charm}`, "pink")
		survivalBest = Math.max(survivalBest, charm)
	}
}

function resetZen() {
	safePlay("click")
	presentList = [...Object.keys(presents), "slowMo", "combo", "boost"]
	mode = "zen"
	menu = "game"
	presentArr = []
	charm = zenBest
	comboCounter = 0
	slowMo = 0
	boost = 0
	combo = 0
	presentValue = 100
	randomPresent(true)
}

function zenMode() {
	if (!Math.floor(Math.random() * 100)) {randomPresent(false)}
	image(buttons["back"], windowWidth - 75, 35)
	handlePowerUps()
	handlePresents()
	comboHandler()
	handleMouseText()
	zenBest = charm
}

function resetChaos() {
	safePlay("click")
	presentList = [...Object.keys(presents), "slowMo", "combo", "boost", "bomb"]
	mode = "chaos"
	menu = "game"
	presentArr = []
	charm = chaosBest
	comboCounter = 0
	slowMo = 0
	boost = 0
	combo = 0
	presentValue = 100
	for (i = 0; i < chaosPresents; i++) {
		randomPresent(true)
	}
}

function chaosMode() {
	if (!Math.floor(Math.random() * 100)) {randomPresent(true); chaosPresents++}
	image(buttons["back"], windowWidth - 75, 35)
	handlePowerUps()
	handlePresents()
	comboHandler()
	handleMouseText()
	chaosBest = charm
}

function comboHandler() {
	if (currentTime <= comboUI[0]) {
		let comboText = ""
		let comboColor = []
		if (comboUI[1] >= 50) {
			comboText = ": IMPOSSIBLE COMBO!!!!!"
			comboColor = [255, 0, 0]
		} else if (comboUI[1] >= 25) {
			comboText = ": LEGENDARY COMBO!!!"
			comboColor = [168, 66, 50]
		} else if (comboUI[1] >= 10) {
			comboText = ": Insane Combo!"
			comboColor = [255, 77, 0]
		} else if (comboUI[1] >= 5) {
			comboText = ": Nice Combo!"
			comboColor = [245, 126, 7]
		} else {
			comboText = ": Combo!"
			comboColor = [245, 173, 5]
		}
		if (comboUI[1] >= 3) {
			mouseTimer = currentTime + 1000
			mouseText = comboUI[1] + comboText
			mouseColor = [...comboColor]
		}
	}
}

function comboCheck() {
	if (currentTime <= combo) {
		comboCounter++
		combo = Math.max(currentTime + 500, combo)
	} else {
		if (comboCounter >= 3) {
			safePlay("break")
			charm += comboCounter * 100
			specialText = `=> Combo: +${comboCounter*100} Charm`
			specialTimer = currentTime + 1500
		}
		comboUI = [currentTime + 1500, comboCounter]
		combo = currentTime + 500
		comboCounter = 1
	}
}

function startCombo() {
	specialText = "=> Combo Doughnut: +5 Combo"
	mouseText = "+5 Combo"
	mouseColor = [245, 161, 66]
	comboCounter += 5
	safePlay("rage")
	combo = currentTime + 5000
}

function startSlowMo() {
	specialText = "=> Slow Motion: 50% Speed"
	mouseText = "50% Speed"
	mouseColor = [66, 135, 245]
	safePlay("ice")
	slowMo = currentTime + 5000
}

function explosion() {
	if (mode === "survival" || campaignGamemode === "survival") {
		lives--
		specialText = "=> Bomb Exploded: -1 Life"
		mouseText = "-1 Life"
	} else {
		charm -= 2500
		specialText = "=> Bomb Exploded: -2500 Charm"
		mouseText = "-2500 Charm"
	}
	mouseColor = [255, 0, 0]
	explosionTimer = currentTime + 750
	safePlay("boom")
}

function screenShake() {
	if (currentTime <= explosionTimer) {
		translate(Math.random() * 5 * choice([-1, 1]), Math.random() * 5 * choice([-1, 1]))
	}
}

function startBoost() {
	specialText = "=> Gained Melon: 2.5x Charm per Present"
	mouseText = "2.5x Charm"
	mouseColor = [133, 109, 16]
	safePlay("squelch")
	presentValue = 250
	boost = currentTime + 5000
}

function randomPresent(cycle) {
	let xPos = Math.floor(Math.random() * windowWidth)
	let yPos = windowHeight + 25
	let xVelo = Math.floor(Math.random() * 10) * (xPos < windowWidth/2 && -1 || 1)
	let yVelo = -veloArr.indexOf(choice(veloArr.filter(v => v < windowHeight && v > windowHeight*0.6)))
	let rot = Math.floor(Math.random() * 10) * choice([1, -1])
	let skin = choice(presentList) 
	presentArr.push(new Present(xPos, yPos, xVelo, yVelo, rot, skin, cycle))
}

function handlePresents() {
	for (let present of presentArr) {
		push()
		present.draw()
		pop()
	}
	if (!ldm) {
		debrisArr = debrisArr.filter(v => v.opacity !== 0)
		for (let debris of debrisArr) {
			push()
			debris.draw()
			pop()
		}
	} else {debrisArr = []}
}

function trail(x, y, size) {
	trailArr.push(new Snowflake())
	for (let trail of trailArr) {
		push()
		trail.draw()
		pop()
	}
	trailArr = trailArr.filter(v => v.state !== 0)
}

function drawPowerUpBar(x, y, col1, col2, t, name) {
	push()
	rectMode(CORNER)
	fill(...col1)
	square(x, y, 60, 10)
	rect(x + 60, y + 15, 155, 30, 0, 5, 5, 0)
	fill(...col2)
	rect(x + 60, y + 20, 150 * Math.max(t-currentTime, 0)/5000, 20)
	image(powerUps[name], x + 30, y + 30)
	pop()
}

function handlePowerUps() {
	if (boost <= currentTime) {presentValue = 100}
	if (currentTime <= slowMo) {
		push()
		fill(3, 252, 248, 50)
		rect(windowWidth/2, windowHeight/2, windowWidth * 2, windowHeight * 2)
		pop()
	}
	drawPowerUpBar(25, 55, [3, 252, 248], [66, 135, 245], slowMo, "slowMo")
	drawPowerUpBar(25, 125, [152, 219, 44], [17, 143, 44], boost, "boost")
	drawPowerUpBar(25, 195, [217, 146, 85], [247, 116, 2], combo, "combo")

}

function handleMouseText() {
	if (specialTimer <= currentTime) {specialText = ""}
	push()
	textAlign(LEFT)
	stroke("pink")
	if (!["main", "modes"].includes(mode)) {
		if (mode === "score") {
			text(`Charm: ${charm}/25000 ${specialText}`, 25, 35)
		} else if (campaignGamemode === "score") {
			text(`Charm: ${charm}/10000 ${specialText}`, 25, 35)		
		} else if (campaignGamemode === "score1") {	
			text(`Charm: ${charm}/15000 ${specialText}`, 25, 35)		
		} else {
			text(`Charm: ${charm} ${specialText}`, 25, 35)
		}
	}
	pop()
	if (currentTime <= mouseTimer) {
		push()
		stroke(...mouseColor)
		text(mouseText, mouseX, mouseY)
		pop()
	}
}

function handleGOverUI(txt, col) {
	push()
	textSize(50)
	strokeWeight(3)
	stroke(col)
	text(txt, windowWidth/2, windowHeight/2 - 75)
	pop()
	image(buttons["again"], windowWidth/2, windowHeight/2)
	image(buttons["menu"], windowWidth/2, windowHeight/2 + 75)
}

function quitGame() {
	if (loadingElement) {
		let page = window.parent.document
		if (page.exitFullscreen) {
			page.exitFullscreen();
		} else if (page.webkitExitFullscreen) {
			page.webkitExitFullscreen();
		} else if (page.msExitFullscreen) {
			page.msExitFullscreen();
		}
	}
}

function keyPressed() {
	if (key === "l") {ldm = !ldm}
	else if (key === "m") {toggleMute()}
	else if (keyCode === ESCAPE && menu === "game") {initiateModes()}
	else if (keyCode === ESCAPE && menu === "modes") {initiateMenu()}
}

function mousePressed() {
	switch (menu) {
		case "main":
			if (mouseHalfBounds(-200, 200, -11, 89)) {initiateStory()}
			else if (mouseHalfBounds(-200, 200, 114, 174)) {initiateModes()}
			else if (mouseFullBounds(-140, -10, 10, 60)) {quitGame()}
			else if (mouseFullBounds(10-windowWidth, 110-windowWidth, windowHeight-110, windowHeight-10)) {ldm = !ldm; safePlay("click")}
			else if (mouseFullBounds(-110, -10, windowHeight-110, windowHeight-10)) {toggleMute(); safePlay("click")}
			break;
		case "story":
			if (mouseFullBounds(10-windowWidth, 140-windowWidth, windowHeight-60, windowHeight-10)) {initiateMenu()}
			break;
		case "modes":
			if (mouseFullBounds(-140, -10, 10, 60)) {initiateMenu()}
			else if (mouseHalfBounds(-200, 200, -200, -140)) {resetZen()}
			else if (mouseHalfBounds(-200, 200, -115, -55)) {resetScore()}
			else if (mouseHalfBounds(-200, 200, -30, 30)) {resetTimed()}
			else if (mouseHalfBounds(-200, 200, 55, 115)) {resetSurvival()}
			else if (mouseHalfBounds(-200, 200, 140, 200)) {resetChaos()}
			else if (mouseFullBounds(10-windowWidth, 110-windowWidth, windowHeight-110, windowHeight-10)) {ldm = !ldm; safePlay("click")}
			else if (mouseFullBounds(-110, -10, windowHeight-110, windowHeight-10)) {toggleMute(); safePlay("click")}
			break;
		case "game":
			if (mouseFullBounds(-140, -10, 10, 60)) {initiateModes()}
			break;
		case "gOver":
			if (mouseHalfBounds(-125, 125, -25, 25)) {
				switch (mode) {
					case "timed": resetTimed(); break;
					case "score": resetScore(); break;
					case "survival": resetSurvival(); break;
					default: initiateMenu(); break;
				}
			} else if (mouseHalfBounds(-125, 125, 50, 100)) {initiateMenu()}
			break;
	}
}

function draw() {
	loadingElement = window.parent.document.getElementById("loading")
	if (loadingElement) {loadingElement.style.display = "none"}
	currentTime = new Date().getTime()
	createCanvas(windowWidth, windowHeight)
	noSmooth()
	image(buttons["background"], windowWidth/2, windowHeight/2, max(windowWidth, windowHeight), max(windowWidth, windowHeight))
	screenShake()
	textSize(25)

	switch (mode) {
		case "timed": timedMode(); break;
		case "zen" : zenMode(); break;
		case "chaos": chaosMode(); break;
		case "score": scoreMode(); break;
		case "survival": survivalMode(); break;
		case "main": mainMenu(); break;
		case "modes": modesMenu(); break;
		case "story": campaignMode(); break;
	} trail(mouseX, mouseY, 20);
}