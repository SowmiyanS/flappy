console.log("flappy");

let bird = document.getElementById("bird");

bird.addEventListener("click", handleClick);

function handleClick() {
    console.log(this);
}
