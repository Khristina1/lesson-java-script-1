let message = "Hello JavaScript";
alert(message);
// лет це змінна
message = "Nice to see you";
alert(message);

// функція яка дозволяє взяти у користувача дані
const userAge = parseInt(prompt('Enter your age'));
alert('Your age is : ' + userAge);

const nextAge =  addOne(userAge) ;
alert('Next year you will be: '+ nextAge);

// Типи даних (їх є 7):

// String: 'Hello', "Hello", `Hello`
// Number: 1, 0.1, 10e20, NaN, Infinity
// Boolean: true, false
// Undefined
// Null
// Object
// Symbol

// parseInt(promt ) дістає з тексту ціле число

if (userAge >= 18 && userAge < 65) { // > < >= <= == - не строга рівність === - строга рівність || - логічне або && - логічне і
alert('You are adult');
} else if (userAge >=65) {
    alert('You are grandpapa');
   } else{
     alert('You are kid');
}

function addOne(value){
    const newValue= value+1; //const -це стала величина, змінити її більше не можна
return newValue;
}
