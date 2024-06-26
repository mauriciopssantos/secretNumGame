let secretNumber = generateNumber(100);
let tries = 1;
initialText();

function displayText(tag,text){
    let item = document.querySelector(tag);
    item.innerHTML = text;
    responsiveVoice.speak(text,"US English Female",{rate:1.2})
}

function initialText(){
    displayText('h1',"Secret Number Game");
    displayText('p',"Choose a number between 1 - 100.");
}



function verifyGuess() {
    let guess = document.querySelector("input").value;
    let wordTries = tries > 1 ? "tries" : "try";
    let messageTry = `You guessed it right. It took you ${tries} ${wordTries}.`;
    if (guess == secretNumber){
        displayText('h1',"You won!");
        displayText('p',messageTry);
        document.getElementById('restart').removeAttribute('disabled');
    }else{
        if (guess > secretNumber) {
            displayText('p',`Try again. The secret number is lower than ${guess}`);
        } else {
            displayText('p',`Try again. The secret number is higher than ${guess}`);
        }
        tries++;
    }
}

function newGame(){
    initialText();
    secretNumber = generateNumber(100);
    clearFields();
    document.getElementById('restart').setAttribute('disabled',true);
}

function generateNumber(max){
    return parseInt(Math.random() * max + 1);
}
function clearFields(){
    guess = document.querySelector("input");
    guess.value = "";
}