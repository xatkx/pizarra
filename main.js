const canvas = document.querySelector('#pizarra');
const ctx = canvas.getContext('2d');


const inputRange = document.querySelector('#range');
const inputColor = document.querySelector('#color');
const inputClear = document.querySelector('#clear');

const keybord = {
    UP: 39,
    LEFT: 37,
    RIGHT: 38,
    DOWN: 40
}

var offsetX
var offsetY

var click = false;

inputClear.addEventListener('click', x => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log('v')
})

canvas.addEventListener('mousedown', events => {
    click = true
    offsetX = events.offsetX;
    offsetY = events.offsetY;
    dibujar(offsetX,offsetY)
    console.log([inputClear,inputColor,inputRange])


})
canvas.addEventListener('mousemove', events => {
    
    if(click)
    dibujar(events.offsetX,events.offsetY)
    
    //console.log(events)
})
canvas.addEventListener('mouseup', x => {
    click = false
})





function dibujar(x,y){
    ctx.strokeStyle = inputColor.value;
    ctx.lineWidth = inputRange.valueAsNumber;
    ctx.lineJoin = "round"
    ctx.lineCap = "round"
    
    ctx.beginPath()
    ctx.moveTo(offsetX,offsetY)
    ctx.lineTo(x,y)
    ctx.stroke()
    ctx.closePath()


    offsetX = x
    offsetY = y
    
}