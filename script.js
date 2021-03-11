function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

//define our first cariable , the chacha
let chacha = document.querySelector(".chacha");

//result of the chacha's letter
function turnChaL() {
    document.body.style.background = "pink";
    document.body.style.color = "black";
}

//add an event listner
//when someone clicks on the chacha's image change the logo to chacha's letter

chacha.addEventListener("click",turnChaL)