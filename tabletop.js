const imgX = "./assets/icon-x.svg";
const imgO = "./assets/icon-o.svg";

const grid = document.querySelectorAll(".tile");
const turnLogo = document.querySelector("#turn-logo")

let logoImg = document.createElement("img");
logoImg.src = "./assets/icon-x.svg";
turnLogo.appendChild(logoImg)
let whoPlaysNextArray = [];

// Who plays next
for (let i = 0; i < grid.length; i++) {
    let img = document.createElement("img");
    grid[i].addEventListener("click", function() {
    
        if(whoPlaysNextArray[0] === "o" || whoPlaysNextArray.length === 0) {

            img.src = "./assets/icon-x.svg";
            img.alt = "letter-x"
            grid[i].appendChild(img);
            logoImg.src = "./assets/icon-o.svg";
            logoImg.alt = "logo-letter-o";
            whoPlaysNextArray.unshift("x");
        } else {

            img.src = "./assets/icon-o.svg";
            img.alt = "letter-o"
           grid[i].appendChild(img);
            logoImg.src = "./assets/icon-x.svg";
            logoImg.alt = "logo-letter-x";
            whoPlaysNextArray.unshift("o");}
})};

// reset button 
const restart = document.querySelector("#restart");
for (let i = 0; i < grid.length; i++) {
    restart.addEventListener("click", function() {
        if(grid[i].children.length > 0) {
            grid[i].firstChild.remove();
        }
    })
}
    
    
        
    

