// 1 line solution alert("works!") // to check is the js file is added
// document.querySelectorAll(".drum).forEach(element=> element.addEventListener("click", handleClick));

//this will not work, it will run the fucntion without waiting for the click.
// document.querySelector("button").addEventListener("click", handleClick());

//This will also work and the function here is called anonymous fucntion
//document.querySelector("button").addEventListener("click", function () {  alert("i was clicked");})

// for loop solution

// for click
var numberOfDrumButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  })
}

//for key press

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key) {
  switch (key) {
    case "w":
      var audioW = new Audio("sounds/tom-1.mp3");
      audioW.play();
      break;

    case "a":
      var audioA = new Audio("sounds/tom-2.mp3");
      audioA.play();
      break;

    case "s":
      var audioS = new Audio("sounds/tom-3.mp3");
      audioS.play();
      break;

    case "d":
      var audioD = new Audio("sounds/tom-4.mp3");
      audioD.play();
      break;

    case "j":
      var snareJ = new Audio("sounds/snare.mp3");
      snareJ.play();
      break;

    case "k":
      var crashK = new Audio("sounds/crash.mp3");
      crashK.play();
      break;

    case "l":
      var kickL = new Audio("sounds/kick-bass.mp3");
      kickL.play();
      break;

    default: console.log(key);

  }
}

function buttonAnimation (currentKey) {
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");

  }, 100);
}
