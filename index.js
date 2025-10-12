console.log("flappy");

let bird = document.getElementById("bird");

bird.addEventListener("click", handleClick);

function handleClick() {
    console.dir(this);
    console.dir(event);
    let curr_y = event.pageY;
}
let g = -6;
let dt = 10/1000

setTimeout(() => {
    let cal_y += g * dt;
    bird.style.transform(cal_y+"px");
}, "10");
