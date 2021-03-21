// changing doce img 1 according to random number for a dice roll
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
dice1 = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").src=dice1;

// changing doce img 2 according to random number for a dice roll
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
dice2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").src=dice2;

// Dispaying the winner

if (dice1>dice2) {
  var winnerPlayer1 = "🚩Player 1 Wins!";
  document.querySelector("h1").textContent = winnerPlayer1;
}
else if (dice1===dice2) {
  var draw = "Draw!";
  document.querySelector("h1").textContent = draw;
}
else if(dice1<dice2) {
  var winnerPlayer2 = "Player 2 Wins!🚩";
  document.querySelector("h1").textContent = winnerPlayer2;
}
else {
  console.log("Something went wrong in if else logic!");
}
