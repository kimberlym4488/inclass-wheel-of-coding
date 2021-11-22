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
//Start Button should decrement timer.

startButton.addEventListener("click", countDown);
    //now we want the timer to start
    
function countDown() {
    console.log("")
    playing = true;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerCountEl.textContent = secondsLeft;
        //When timer ends, the ability to type will stop.
        if(secondsLeft === 0) {
            playing = false;
            clearInterval(timerInterval);//stops the timer interval button and returns the function/exits the function started by pressing the start button.
            console.log(secondsLeft)
            return;
      //WILL call FUNCTION here for the you lost or you win and to add to wins/losses.
        }
    }, 1000);
}
//Some letters should be pre-populated
    //User should be able to type in letters to fill in the word.
    
    document.addEventListener("keydown", function(e){
        var letter = e.key;
        console.log(letter);
        if(answer.includes(letter)){
            unsolved[answer.indexOf(letter)] = letter;
        }
    }
    )
    /*If the word is filled in, the user will get a win in the win column.
    If the word is not filled in, the user will get a loss in the loss column. 
        These two items will remain when the user presses start again.
        These two items will go back to zero when Reset Score is pressed.
    A new word will pop up to be filled in when the start button is pressed again. 
    */
    //function setTime() {
  // Sets interval in variable

  //Sample timer code: var timerInterval = setInterval(function() {
  /*  secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
 
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    
    };
 
  }, 1000);*/
