// function printHeart() {
//     console.log("<3")
// }
// printHeart();

// function greet(firstName) {
//     console.log(`Hello ${firstName}`)
// }

// greet('Sean');
// greet('Alicia');

// function rant(message) {
//     console.log(`${message}`.toUpperCase());
//     console.log(`${message}`.toUpperCase());
//     console.log(`${message}`.toUpperCase());
// }
// rant("I hate beets");

// function rant(message) {
//     console.log(message.toUpperCase())
//     console.log(message.toUpperCase())
//     console.log(message.toUpperCase())
// }
// rant('I hate bees');

// function rant(message) {
//     for(let i=1; i <= 3; i++) {
//         console.log(`${message}`.toUpperCase());
//     }
// }
// rant('I hate bees');

// function greet(firstName, lastName) {
//     console.log(`Hey there ${firstName} ${lastName}`)
// }
// greet('Sean', 'gee');

// function repeat(str, reps) {
//     let result = "";
//     for(let i = 0; i < reps; i++) {
//        result += str;
//     }
//     console.log(result);
// }
// repeat('shit ', 10);

// define isSnakeEyes below:

// function isSnakeEyes(num1, num2) {
//     if(num1 === 1 && num2 === 1) {
//         console.log('snake eyes')
//     }else {
//         console.log('Not snake eyes')
//     }
// }
// isSnakeEyes(1, 1);

// DEFINE YOUR FUNCTION BELOW:

// function multiply(num1, num2) {
//     return num1 * num2;
// }
// multiply(3, 5);

// DEFINE YOUR FUNCTION BELOW:

// function isShortWeather(temp) {
//     if( temp >= 75) {
//         return true;
//     }else {
//         return false;
//     }
// }
// isShortWeather(66);

// DEFINE YOUR FUNCTION BELOW:

// function lastElement(array) {
//    if(array.length === 0) {
//        return null;
//    }else {
//        return array[array.length -1];
//    }
// }
// lastElement([2,4,5,5,6]);


// function capitalize(str) {
//     let firstLetter = str.slice(0,1).toUpperCase();
//     let restOfStr = str.slice(1);
//     return firstLetter + restOfStr; 
// }
// capitalize("sean");

//SUM ARRAY EXERCISE
// function sumArray(arrNum) {
//    let total = 0;
//    for(let i = 0; i < arrNum.length; i++) {
//        total += arrNum[i]
//    }
//    return total;
// }
// sumArray([1,2,3,4,5,4,3,4,5,4,5,6,5,4]);

// DAYS OF THE WEEK EXERCISE

// function returnDay(num) {
//     let weeks = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
//     if (num < 1 || num > 7){
//         return null;
//     } else if (num === 1) {
//         return weeks[0];
//     }else if (num === 2) {
//         return weeks[1];
//     }else if (num === 3) {
//         return weeks[2];
//     }else if (num === 4) {
//         return weeks[3];
//     }else if (num === 5) {
//         return weeks[4];
//     }else if (num === 6) {
//         return weeks[5];
//     }else if (num === 7) {
//         return weeks[6];
//     }                    
// return weeks;
// }
// returnDay(1);



// function returnDay(num){
//     if (num < 1 || num > 7){
//         return null
//     }    
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//     return days[num]
// }
// returnDay(1);
