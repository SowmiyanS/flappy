console.log("flappy");

let bird = document.getElementById("bird");

bird.addEventListener("click", handleClick);

function handleClick() {
    console.dir(this);
    console.dir(event);
    let curr_y = event.pageY;
}
let g = -6;

setTimeout(() => {
    let cal_y += g
    bird.style.transform(cal_y+"px");
});
