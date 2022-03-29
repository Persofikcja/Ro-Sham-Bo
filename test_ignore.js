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




// practicing: https://app.nanonets.com/#/ocr/annotate/dee088d6-bf11-47e6-a126-d4f5c2c1ade8/274f66ee-4abd-4771-80c2-2908edc2b6e9

//solution:

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const person of people) {
  if (person === 'Phil' || person === 'Lola') {
    refused.textContent += `${person}, `;
  } else {
    admitted.textContent += `${person}, `;
  }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';




// exerc


for (let i = 1; i < 10; i++ ) {

if (i % 2 == 0) {
alert(i)
  }
}


for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let i = 0;
while (i < 3) {
  alert( `number ${i}!`);
  i++
}


ask userEnter > 100?
if userEnter <= 100 ask again
if userEnter >= 100 break

!userEnter = breakCancel


//example "ask user"
while (true) {
  let value = prompt("Enter a number > 100", '0');
  if (!value) break;
  else if (value > 100) break
}

//example "ask user" using less code:
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);


// =============== output prime numbers:

// My try:
let prime = n
n > 1

n = ((n % n == 0) && n % (n / n) && (n%(n - ++i) !== 0 ))
alert('another?')
console.log(n)

// solution:
For each i in the interval {
  check if i has a divisor from 1..i
  if yes => the value is not a prime
  if no => the value is a prime, show it
}

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}




//////////////// 02_repeatString ========= solution 01 working but wrong:
// based on: "word_string".repeat(3) function

const repeatString = function multiHey (word, number) {
  return word.repeat(number)
};


                // ========== solution 02:

//// You're going to want to use a loop for this one.

//- Create a variable to hold the string you're going to return, create a loop that repeats the given number of times and add the given string to the result on each loop.



function multiHey (myWord, myNumber) {

  let myStringWord = ''

  for (let i = 0; i < myNumber; i++) {
     (myStringWord = myStringWord + myWord)
  }
  return myStringWord
}

multiHey('hey', 3)


/// full solution working done by me:):) :

const repeatString = function multiHey (myWord, myNumber) {


  if (myNumber < 0) {
      return "ERROR"
  }

  let myStringWord = ''

  for (let i = 0; i < myNumber; i++) {
     (myStringWord = myStringWord + myWord)
  }
  return myStringWord
};

repeatString('hey', 3) // returns 'heyheyhey'



//////==========reverse string excersise ========
//

reverseString('hello there') // returns 'ereht olleh'


function revStringPio(hWord) {

//split:


const splitWord = hWord.split( '' );

//reverse:

const revWord = splitWord.reverse();

//join():

const revHello = revWord.join('')
return revHello
};

reverseString('hello there')


//proper solution

function(string) {
  return string.split('').reverse().join('')
 };




 //================remove from array:
 removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

//my solution (passes all tests!) ):):) :

function remAfromA(vArr, ...vToDelArr) { 
  const vToDelSet = new Set(vToDelArr);
  const newArr = vArr.filter((value) => {
    return !vToDelSet.has(value);
  });
  return newArr;
  };
  remAfromA([1, 2, 3], "1", 3);

// Odin solution:
const removeFromArray = function (...args) {
  const array = args[0];
  const newArray = [];
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;

// and another Odin solution:

var removeFromArray = function(...args) {
   const array = args[0]
   return array.filter(val => !args.includes(val))
 }




//
// == this below was very helpful for my solution:
//

// array which holds all values
const namesArr = ["Lily", "Roy", "John", "Jessica"];

// array of values that needs to be deleted
const namesToDeleteArr = ["Roy", "John"];

// make a Set to hold values from namesToDeleteArr
const namesToDeleteSet = new Set(namesToDeleteArr);

// use filter() method
// to filter only those elements
// that need not to be deleted from the array
const newArr = namesArr.filter((name) => {
  // return those elements not in the namesToDeleteSet
  return !namesToDeleteSet.has(name);
});

console.log(newArr); // ["Lily", "Jessica"]

}



//=================== SUM ALL

sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

//- create a variable to hold the final sum
//let finalSum

// loop 
//var myfirstNum
//var mySecondNum


// my solution (apart from !Number.isInteger())


function sum(myfirstNum, mySecondNum) {
if (!Number.isInteger(myfirstNum) || !Number.isInteger(mySecondNum)) return "ERROR";
let finalSum = 0
let a = myfirstNum
let b = mySecondNum

if (a < 0 || b < 0) {
  return 'ERROR'
}
if (myfirstNum > mySecondNum) {
    b = myfirstNum
    a = mySecondNum
  }

  for (let i = a; i <= b; i++) {
    
     (finalSum += a)
     a++
  }
  return finalSum;

}

sum(4000, 2);

1 + 2 + 3 


// solution from Odin:

function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

//===========end SumAll==========


//===========leap year=============

//======= my solution (works):

function leapYearP(givenYear) {
  if ((givenYear < 100) && (givenYear %4 == 0)) 
  {
   return true;
  } else if ((givenYear >= 100) && (givenYear %4 == 0)) {
    if ((givenYear %100 == 0)){
       if (givenYear %400 == 0) {
         return true
      }
    return false;
  }
  return true;
}
return false;
}

leapYearP(1600);


// ==========Odin's solution:
const leapYears = function(year) {
  return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0)
};




// =====temperature conversion====

// my slution (written basically straught from fingertips (apart from Math.round)! Very easy):

function ftocPio (fa) {
ceConverted = ((fa - 32) * (5 / 9));
ceConverted = Math.round((ceConverted) * 10) / 10;
return ceConverted
};
ftoc(10);


function ctofPio (ce) {
  faConverted = (ce * (9 / 5)) + 32;
  faConverted = Math.round((faConverted) * 10) / 10;
return faConverted
};
ctof(10);


// from net math round:
var numb= 34.533423131231;
var rounded = Math.round((numb + 0.345) * 10) / 10;
console.log(rounded);


// somewhat elegant solution from Odin:
const ftoc = function(f) {
  return Math.round((f - 32) * (5/9) * 10) / 10
 };
 
 const ctof = function(c) {
   return Math.round(((c * 9/5) + 32) * 10) / 10
 };