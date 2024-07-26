let history = [];

const colorPicker = document.getElementById('colorPicker');
const canvasColor = document.getElementById('canvaColor');
const canvas = document.getElementById('myCanvas');
const undoButton = document.getElementById('undoButton');
const fontPicker = document.getElementById('fontPicker');
const clearButton = document.getElementById('clearButton');
const saveButton = document.getElementById('saveButton');
const retriveButton = document.getElementById('retriveButton');
const fontSizePicker = document.getElementById('fontSizePicker');

var isDrawing = false;
const ctx = canvas.getContext('2d');

colorPicker.addEventListener('change', (e) =>{
    ctx.fillStyle = e.target.value;
    ctx.strokeStyle = e.target.value;
});

canvasColor.addEventListener('change', (e) => {
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0,0,800,500);
});

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
    if(isDrawing == true){
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        lastX = e.offsetX;
        lastY = e.offsetY;
    }
});

canvas.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

fontSizePicker.addEventListener('change', (e) => {
    ctx.lineWidth = e.target.value;
});

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

saveButton.addEventListener('click', () => {
    localStorage.setItem('canvasContents', canvas.toDataURL());

    let link = document.createElement('a');

    link.download = 'my-canvas.png';
    link.href = canvas.toDataURL();

    link.click();
});

retriveButton.addEventListener('click', () => {
    let savedCanvas = localStorage.getItem('canvasContents');

    if(savedCanvas) {
        let img = Image();
        img.src = savedCanvas;
        ctx.drawImage(img, 0, 0);
    }
});