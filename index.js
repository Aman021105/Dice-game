var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice"+randomNumber1+".png";
var randomDiceSource = "images/"+randomDiceImage;
var dice1 = document.querySelectorAll("img")[0];

dice1.setAttribute("src",randomDiceSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomDiceSource2 = "images/"+randomDiceImage2;
var dice2=document.querySelectorAll("img")[1];

dice2.setAttribute("src",randomDiceSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
