tsParticles.load("snow-particles", {
    particles: {
        shape: {
            type: "image",
            image: {
                src: "Game/Trail/pixil-frame-0.png",
                width: 20,
                height: 20
            }
        },

        size: {
            value: { min: 5, max: 10 }
        },

        rotate: {
            value: { min: 0, max: 360 },
            random: true,
            direction: "random",
            animation: {
                enable: true,
                speed: { min: 5, max: 25 },
                sync: false
            }
        },

        move: {
            enable: true,
            direction: "bottom",
            speed: { min: 1, max: 3 },
            outModes: {
                default: "out"
            }
        },

        number: { value: 25 },
        opacity: { value: 0.5 }
    }
});