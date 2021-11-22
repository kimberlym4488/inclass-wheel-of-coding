var startButton = document.querySelector(".start-button");
var timerCountEl = document.querySelector(".timer-count");
var secondsLeft = 5;
var wordBlank = document.querySelector(".word-blanks")
var answer = 'JavaScript'.split('');
var unsolved = ["J","_","v","_","S","_","_","_","p","_"];
var playing = false;
var wins = 0;
var losses = 0

wordBlank.textContent = unsolved.toString().replaceAll(",", " ");

startButton.addEventListener("click", countDown);
    //now we want the timer to start

function countDown() {
    playing === true;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerCountEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          playing === false;
            console.log(secondsLeft);
      //WILL call FUNCTION here for the you lost or you win and to add to wins/losses.
        }
    }, 1000);
}

/*function restartTimer(){
  while (playing = false);
  secondsLeft = 5;
};*/

document.addEventListener("keydown", function(e){
    var letter = e.key;
    console.log(letter);
    if(answer.includes(letter)){
        unsolved[answer.indexOf(letter)] = letter;
        console.log(letter);
    }
  }
)

/*function restartTimer() {
  while (playing = false) {
    secondsLeft = 5;
  }
}*/
    /*
    //function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
 
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    
      };
    }
 
  }, 1000);*/
