let input = document.getElementById("Input");
let btn = document.getElementById("btnn");
let wrong = document.getElementById("wrng");
let guess = document.getElementById("guesses");

let NoToGuess = Math.floor(Math.random()*100)+1;
let NoOfTimeGuess = 0;

btn.addEventListener("click", () => {
    guessNumber();
});

function guessNumber()
{
    if(input.value < 1 || input.value > 100 || isNaN)
    {
        wrong.innerHTML = "Please enter a number between 1 and 100";
    }
    else{
        NoOfTimeGuess++;
        guess.innerHTML = "No. of Guess: " + NoOfTimeGuess;
        if(input.value > NoToGuess){
            wrong.innerHTML = "You guessed high value!";
        }
        else if(input.value < NoToGuess){
            wrong.innerHTML = "You guessed low value!";
        }
        else{
            wrong.innerHTML = "Congratulation you guessed the correct number";
        }
    }

}
