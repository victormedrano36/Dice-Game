//Dice Change code begins
//1st dice
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomImage;
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

//2nd dice
var randomNumber2 = Math.floor(Math.random() * 6 +1);
var randomImage2 = "dice" + randomNumber2 + ".png";
var randoImageSource2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randoImageSource2);
//Dice Change code ends

//Title code begins
if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins 🚩";
}else {
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}

if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Try again 😟";
}
//Title code ends
