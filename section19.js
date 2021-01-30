// Section 19 - Loops

// for ( let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 6; i++) {
//     console.log(i,"Da ba dee da ba daa");
// }

// Print even numbers 0 - 20

// for (let i = 0; i <= 20; i++) {
//     if ( i % 2 === 0) {
//         console.log(i)
//     }
// }

// Evan Numbers
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// } 

// Odd Numbers
// for (let i = 1; i <= 19; i += 2) {
//     console.log(i);
// }

// for (let i = 12; i <= 47; i += 5) {
//     console.log(i);
// }

// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0

// for (let i = 25; i >= 0; i -= 5) {
//     console.log(i);
// }

// const animals = ['lions', 'wolfs', 'otters']

//     for (let i = 0; i < animals.length; i ++) {
//         console.log(i, animals[i]);
//     }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }

// for ( let i = 1; i <= 10; i ++) {
//     console.log(`i is: ${i}`);
//     for (let j = 1; j <= 3; j++) {
//         console.log(`    j is: ${j}`);
//     }
// }

// const seatingChart = [
//     ['sean', 'alicia', 'paul'],
//     ['mike', 'adrian', 'doug'],
//     ['aaron', 'jack', 'marcus']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

// const secret = "babyhippo";

// let guess = prompt("Enter Code");
// while ( guess !== secret) {
//     guess = prompt( "Enter Code")
// }
// console.log("Good Job");

// const subreddits = [ 'cring', 'books', 'chickens'];

// for (let titles of subreddits) {
//     console.log(titles);
// }

// const seatingChart = [
//     ['person1', 'person2', 'person3', 'person4'],
//     ['person5', 'person6', 'person7', 'person8'],
//     ['person9', 'person10', 'person11', 'person12'],
//     ['person13', 'person14', 'person15', 'person16']
// ]

// for (let row of seatingChart) {
//     console.log(row);
// }

// for (let row of seatingChart) {
//     for (let student of row) 
//         console.log(student);
//     }
// } 

// const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (num of numbers) {
//     console.log(num * num);
// }

// TODO List 

let input = prompt("What would you like to do?")
const todo = ['make bed', 'trash'];
while (input !== 'quit' && input !== 'q') {
    if(input === 'list') {
        console.log('***********');
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log('***********');
    }else if (input === 'new') {
        const newTodo = prompt('What is the new todo?');
        todo.push(newTodo);
        console.log(`${newTodo} added to the new list!`)
    }else if (input === 'del') {
        const index = prompt('index to del')
        todo.slice(index, 1);
        console.log(index);
    }
    input = prompt("What would you like to do?")
}
console.log('ok, quitting')
