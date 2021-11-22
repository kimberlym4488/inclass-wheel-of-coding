var startButton = document.querySelector(".start-button");
var timerCountEl = document.querySelector(".timer-count");
var secondsLeft = 10;
var wordBlank = document.querySelector(".word-blanks")
var answer = 'JavaScript'.split('');
var unsolved = ["_","_","_","_","_","_", "_","_","_","_"];
var playing = false;
var wins = 0;
var losses = 0

wordBlank.textContent = unsolved.toString().replaceAll(",", " ");

console.log(timerCountEl)

startButton.addEventListener("click", countDown);
    //now we want the timer to start

function countDown() {
    console.log("")
    playing = true;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerCountEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            playing = false;
            clearInterval(timerInterval);
            console.log(secondsLeft)
            return;
      //WILL call FUNCTION here for the you lost or you win and to add to wins/losses.
        }
    }, 1000);
}

document.addEventListener("keydown", function(e){
    var letter = e.key;
    console.log(letter);
    if(answer.includes(letter)){
        unsolved[answer.indexOf(letter)] = letter;
    }
}
)
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
