// const h = document.querySelector('#hello');
// const g = document.querySelector('#goodbye')

// h.addEventListener('click', function() {
//     console.log('Hello');
// })

// g.addEventListener('click', function() {
//     console.log('Goodbye');
// })

// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass

// All selecting these elements and setting them to a variable 
// const form = document.querySelector('form');
// const product = document.querySelector('#product');
// const quantity = document.querySelector('#qty');
// const groceryList = document.querySelector('#list');
// //

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const newList = document.createElement('li');
//     newList.innerHTML = `${quantity.value} ${product.value}`;
//     groceryList.appendChild(newList);
//     quantity.value = "";
//     product.value = "";
// })

// const h1 = document.querySelector("h1");
// const input = document.querySelector("input");
 
// input.addEventListener("input", function() {
//     if(this.value) {
//         h1.innerText = `Welcome, ${this.value}`;
//     } else {
//         h1.innerText = "Enter Your Username";
//     }
// });

// function rollDie() {
//     let roll = Math.floor(Math.random()* 6 + 1);
//     console.log(`Rolled: ${roll}`)
// }
// rollDie();

// function greet(firstName) {
//     console.log(firstName);
// }
// greet('Sean')

// function rollDie() {
//         let roll = Math.floor(Math.random()* 6) + 1;
//         console.log(`Rolled: ${roll}`);
// }
// function throwDice(numRolls) {
//     for(i = 0; i < numRolls; i++) {
//     rollDie()  
//     }
// }
// throwDice(1);

function rollDie() {
    let die1 = Math.floor(Math.random()* 6) + 1;
    let die2 = Math.floor(Math.random()* 6) + 1;
    let die3 = Math.floor(Math.random()* 6) + 1;
    let die4 = Math.floor(Math.random()* 6) + 1;
    let die5 = Math.floor(Math.random()* 6) + 1;
    console.log(`Die 1: ${die1}`);
    console.log(`Die 2: ${die2}`);
    console.log(`Die 3: ${die3}`);
    console.log(`Die 4: ${die4}`);
    console.log(`Die 5: ${die5}`);
}
function throwDice(numRolls) {
for(i = 0; i < numRolls; i++) {
rollDie()  
}
}
throwDice(1);






             