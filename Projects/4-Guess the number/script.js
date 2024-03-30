let randomNumber = parseInt(Math.random()*100 +1)
console.log(randomNumber)

const userInput = document.querySelector(".guessField");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const form = document.querySelector('.form')
const p = document.createElement("p");

let numGuess = 1; // counter to count the number of attempts left.

let playGuess = true; // enable or disable player from playing game.


if(playGuess){
    // take the input form user.
    submit.addEventListener("click",function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}






// check if the entered value is valid or not.
function validateGuess(guess){
   if(guess< 1) displayMessage(`Please enter number more than or equal to 1`);
   else if(guess>200) displayMessage(`Please enter number less than or equal to 100`)
   else if(isNaN(guess)) displayMessage(`please enter a valid number`);
   else{
      if(numGuess === 10){
        updateResult(guess);
        displayMessage(`Game over. Random number was ${randomNumber}`);
        endGame();
      }
      else{
       
        updateResult(guess);
        checkGuess(guess);
      }
    }
   
}

// check if entered value is matching with random number.
function checkGuess(guess){
    if(randomNumber === guess){ displayMessage(`You guessed it right`);
    endGame();
    }
    else if(randomNumber > guess) displayMessage(`Number tooo low`);
    else if(randomNumber < guess) displayMessage(`Number tooo high`);
}

//  update the result window after succesful checkGuess
function updateResult(guess){
    userInput.value ="";
    guessSlot.innerHTML += `${guess} `;
    remaining.innerHTML = `${10 - numGuess}`;
    numGuess++;
}

// display any message
function displayMessage(message){
   lowOrHi.innerHTML = `<h2> ${message} </h2>`;
}

// function/method when game will end.
function endGame(){
   userInput.value = "";
   userInput.setAttribute('disabled', '');
   p.classList.add("button");
   p.innerHTML = `<h2 id="newGame" style="width:20vh; height:5vh;color:black; background-color:yellow;margin-left:45%;border-radius:30px;cursor: pointer";>New Game </h2>`;
   startOver.appendChild(p);
   playGuess = false;
   newGame();
}

// function/method when game will start
function newGame(){
 // check if user clicked the new game button then only start execution
 const newGameButton = document.querySelector("#newGame");
 newGameButton.addEventListener("click", function(e){
    randomNumber = parseInt(Math.random()*100 +1);
    console.log(randomNumber);
    guessSlot.innerHTML = "";
    numGuess =0;
    remaining.innerHTML =`${10 - numGuess}`;
    startOver.removeChild(p);
    userInput.removeAttribute("disabled");
    playGuess = true;


 });
}