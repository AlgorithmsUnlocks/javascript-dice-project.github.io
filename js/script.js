var randomNumber_1 = Math.floor(Math.random() * 6) + 1 ;
var randomNumber_2 = Math.floor(Math.random() * 6) + 1 ;

var diceImage_1 = "images/dice"+randomNumber_1+".png";
var diceImage_2 = "images/dice"+randomNumber_2+".png";

var image_1 = document.querySelectorAll("img")[0];
image_1.setAttribute("src",diceImage_1);

var image_2 = document.querySelectorAll("img")[1];
image_2.setAttribute("src",diceImage_2);



var heading = document.querySelector("h1");
if(randomNumber_1 > randomNumber_2){
    heading.innerHTML = "Player 1 Win The Game and Score = "+ randomNumber_1;
    heading.style.fontSize = "5rem";
}else{
    heading.innerHTML = "Player 2 Win The Game and Score = "+ randomNumber_2;
    heading.style.fontSize = "5rem";
}