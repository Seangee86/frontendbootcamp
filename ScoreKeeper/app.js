const p1Button = document.querySelector('#p1button');
const p2Button = document.querySelector('#p2button');
const p1Display = document.querySelector('#p1display');
const p2Display = document.querySelector('#p2display');


let p1Score = 0;

p1Button.addEventListener('click', function () {
   p1Score += 1;
   p1Display.textContent = p1Score;
});

