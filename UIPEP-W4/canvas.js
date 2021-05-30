let myCanvas = document.querySelector('.board'); 
let context  = myCanvas.getContext('2d');
// resizing
myCanvas.height = window.innerHeight;
myCanvas.width = window.innerWidth;


// let x = 0;
// let y = 0;

// window.requestAnimationFrame(function loop(){
//     context.clearRect(0, 0, myCanvas.width, myCanvas.height);

//     context.fillStyle='orange';
//     context.fillRect(x , 100, 200,200);
    
//     context.fillStyle='red';
//     context.fillRect(400, y, 200,200);

//     context.fillStyle = 'blue';
//     context.fillText('SlideSlideSlide', x, 100, 200)

//     window.requestAnimationFrame(loop);
//     drawEllipse();
//     drawText();
// });

// document.addEventListener('keypress', function(event) {
//     if(event.button === 0) {
//         x = x + 50;
//     }
//     else if(event.button === 2) {
//         y = y + 50;
//     }
//     else {
//         x = x + 50;
//         y = y + 50;
//     }
// })

// const drawEllipse = function() {
//     context.beginPath();
//     context.ellipse(400, 400, 100, 100, 0, 0, 6.28, false);
//     context.fill();
    // context.stroke();

//     context.beginPath();
//     context.arc(600, 500, 100, 0, 6.28), false
//     context.fillStyle = 'crimson';
//     context.fill();
// }

// text--------
// function drawText(){
//     context.save();
//     context.textAlign = 'end';
//     context.baseLine = 'alphabetic';
//     context.fillStyle = 'blue';
//     context.font = 'bold 20px monospace';

//     text = "Please Enter a Message";

//     context.fillText(text, 1000,500);
//     context.reset();
// }
// let midx = myCanvas.width/2;
// let midy = myCanvas.height/2;

// let midx1 = myCanvas.width/8;
// let midy1 = myCanvas.height/8;

// lines and curves---------
// document.addEventListener('DOMContentLoaded', (ev) => {
//     myCanvas.addEventListener('mousedown',drawLineStart);
    // myCanvas.addEventListener('mouseup',drawLineEnd); 
    // myCanvas.addEventListener('mouseup',qcEnd);
//     myCanvas.addEventListener('mouseup',bcEnd);
    // context.lineCap = 'round';
//     context.lineWidth = 10;

//     context.lineWidth = 5;
//     context.beginPath();
//     context.arc(midx, midy, 5, 0, 2 * 3.14, false);
//     context.strokeStyle = 'red';
//     context.stroke();
// });

// const drawLineStart = function(ev){
//     context.beginPath();
//     context.strokeStyle = 'green';
//     context.moveTo(ev.offsetX,ev.offsetY);
// }

// const drawLineEnd = function(ev){
//     context.lineTo(ev.offsetX,ev.offsetY);
//     context.stroke();
// }

// const qcEnd = function(ev){
//     let end1 = ev.offsetX;
//     let end2 = ev.offsetY;
//     context.quadraticCurveTo( midx, midy, end1, end2);
//     context.stroke();
// }

// const bcEnd = function(ev){
//     context.bezierCurveTo(midx, midy, midx1, midy1, ev.offsetX, ev.offsetY);
//     context.stroke();
// }

//Images----------
// document.addEventListener('DOMContentLoaded', (ev) => {
//     let image = new Image();

//     image.src = "./images/heroes1.jpg";

//     image.onload = function() {
//         context.drawImage(image, myCanvas.width/4, myCanvas.height/4, myCanvas.width/2, myCanvas.height/2);
//     } 
// });


// const greyScale =  function(ev) {
//     let imgData = context.getImageData(myCanvas.width/4, myCanvas.height/4, myCanvas.width/2, myCanvas.height/2);
//     let arr = imgData.data;
//     for(let i = 0; i < arr.length; i += 4){
//         let ttl = arr[i] + arr[i+1] + arr[i+2];
//         let avg = parseInt(ttl/3);
//         arr[i] = avg; //red
//         arr[i+1] = avg; //green
//         arr[i+2] = avg; //blue //i+3 alpha
//     }
//     imgData.data = arr;
//     context.putImageData(imgData, myCanvas.width/4, myCanvas.height/4);
// } 

// const colorScale = function(ev) {
//     let imgData = context.getImageData(myCanvas.width/4, myCanvas.height/4, myCanvas.width/2, myCanvas.height/2);
//     let arr = imgData.data;
//     for(let i = 0; i < arr.length; i += 4){
//         let ttl = arr[i] + arr[i+1] + arr[i+2];
//         let avg = parseInt(ttl/3);
//         // arr[i] = 0; //red
//         // arr[i+1] = 0; //green
//         arr[i+2] = 0; //blue //i+3 alpha
//     }
//     imgData.data = arr;
//     context.putImageData(imgData, myCanvas.width/4, myCanvas.height/4);
// } 

// myCanvas.addEventListener('click', greyScale);
// // myCanvas.addEventListener('click', colorScale);
// pie chart--------
// let data = [{name:'Targaryen',troops:127000},
//             {name:'Tully',troops:120000},
//             {name:'Lannister',troops:180000},
//             {name:'Baratheon',troops:210000},
//             {name:'Tyrell',troops:150000}
// ];

// const randomHexValue = function() {
//     return '#' + Math.random().toString(16).slice(2,8);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     let total = data.reduce( ( ttl, house) => {
//         return ttl + house.troops;    
//     }, 0);

//     let cx = myCanvas.width /2;
//     let cy = myCanvas.height /2;
//     let radius = 150;
//     let startAngle = 0;

//     data.forEach( house => {
//         context.fillStyle = randomHexValue();
//         context.lineWidth = 1;
//         context.strokeStyle = 'crimson';
        
//         context.beginPath();
//         // console.log(total, house.troops, house.troops/total);
//         let endAngle = ((house.troops / total) * Math.PI *2) + startAngle;

//         context.moveTo(cx, cy);
//         context.arc( cx, cy, radius, startAngle, endAngle, false);
        
//         context.lineTo(cx, cy);
//         context.fill();
//         context.stroke();
//         context.closePath();

//         context.beginPath();
//         context.font = '20px monospace, arial';
//         context.textAlign = 'center';
//         context.fillStyle = 'purple';

//         let theta = (startAngle + endAngle) / 2;
//         let deltaY = Math.sin(theta) * 1.5 * radius;
//         let deltaX = Math.cos(theta) * 1.5 * radius;

//         context.fillText(house.name, deltaX+cx, deltaY+cy);

//         startAngle = endAngle;
//     })
// })
