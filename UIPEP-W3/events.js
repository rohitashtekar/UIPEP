let image = document.querySelector('.image');
let text = document.createTextNode(image.alt);

image.parentNode.replaceChild(text, image);


let id = null;
let box = document.querySelector('.second')

let btnDown = document.querySelector('.btn-down')
btnDown.addEventListener('click', animateDown);

let btnUp = document.querySelector('.btn-up');
btnUp.addEventListener('click', animateUp);

let btnRight = document.querySelector('.btn-right');
btnRight.addEventListener('click', animateRight);

let btnLeft = document.querySelector('.btn-left');
btnLeft.addEventListener('click', animateLeft);


function animateDown() {
    let position = 0;
    clearInterval(id);

    setInterval(frame, 5);
    function frame(){
        if(position === 400){
            clearInterval(id);
        }
        else {
            position++;
            box.style.top = position + "px";    
        }
    }

}

function animateUp() {
    let position = 400;
    clearInterval(id);

    setInterval(frame, 5);
    function frame(){
        if(position >= 0) {
            box.style.top = position + "px";
            position--;
        }
        else{
            clearInterval(id);
        }
    }

}

function animateRight() {
    let position = 0;
    clearInterval(id);

    setInterval(frame, 5);
    function frame(){
        if(position === 400){
            clearInterval(id);
        }
        else {
            position++;
            box.style.left = position + "px";    
        }
    }

}

function animateLeft() {
    let position = 400;
    clearInterval(id);

    setInterval(frame, 5);
    function frame(){
        if(position >= 0) {
            box.style.left = position + "px";
            position--;
        }
        else{
            clearInterval(id);
        }
    }

}

box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'beige';
    box.innerHTML = "50px";
    box.style.color = 'black';
});

box.addEventListener('mouseout', () => {
    box.style.backgroundColor = 'orange';
    box.innerHTML = "";
});

box.addEventListener('mousedown', () => {
    box.style.height = '100px';
    box.style.width = '100px';
    box.innerHTML = "100px";
    box.style.border= '0.1rem blue solid';
    box.style.color = 'White';
    box.style.backgroundColor = 'dodgerblue';
});

box.addEventListener('mouseup', () => {
    box.style.height = '50px';
    box.style.width = '50px';
    box.style.color = 'White';
    box.style.backgroundColor = 'green';
    box.innerHTML = "50px";
});

let para = document.createElement('p');
para.innerHTML = `Hello World New Element`;
document.querySelector('.first').appendChild(para);

para.innerHTML = `width: ${screen.width}, height: ${screen.height}`;

document.querySelector('.container').addEventListener('click', () => {
    window.scrollBy(0,50);
});

let pos = document.createElement('p');
document.querySelector('.first').appendChild(pos);

window.addEventListener('mousemove', event => {
    let mousePos = null;

    if(!mousePos){
        setTimeout(() => {
            pos.innerHTML = `Mouse at: ${mousePos.pageX},${mousePos.pageY}`;
        }, 100);
    }
    mousePos = event;
});
