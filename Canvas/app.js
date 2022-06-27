


window.addEventListener('load', function() {
 const canvas = this.document.querySelector('canvas');

 
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

ctx.fillStyle = "blue";
ctx.fillRect(200, 200, 200, 200);
ctx.stroke();

ctx.fillStyle = "green";
ctx.fillRect(500, 200, 200, 200);
ctx.stroke();

ctx.fillStyle = "yellow";
ctx.fillRect(800, 200, 200, 200);
ctx.stroke();

ctx.fillStyle = "red";
ctx.fillRect(1100, 200, 200, 200);
ctx.stroke();


let painting = false;

const startPainting = function() {
painting = true;
console.log("painting motherfuckaaa");
};

const finishedPainting = function() {
painting = false;
console.log("done painting motherfuckaaa");
};

const draw = function() {
    if (!painting) return;
    
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.beginPath(event.clientX, event.client)
    ctx.lineTo(event.clientX, event.clientY);
    ctx.stroke();
    


};
 
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", finishedPainting);
canvas.addEventListener("mousemove", draw);
});