






   



let playerChoice
let playerSelection;
let playerScore = 0;
let compScore = 0;

//alert("I am here");

for (let roundCount = 1; roundCount < 6; roundCount++) {


   //if (roundCount = 5 && (playerScore > compScore)) {
   //    alert("You've Won!");
   //    playerChoice = confirm("Play again?");
   //    if (playerChoice == true) {
   //        alert("wybrał win ok");
   //        //roundCount = 1;
   //    } else {
   //        alert("See you nex time!")
   //    }
   //    
   //} 
   //else if (roundCount = 5 && (playerScore > compScore)) {
   //    (alert("You've lost!")) 
   //    playerChoice = confirm("Play again?");
   //    if (playerChoice == true) {
   //        alert("wybrał lose ok");
   //        //roundCount = 1;
   //    } else {
   //        alert("See you nex time!")
   //    }

   //} else { 
   //    alert("Lets go!");
   //}

    

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

// "if" do wywalki?:
    //if (roundCount <5) {
     playerSelection = prompt('rock?', '');
    //} else {
    //let compScore = 0;
   //let playerScore = 0;
   //roundCount = 0}

    if (playerSelection === '' || playerSelection === null) {
        alert( 'Canceled'), alert("Your score = " + (playerScore) + " vs machine = " + (compScore)) ;
    }

    playerSelection = playerSelection.toLowerCase();


    //round count display

    alert("Round = " + (roundCount));

    //player win scenarious:
    if (playerSelection == 'paper' && computerSelection == 'rock') {
      alert('You defeated Rock!'), alert("Your score = " + (playerScore + 1) + " vs machine = " + (compScore));
      ++playerScore;
      //++roundCount;
    //alert("Round = " + (roundCount));
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        alert('You defeated Paper!'), alert("Your score = " + (playerScore + 1) + " vs machine = " + (compScore));
        ++playerScore;
        //++roundCount;
    //alert("Round = " + (roundCount));
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        alert('You defeated Scissors'), alert("Your score = " + (playerScore + 1) + " vs machine = " + (compScore));
        ++playerScore;
        //++roundCount;
    //alert("Round = " + (roundCount));
    // add point to player

    } else if (playerSelection == computerSelection) {
        alert(`My shape is ${computerSelection} too! That is sqare! Lets try again!`), alert("Your score = " + (playerScore + 1) + " vs machine = " + (compScore +1));
        ++playerScore;
        ++compScore;
        //++roundCount;
        //alert("Round = " + (roundCount));
    // here add opins to both

    //player defeat scenario:
    } else if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        alert(`You've been defeated by ${computerSelection}! Try again!`), alert("Your score = " + (playerScore) + " vs machine = " + (compScore + 1));
        ++compScore;
        //++roundCount;
        //alert("Round = " + (roundCount));
    // add point to comp

    //misspeling:
    } else {
      alert(`Try to put paper, rock or scissors`);
    }
}




// to fix : didplay end of game in case of cancel or end
            // adding score need to be working








//const playerSelection = prompt("HI! What's your shape (rock, scissors or paper)?", ' ');
//const computerSelection = computerPlay();
//
//    function playRound() {
//        let playerSelection = prompt('HI! What is your shape (rock, scissors or paper)?', ' ');
//        // your code here!
//            if (playerSelection === 'rock')
//            alert( "You won!" );
//         else alert( "Maybe next time!" )
//    }
//
    
    playRound();
    



   // && computerSelection === "Scissors" || "Paper" || "Rock") 
















//return return chosen_shape to user:





// from internet: 
var item = items[Math.random()*items.length>>0]
 // or:
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));

// or:

function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

const items = [254, 45, 212, 365, 2543];
console.log(random_item(items));

