module.exports = {
    "fpsLimit": 60,
    "interactivity": {
        "events": {
            "onClick": {
                "enable": true,
                "mode": "push",
            },
            "onHover": {
                "enable": true,
                "mode": "repulse",
            },
            "resize": true,
        },
        "modes": {
            "bubble": {
                "distance": 100,
                "duration": 2,
                "opacity": 0.5,
                "size": 10,
            },
            "push": {
                "quantity": 1,
            },
            "repulse": {
                "distance": 50,
                "duration": 0.4,
            },
        },
    },
    "particles": {
        "number": {
            "value": 110,
            "density": {
                "enable": true,
                "value_area": 900
            }
        },
        "color": {
            "value": "#ffffff",
        },
        "shape": {
            "type": "circle",
        },
        "opacity": {
            "value": 0.5,
        },
        "size": {
            "value": 4,
            "random": true,
        },
        "links": {
            "color": "#0f0",
            "distance": 110,
            "enable": true,
            "opacity": 0.8,
            "width": 1.3,
        },
        "collisions": {
            "enable": true,
        },
        "move": {
            "direction": "bottom-right",
            "enable": true,
            "outMode": "out",
            "random": false,
            "speed": 6,
            "straight": false,
        }
    },
    "detectRetina": true,

}