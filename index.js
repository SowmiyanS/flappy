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
    let y = Numeber(ys.slice(0, -2));
    v = v + g * dt;
    let newY = y + v;
    bird.style.top = newY+"px";
}
function tap() {
    // we invert the velocity so the bird now goes in the opposite direction [for a while].
    //v = v-g;
}
function updatePipes() {
    console.log("not implemented");
}
function isGameOver() {
    // is bird hit the ground
    if(Math.abs(bird.offsetTop) > window.innerHeight) {
        window.alert("You Lose!");
        window.location.replace("lose.html");
    }
}

function loop() {
    updateBird();
    updatePipes();

    isGameOver();
}

// attach the click event listener for section
section.addEventListener("click", tap);
setInterval(loop, ticks);
