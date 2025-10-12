console.log("flappy");

let bird = document.getElementById("bird");
// The game loop will run at 30 FPS
let fps = 30;
let ticks = 1000/fps;
let dt = 1/ticks;
let g = 10;

function updateBird() {
    // get the current y position
    let y = bird.offsetTop;
    let newY = y + g * dt;
    console.log(newY+"");
    bird.style.top = newY+"px";
}
function updatePipes() {
    console.log("not implemented");
}

function loop() {
    updateBird();
    updatePipes();
}

setTimeout(loop, ticks);
