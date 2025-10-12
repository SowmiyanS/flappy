console.log("flappy");

let bird = document.getElementById("bird");

bird.addEventListener("click", handleClick);

function handleClick() {
    console.dir(this);
    console.dir(event);
    let curr_y = event.pageY;
}
let g = 6;
let dt = 10/1000
let curr_y = bird.offsetTop;

setTimeout(() => {
    curr_y = bird.offsetTop;
    console.log(curr_y);
    let call_y = curr_y + (g * dt);
    console.log(call_y);
    bird.style.top = call_y+"px";
}, "1000");
