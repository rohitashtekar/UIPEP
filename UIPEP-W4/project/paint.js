let canvas = document.querySelector('.canvas'); 
let context  = canvas.getContext('2d');

// canvas styling
canvas.height = window.innerHeight - 150;
canvas.width = window.innerWidth - 20;
canvas.style.backgroundColor = 'white';
canvas.style.margin = '10px';
canvas.style.boxShadow = '0px 2px 8px 2px black';

// declaration
let painting = false;

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

    let inputColor = document.querySelector('.color');
    context.fillStyle = inputColor;

    context.lineWidth = 5;
    context.lineCap = 'round';

    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();

    context.moveTo(e.offsetX, e.offsetY);

   
}

// event listeners
canvas.addEventListener('mousedown', startPos);
canvas.addEventListener('mouseup', stopPos);
canvas.addEventListener('mousemove', draw);

// options



