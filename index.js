console.log("flappy");

let bird = document.getElementById("bird");

bird.addEventListener("click", handleClick);

function handleClick() {
    console.dir(this);
    console.dir(event);
    let curr_y = event.pageY;
}
let g = 10;
let dt = 1000/1000
let curr_y = bird.offsetTop;

setInterval(() => {
    curr_y = bird.offsetTop;
    console.log(curr_y);
    let call_y = curr_y + (g * dt);
    console.log(call_y);
    bird.style.top = call_y+"px";
}, "1000");

setInterval(() => {
    if(bird.offsetTop > window.innerHeight / 2) {
        window.alert("you lose");
    }
}, "1000");
