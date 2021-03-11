function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

//define our first cariable , the chacha
let chacha = document.querySelector(".chacha");
let chaL = document.querySelector(".letter");

//logo
let logoD = document.querySelector(".logo");

//result of the chacha's letter
function turnChaL() {
    document.body.style.background = "pink";
    chaL.classList.toggle("active")
    logoD.style.display = "none";
}

//add an event listner
//when someone clicks on the chacha's image change the logo to chacha's letter

chacha.addEventListener("click",turnChaL);

//----------  moli's letter  ----------------
let moli = document.querySelector(".moli");
let moliL = document.querySelector(".letter");

//logo
let logoD = document.querySelector(".logo");

//result of the moli's letter
function turnmoliL() {
    document.body.style.background = "white";
    moliL.classList.toggle("active")
    logoD.style.display = "none";
}

//add an event listner
//when someone clicks on the chacha's image change the logo to moli's letter

moli.addEventListener("click",turnmoliL);

//--------End--------------