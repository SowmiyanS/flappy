console.log("flappy");

let bird = document.getElementById("bird");
// The game loop will run at 30 FPS
let fps = 30;
let ticks = 1000/fps;
let dt = 1/fps;
let v = 0;
let g = 20;

function updateBird() {
    // get the current y position
    let y = bird.offsetTop;
    v = v + g * dt;
    let newY = y + v;
    bird.style.top = newY+"px";
}
function updatePipes() {
    console.log("not implemented");
}

function loop() {
    updateBird();
    updatePipes();
}

setInterval(loop, ticks);
