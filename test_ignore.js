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

  
