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
    let y = bird.offsetTop;
    v = v + g * dt;
    let newY = y + v;
    bird.style.top = newY+"px";
}
function tap() {
    // we invert the velocity so the bird now goes in the opposite direction [for a while].
    v = -g;
}
function updatePipes() {
    console.log("not implemented");
}
function isGameOver() {
    // is bird hit the ground
    if(bird.offsetTop > 0) {
        if(bird.offsetTop > window.innerHeight / 2) {
            window.alert("You Lose!");
            window.location.replace("lose.html");
        }
    }

}

function loop() {
    updateBird();
    updatePipes();

    isGameOver();
}


setInterval(loop, ticks);
