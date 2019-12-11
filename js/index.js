// Your code goes here

window.addEventListener('beforeprint', (event) => {
    console.log('Welcome to the the beach!');
});

let logoHeading = document.querySelector('.main-navigation');
console.log(logoHeading);
logoHeading.addEventListener('focus', (event) => {
    logoHeading.target.style.background = 'skyblue';
});

logoHeading.addEventListener('blur', (event) => {
    logoHeading.target.style.background = '';
});

let navDefault = document.querySelectorAll('a');
navDefault[0].addEventListener('click', function(event) {
    event.preventDefault();
});
navDefault[1].addEventListener('click', function(event) {
    event.preventDefault();
});
navDefault[2].addEventListener('click', function(event) {
    event.preventDefault();
});
navDefault[3].addEventListener('click', function(event) {
    event.preventDefault();
});

let navAnchor = document.querySelectorAll('a');
console.log(navAnchor);
navAnchor[0].addEventListener('mouseover', function(event) {
    event.target.style.color = 'blue';
    setTimeout(function() {
        event.target.style.color = '';
    }, 2000);
}, false);

navAnchor[1].addEventListener('mouseover', function(event) {
    event.target.style.color = 'red';
    setTimeout(function() {
        event.target.style.color = '';
    }, 2000);
}, false);
navAnchor[2].addEventListener('mouseover', function(event) {
    event.target.style.color = 'blue'; 
    setTimeout(function() {
        event.target.style.color = '';
    }, 2000);
}, false);
navAnchor[3].addEventListener('mouseover', function(event) {
    event.target.style.color = 'red';
    setTimeout(function() {
        event.target.style.color = '';
    }, 2000);
}, false);

let bodyChange = document.getElementsByTagName('h2');
console.log(bodyChange);
bodyChange[0].addEventListener('mousedown', function(event) {
    event.target.style.background = 'skyblue';
});
bodyChange[1].addEventListener('mousedown', function(event) {
    event.target.style.background = 'pink';
});
bodyChange[2].addEventListener('mousedown', function(event) {
    event.target.style.background = 'aqua';
});
bodyChange[3].addEventListener('mousedown', function(event) {
    event.target.style.background = 'salmon';
});

let image = document.querySelector('.inverse-content img');
console.log(image);
image.addEventListener('dblclick', function(e) {
    console.log(e.target);
    e.target.classList.toggle('rounded');
    
});

let button = document.querySelectorAll('.btn');
console.log(button);
button[0].addEventListener('click', function(event) {
    alert('You thought you were leaving? HA!');
});
button[1].addEventListener('click', function(event) {
    alert('Not letting you out of my site!');
});
button[2].addEventListener('click', function(event) {
    alert('Stuck, eh?');
});

let downArrow = document.querySelector('body');
downArrow.addEventListener('keydown', (event) => {
    console.log(event.keyCode);
    if (event.isComposing || event.keyCode === 40) {
        alert("You're going down!!!");
    }
});

let height = document.querySelector('body');
let width = document.querySelector('body');
function windowSize() {
    height.textContent = window.innerHeight;
    width.textContent = window.innerWidth;
}
window.addEventListener('resize', windowSize);
window.addEventListener('resize', (event) =>
    event.stopPropagation()
    );
//refresh page after resizing.

window.addEventListener('afterprint', (event) => {
    console.log('Hope you had fun at the beach!');
});
