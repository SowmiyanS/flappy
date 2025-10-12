console.log("flappy");

let bird = document.getElementById("bird");
// The game loop will run at 30 FPS
let fps = 30;
let ticks = 1000/fps;

function updateBirds() {
    // get the current y position
    let y = bird.
}

function loop() {
    updateBird();
    updatePipes();
}

//setInterval(loop, ticks);
