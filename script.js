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

//---------- Raymond 's letter  ----------------
let jake = document.querySelector(".jake");
let jakeL = document.querySelector(".jakeletter");

//result of the willow's letter
function turnjakeL() {
    document.body.style.background = "#92A8CF";
    jakeL.classList.toggle("active")
    logoD.style.display = "none";
}

//add an event listner
//when someone clicks on the willow's image change the logo to moli's letter

jake.addEventListener("click",turnjakeL);

//--------End--------------

//---------- Milk 's letter  ----------------
let milk = document.querySelector(".milk");
let milkL = document.querySelector(".milkletter");

//result of the willow's letter
function turnmilkL() {
    document.body.style.background = "#FFED8E";
    milkL.classList.toggle("active")
    logoD.style.display = "none";
}

//add an event listner
//when someone clicks on the willow's image change the logo to moli's letter

milk.addEventListener("click",turnmilkL);

//--------End--------------

//----------  moli's letter  ----------------
let moli = document.querySelector(".moli");
let moliL = document.querySelector(".moliletter");

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

//---------- Willow 's letter  ----------------
let willow = document.querySelector(".mln");
let willowL = document.querySelector(".mlnletter");

//result of the willow's letter
function turnwillowL() {
    document.body.style.background = "#DDC527";
    willowL.classList.toggle("active")
    logoD.style.display = "none";
}

//add an event listner
//when someone clicks on the willow's image change the logo to moli's letter

willow.addEventListener("click",turnwillowL);

//--------End--------------

//---------- Poppy 's letter  ----------------
let poppy = document.querySelector(".ruan");
let poppyL = document.querySelector(".ruanletter");

//result of the poppy's letter
function turnpoppyL() {
    document.body.style.background = "#8D3437";
    poppyL.classList.toggle("active")
    logoD.style.display = "none";
}

//add an event listner
//when someone clicks on the willow's image change the logo to moli's letter

poppy.addEventListener("click",turnpoppyL);

//--------End--------------