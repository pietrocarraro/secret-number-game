let drawnNumberArray = [];
let maxNumber = 10;
let secretNumber = randomNumber();
let tries = 1;

function showTextOnScreen(tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text, 'US English Female', {rate:1.2});
}

function startText(){
    showTextOnScreen('h1', "Secret Number Game");
    showTextOnScreen('p', "Choose a number between 1 and 10");
}

startText();

function verifyGuess() {
    let guess = document.querySelector('input').value;

    if(guess == secretNumber){
        showTextOnScreen("h1", "That's right!");
        let wordTry = tries > 1 ? "tries" : "try";
        let textTries = `You guessed the secret number with ${tries} ${wordTry}`
        showTextOnScreen("p", textTries);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if(guess > secretNumber){
        showTextOnScreen("p","The secret number is lower");
        }
    
        else {
        showTextOnScreen("p","The secret number is higher");
        }

        tries ++;
        clearField();
    }
    
}

function randomNumber() {
    let chosenNumber = parseInt(Math.random() * maxNumber + 1);
    let amountOfDrawnNumbers = drawnNumberArray.length;

    if(amountOfDrawnNumbers == maxNumber){
        drawnNumberArray = [];
    }

    if(drawnNumberArray.includes(chosenNumber)){
        return randomNumber();
    } else {
        drawnNumberArray.push(chosenNumber);
        console.log(drawnNumberArray);
        return chosenNumber;
    }
}

function clearField() {
    guess = document.querySelector('input');
    guess.value = "";
}

function restartGame(){
    secretNumber = randomNumber();
    clearField();
    tries = 1;
    startText();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}