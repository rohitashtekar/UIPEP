let myCanvas = document.querySelector('.board'); 
let context  = myCanvas.getContext('2d');
// resizing
myCanvas.height = window.innerHeight;
myCanvas.width = window.innerWidth;


let x = 0;
let y = 0;

window.requestAnimationFrame(function loop(){
    context.clearRect(50, 50, myCanvas.width, myCanvas.height);
    
    context.fillStyle='orange';
    context.fillRect(x , 100, 200,200);
    
    context.fillStyle='red';
    context.fillRect(400, y, 200,200);

    window.requestAnimationFrame(loop);
});

document.addEventListener('keypress', function(event) {
    if(event.button === 0) {
        x = x + 50;
    }
    else if(event.button === 2) {
        y = y + 50;
    }
    else {
        x = x + 50;
        y = y + 50;
    }
})