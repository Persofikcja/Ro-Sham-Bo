let playerChoice;
let playerSelection;
let playerScore = 0;
let compScore = 0;
let roundCount = 1;

const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const roundT = document.createElement('p');
const messageT = document.createElement('p');
const scoreT = document.createElement('p');
const messageFinalT = document.createElement('h1');
messageFinalT.style.color = 'blueviolet';
const messageFinalT2 = document.createElement('h2');
messageFinalT2.style.color = 'green';

document.body.appendChild(roundT);
document.body.appendChild(messageT);
document.body.appendChild(scoreT);
document.body.appendChild(messageFinalT);
document.body.appendChild(messageFinalT2);

rockBtn.addEventListener('click', () => handleClick('rock'))
paperBtn.addEventListener('click', () => handleClick('paper'))
scissorsBtn.addEventListener('click', () => {
    handleClick('scissors')
 });

function handleClick(playerSelection) {
    
    let computerSelection = computerPlay();
    messageFinalT.textContent = "";
    messageFinalT2.textContent = "";


    //create random 1 or 2 or 3:

    function my_random(num) {
    num = Math.random(num) 
    if (num <= 0.33) return 0;
    else if (num > 0.33 && num <= 0.66 ) return 1;
    else return 2
    }

    //pick and return the choice rock || paper ||  scissors

    function computerPlay() {
    const shapes = ['rock', 'paper', 'scissors'];
    let shape = shapes[my_random()];
    return shape
    }

    // -------- play with user :) -------------:

          //round count display
    // alert("Round = " + (roundCount));
    roundT.textContent = "Round = " + (roundCount);
    roundT.style.color = 'red'; 



   


    if (playerSelection === '' || playerSelection === null) {
        alert( 'Canceled');
    }

    playerSelection = playerSelection.toLowerCase()

    //player win scenarious:
    if (playerSelection == 'paper' && computerSelection == 'rock') {
       // alert('You defeated Rock!'), alert("Your score = " + (playerScore + 1) + " vs machine = " + (compScore));
       messageT.textContent = 'You defeated Rock!';
        scoreT.textContent = "Your score = " + (playerScore + 1) + " vs machine = " + (compScore);
        ++playerScore;
        ++roundCount;
        
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        //alert('You defeated Paper!'), alert("Your score = " + (playerScore + 1) + " vs machine = " + (compScore));
        messageT.textContent = 'You defeated Paper!';
        scoreT.textContent = "Your score = " + (playerScore + 1) + " vs machine = " + (compScore);
        ++playerScore;  
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        //alert('You defeated Scissors'), alert("Your score = " + (playerScore + 1) + " vs machine = " + (compScore));
        //const roundT = document.createElement('p');
        messageT.textContent = 'You defeated Scissors';
        scoreT.textContent = "Your score = " + (playerScore + 1) + " vs machine = " + (compScore);
        ++playerScore;
        ++roundCount;    
        // above added point to player

    } else if (playerSelection == computerSelection) {
           // alert(`My shape is ${computerSelection} too! That is sqare! Lets try again!`), alert("Your score = " + (playerScore + 1) + " vs machine = " + (compScore +1));
        messageT.textContent = `My shape is ${computerSelection} too! That is sqare! Lets try again!`;
        scoreT.textContent = "Your score = " + (playerScore + 1) + " vs machine = " + (compScore +1);
        ++playerScore;
        ++compScore;
        ++roundCount;  
        // above added opins to both

        //player defeat scenario:
    } else if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            //alert(`You've been defeated by ${computerSelection}! Try again!`), alert("Your score = " + (playerScore) + " vs machine = " + (compScore + 1));
        messageT.textContent = `You\'ve been defeated by ${computerSelection}! Try again!`;
        scoreT.textContent = "Your score = " + (playerScore) + " vs machine = " + (compScore + 1);
        ++compScore;
        ++roundCount;

        //misspeling:
    } else {
          alert(`Try to put paper, rock or scissors`);
        }

    if (roundCount == 5) {
        if (playerScore > compScore) {
           // alert("You've Won!");
        messageFinalT.textContent = "You've Won!";
        messageFinalT2.textContent = "Let's start over again! :)";
        } else if (playerScore < compScore) {
            //alert("You've lost!");
        messageFinalT.textContent = "You've lost!";
        messageFinalT2.textContent = "Let's start over again! :)";
        } else //alert("It's total Square!");
        messageFinalT.textContent = "It's total Square!";
        messageFinalT2.textContent = "Let's start over again! :)";
        playerScore = 0;
        compScore = 0;
        roundCount = 1;
        return
    }

}

// }    // end of loop

// ---------------to make it better-------------------:
// message "round count" should appear when one of CORRECT shapes is choosen (now appears every time)
// in other words: cancel should cancel game and reset scores and rounds
//  Line for "display score" in one place