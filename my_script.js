let playerChoice;
let playerSelection;
let playerScore = 0;
let compScore = 0;
let roundCount = 1;

for (let roundCount = 1; roundCount < 6; roundCount++) {

// final messages:

    if (roundCount == 5) {

        if (playerScore > compScore) {
                alert("You've Won!");
        } else if (playerScore < compScore) {
            alert("You've lost!")
        } else alert("It's total Square!")
    }

let computerSelection = computerPlay();

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

     playerSelection = prompt('What\'s your chosen shape (rock, scissors or paper)?', '');

      //round count display
     alert("Round = " + (roundCount));

    if (playerSelection === '' || playerSelection === null) {
        alert( 'Canceled');
    }

    playerSelection = playerSelection.toLowerCase()

    //player win scenarious:
    if (playerSelection == 'paper' && computerSelection == 'rock') {
      alert('You defeated Rock!'), alert("Your score = " + (playerScore + 1) + " vs machine = " + (compScore));
      ++playerScore;
      
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        alert('You defeated Paper!'), alert("Your score = " + (playerScore + 1) + " vs machine = " + (compScore));
        ++playerScore;
        
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        alert('You defeated Scissors'), alert("Your score = " + (playerScore + 1) + " vs machine = " + (compScore));
        ++playerScore;
        
    // above added point to player

    } else if (playerSelection == computerSelection) {
        alert(`My shape is ${computerSelection} too! That is sqare! Lets try again!`), alert("Your score = " + (playerScore + 1) + " vs machine = " + (compScore +1));
        ++playerScore;
        ++compScore;
        
    // above added opins to both

    //player defeat scenario:
    } else if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        alert(`You've been defeated by ${computerSelection}! Try again!`), alert("Your score = " + (playerScore) + " vs machine = " + (compScore + 1));
        ++compScore;
        
    //misspeling:
    } else {
      alert(`Try to put paper, rock or scissors`);
    }
}



// ---------------to make it better-------------------:
// message "round count" should appear when one of CORRECT shapes is choosen (now appears every time)
// in other words: cancel should cancel game and reset scores and rounds
//  Line for "display score" in one place in code

// -----------random functions from internet-------------: 
//var item = items[Math.random()*items.length>>0]
// // or:
//function random_item(items)
//{
//  
//return items[Math.floor(Math.random()*items.length)];
//     
//}
//
//var items = [254, 45, 212, 365, 2543];
//console.log(random_item(items));
//
//// or:
//
//function random_item(items)
//{
//  
//return items[Math.floor(Math.random()*items.length)];
//     
//}
//
//const items = [254, 45, 212, 365, 2543];
//console.log(random_item(items));

