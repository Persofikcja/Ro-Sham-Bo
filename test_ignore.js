let message;
let login = prompt('Login?', '');

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}





// attempt

let message;
let playerSelection = prompt('rock?', '');

if (playerSelection == 'rock') {
  alert('You won!');
} else if (playerSelection == 'paper') {
  message = 'You won2!';
} else if (playerSelection == 'scissors') {
  message = 'you won3';
} else {
  message = '';
}



// attempt

let message;
let playerSelection = prompt('rock?', '');
if (playerSelection == 'rock') {
    message = 'Hello';
} else {
    message = '';
  }





  
  if ((playerSelection == 'paper') && (computerPlay() == 'Scissors')) {
    alert('You won1!');
  } else if ((playerSelection == 'paper') && (computerPlay() == 'Rock')) {
      alert('You won!2');
  } else if ((playerSelection == 'paper') && (computerPlay() == 'Paper')) {
      alert('You won!3');
  } else {
    alert('another time');
  }
  



//nesting if:
if (choice === 'sunny' && temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice 'and s'`;
  } else if (choice === 'sunny' && temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside `;
  }

  
// final messages:


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



   if (choice === 'sunny') {
    if (temperature < 86) {
      para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.`;
    } else if (temperature >= 86) {
      para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
    }
  }





  // -----------random functions from internet-------------: 
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

