var blueDie = [
    { 
        hits: 1,
        surges: 1,
        advantages: 0
    },
    { 
        hits: 2,
        surges: 0,
        advantages: 0
    },
    { 
        hits: 2,
        surges: 0,
        advantages: 2
    },
    { 
        hits: 3,
        surges: 0,
        advantages: 0
    },
    { 
        hits: 3,
        surges: 0,
        advantages: 0
    },
    { 
        hits: 2,
        surges: 0,
        advantages: 0
    }
];

var redDie = [
    { 
        hits: 1,
        surges: 1,
        advantages: 0
    },
    { 
        hits: 1,
        surges: 1,
        advantages: 0
    },
    { 
        hits: 2,
        surges: 0,
        advantages: 1
    },
    { 
        hits: 2,
        surges: 0,
        advantages: 0
    },
    { 
        hits: 2,
        surges: 0,
        advantages: 0
    },
    { 
        hits: 1,
        surges: 1,
        advantages: 1
    },
    { 
        hits: 0,
        surges: 0,
        advantages: 2
    },
    { 
        hits: 1,
        surges: 0,
        advantages: 2
    }
];

var yellowDie = [
    { 
        hits: 1,
        surges: 0,
        advantages: 1
    },
    { 
        hits: 1,
        surges: 0,
        advantages: 1
    },
    { 
        hits: 0,
        surges: 1,
        advantages: 0
    },
    { 
        hits: 1,
        surges: 1,
        advantages: 0
    },
    { 
        hits: 1,
        surges: 0,
        advantages: 1
    },
    { 
        hits: 0,
        surges: 1,
        advantages: 0
    },
    { 
        hits: 1,
        surges: 1,
        advantages: 0
    },
    { 
        hits: 2,
        surges: 0,
        advantages: 0
    },
    { 
        hits: 1,
        surges: 1,
        advantages: 0
    },
    { 
        hits: 0,
        surges: 1,
        advantages: 0
    },
    { 
        hits: 0,
        surges: 1,
        advantages: 1
    },
    { 
        hits: 0,
        surges: 1,
        advantages: 0
    }
];


function getFace(max) {
    return Math.floor(Math.random() * max);
}

function getBlue() {
    var face = getFace(6);
    console.log("Rolled blue die face: " + face);
    return blueDie[face];
}

function getRed() {
    var face = getFace(8);
    console.log("Rolled red die face: " + face);
    return redDie[face];
}

function getYellow() {
    var face = getFace(12);
    console.log("Rolled yellow die face: " + face);
    return yellowDie[face];
}
