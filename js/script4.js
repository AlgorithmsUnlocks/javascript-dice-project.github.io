var randomNumber_1 = Math.floor(Math.random() * 6) + 1 ;
var randomNumber_2 = Math.floor(Math.random() * 6) + 1 ;
var randomNumber_3 = Math.floor(Math.random() * 6) + 1 ;
var randomNumber_4 = Math.floor(Math.random() * 6) + 1 ;

var diceImage_1 = "images/dice"+randomNumber_1+".png";
var diceImage_2 = "images/dice"+randomNumber_2+".png";
var diceImage_3 = "images/dice"+randomNumber_3+".png";
var diceImage_4 = "images/dice"+randomNumber_4+".png";

var image_1 = document.querySelectorAll("img")[0];
image_1.setAttribute("src",diceImage_1);

var image_2 = document.querySelectorAll("img")[1];
image_2.setAttribute("src",diceImage_2);

var image_3 = document.querySelectorAll("img")[2];
image_3.setAttribute("src",diceImage_3);

var image_4 = document.querySelectorAll("img")[3];
image_4.setAttribute("src",diceImage_4);


var heading = document.querySelector("h1");
if((randomNumber_1 > randomNumber_2) && (randomNumber_1 > randomNumber_3) && (randomNumber_1 > randomNumber_4)){
    heading.innerHTML = "Player 1 Win The Game and Score = "+ randomNumber_1;
    heading.style.fontSize = "5rem";
}else if((randomNumber_2 > randomNumber_1) && (randomNumber_2 > randomNumber_3) && (randomNumber_2 > randomNumber_4)){
    heading.innerHTML = "Player 2 Win The Game and Score = "+ randomNumber_2;
    heading.style.fontSize = "5rem";
}else if((randomNumber_3 > randomNumber_1) && (randomNumber_3 > randomNumber_2) && (randomNumber_3 > randomNumber_4)){
    heading.innerHTML = "Player 3 Win The Game and Score = "+ randomNumber_3;
    heading.style.fontSize = "5rem";
}else if((randomNumber_4 > randomNumber_1) && (randomNumber_4 > randomNumber_2) && (randomNumber_4 > randomNumber_3)){
    heading.innerHTML = "Player 4 Win The Game and Score = "+ randomNumber_4;
    heading.style.fontSize = "5rem";
}else{
    heading.innerHTML = "Refresh Me";
    heading.style.fontSize = "8rem";
}