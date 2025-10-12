console.log("flappy");

let bird = document.getElementById("bird");

bird.addEventListener(handleClick);

function handleClick() {
    console.log(this);
}
