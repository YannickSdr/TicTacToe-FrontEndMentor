// setup mark selection
let playerPick = "";
const x = document.querySelector("#x-white");
const o = document.querySelector("#o-white");

document.querySelector("#x-select")
.addEventListener("click", function() {
    playerPick = "x";
    x.style.filter = "none";
    o.style.cssText = "filter: invert(100%); filter: brightness(10%)";
});

document.querySelector("#o-select")
.addEventListener("click", function() {
    playerPick = "o";
    o.style.filter = "none";
    x.style.filter = "grayscale(80%";
});