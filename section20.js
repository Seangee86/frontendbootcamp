// function printHeart() {
//     console.log("<3")
// }
// printHeart();

// function greet(firstName) {
//     console.log(`Hello ${firstName}`)
// }

// greet('Sean');
// greet('Alicia');

function rant(message) {
    console.log(`${message}`.toUpperCase());
    console.log(`${message}`.toUpperCase());
    console.log(`${message}`.toUpperCase());
}
rant("I hate beets");

function rant(message) {
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
}
rant('I hate bees');

function rant(message) {
    for(let i=1; i <= 3; i++) {
        console.log(`${message}`.toUpperCase());
    }
}
rant('I hate bees');
