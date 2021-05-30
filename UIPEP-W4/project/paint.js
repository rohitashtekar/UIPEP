let canvas = document.querySelector('.canvas'); 
let context  = canvas.getContext('2d');

// canvas styling
canvas.height = window.innerHeight - 150;
canvas.width = window.innerWidth - 20;
canvas.style.backgroundColor = 'white';
canvas.style.margin = '10px';
canvas.style.boxShadow = '0px 2px 8px 2px black';


let painting = false;
let penSize = 5;

context.fillStyle = 'black';

function startPos(e) {
    if(e.button === 0){
        painting = true;
        draw(e);
    }   
}

function stopPos() {
    painting = false;
    context.beginPath();
}

function draw(e) {
    
    if(!painting) {return}

    context.strokeStyle = context.fillStyle;
    

    context.lineWidth = penSize;
    context.lineCap = 'round';

    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();

    context.moveTo(e.offsetX, e.offsetY);
}

canvas.addEventListener('mousedown', startPos);
canvas.addEventListener('mouseup', stopPos);
canvas.addEventListener('mousemove', draw);

// options
const changeColor = (color) => {
    context.fillStyle = color;
}

function penSizeChange(pensize) {
    penSize = pensize;
}

let eraser = document.querySelector('.eraser')
eraser.addEventListener('click', () => {
    context.fillStyle = 'white';
})

document.querySelector('.reset-btn').addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});
