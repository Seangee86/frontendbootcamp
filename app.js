// let word = "Note"
// let anotherWord = "book"
// console.log(`${word} ${anotherWord}`);

// let letter = "r"
// let anotherLetter = "t"
// console.log(`${letter} ${anotherLetter}`);

// const dayOfWeek = 'Saturday';

// if (dayOfWeek === 'Monday') {
//     console.log(" Yes I love Mondays");
// } else if (dayOfWeek === 'Saturday') {
//     console.log("Fuck, waste of time day");
// }else if (dayOfWeek === 'Friday') {
//     console.log("Here we go");
// }

// const age = 65;

// if (age < 5) {
//     console.log("you gets in for free");
// } else if (age < 10) {
//     console.log("$10 for you to get in");
// } else if (age < 65) {
//     console.log("$20 for you to get in");
// }else {
//     console.log("Senior, only $10 please")
// }


// function getColor(phrase) {
//     //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
//     if (phrase ==='stop') {
//         console.log('red');
//     } else if (phrase === 'slow') {
//         console.log('yellow');
//     } else if (phrase === 'go') {
//         console.log('green');
//     } else {
//         console.log('purple');
//     }
//     // AND THIS LINE ↑↑↑↑↑  
// }

const password = prompt( "Please enter in a new password");

if (password.length >= 6) {
    console.log("Long enough password");
} else {
    console.log("Password too short! 6+ characters");
}