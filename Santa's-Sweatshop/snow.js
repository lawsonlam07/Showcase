tsParticles.load("ts", {
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
            value: { min: 0, max: 360 }, // initial rotation angle
            random: true,
            direction: "random", // or "counter-clockwise"
            animation: {
                enable: true,
                speed: { min: 5, max: 25 }, // degrees per second
                sync: false // each particle rotates independently
            }
        },

        move: {
            enable: true,
            direction: "bottom", // 👈 makes them fall
            speed: { min: 1, max: 3 },
            // angle: {
            //     value: 10, // slight angle for horizontal drift
            //     offset: 20 // adds variation to the angle
            // },
            // path: {
            //     enable: true,
            //     delay: { value: 0 },
            //     generator: "curve" // or "curve" for smoother sway
            // },
            outModes: {
                default: "out" // particles disappear when they reach the bottom
            }
        },

        number: { value: 25 },
        opacity: { value: 0.5 }
    }
});