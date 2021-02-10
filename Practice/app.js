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

const h1 = document.querySelector("h1");
const input = document.querySelector("input");
 
input.addEventListener("input", function() {
    if(this.value) {
        h1.innerText = `Welcome, ${this.value}`;
    } else {
        h1.innerText = "Enter Your Username";
    }
});
