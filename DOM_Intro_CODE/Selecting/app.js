const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}

// const banner = document.getElementById('banner');

// for (let ban of banner) {
//     img.src = 
// }

// let image = document.getElementById('unicorn')
// let heading = document.getElementById('mainHeading')

// const text = document.querySelector('span') 

// for(text of span) {
//     text.innerText = 'Disgusting'
// }

// document.querySelector('#egg').setAttribute('src', 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg');
// document.querySelector('#egg').alt = 'chicken';

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
 
// const spans = document.querySelectorAll('span');  // selecting all the spans
// for (let i = 0; i < spans.length; i++) { // looping over the spans list
//     spans[i].style.color = colors[i];  // setting the color property of each span to the corresponding one from the colors array (using the index numbers)
// }
