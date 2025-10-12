console.log("flappy");

let bird = document.getElementById("bird");
let section = document.getElementsByTagName("section")[0];
// The game loop will run at 30 FPS
let fps = 30;
let ticks = 1000/fps;
let dt = 1/fps;
let v = 0;
let g = 20;

function updateBird() {
    // get the current y position
    let ys = bird.style.top;
    let y = Number(ys.slice(0, -2));
    v = v + g * dt;
    let newY = y + v;
    bird.style.top = newY+"px";
}
function tap() {
    // we invert the velocity so the bird now goes in the opposite direction [for a while].
    v = -(g/2);
}

let pipes = [];
for(let i = 0; i < 10;i++) {
    let pipe = document.createElement("div");
    pipe.classList.toggle("pipe");
    pipes.push();
}
let pipeSpace = 400;
let pipe_v = -20;
function updatePipes() {
    // 
}
function isGameOver() {
    // is bird hit the ground
    if(Math.abs(bird.offsetTop) > window.innerHeight) {
        window.alert("You Lose!");
        window.location.replace("lose.html");
    }
}

function loop() {
    //updateBird();
    updatePipes();

    isGameOver();
}

// attach the click event listener for section
section.addEventListener("click", tap);
setInterval(loop, ticks);
