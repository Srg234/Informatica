let rgb1=Math.floor(Math.random(255)*255).toFixed(0)
let rgb2=Math.floor(Math.random(255)*255).toFixed(0)
let rgb3=Math.floor(Math.random(255)*255).toFixed(0)
rgb=`rgb(${rgb1},${rgb2},${rgb3})`
function randomcolor (){
let rgb1=Math.floor(Math.random(255)*255).toFixed(0)
let rgb2=Math.floor(Math.random(255)*255).toFixed(0)
let rgb3=Math.floor(Math.random(255)*255).toFixed(0)
rgb=`rgb(${rgb1},${rgb2},${rgb3})`
return rgb}
let canvas = document.querySelector("#miCanvas3")



// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")

function dibujarBoton(xC, yC, r){
    // dibujo el circulo
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
   
    ctx.fillStyle = `${rgb}`;
    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();

    
    
}

let x = 800;
let y = 0;

let vY = 10;// en px/s
let dT = 30;
let r = 10
function moverYDibujar(){
    ctx.clearRect(0,0, 2000, 800);
    let dY = dT/1000 *vY
    y = y + dY;
    dibujarBoton(x, y, r);
}

function arrancarOParar(){
    if (vY > 0){
        vY = 0;
    }
    else{
        vY = 10;
    }
}

window.setInterval(moverYDibujar, dT);

// Quiero que arranque o pare cuando presiones la tecla espacio.
// Para hacer esto se debe usar un event listener.


window.onkeyup=function(event)
//window.onclick para detectar un click
{

    
    if(event.code=="Space" )
    {
        arrancarOParar();
}
if(event.code=="NumpadAdd" )
    {
      r=r+1  ;
    }
    if(event.code=="NumpadSubtract" )
    {
      r=r-1  ;
    }
}
window.onclick=function(event){
   
if(event.offsetX<x+r&&event.offsetX>x-r&&event.offsetY<y+r&&event.offsetY>y-r){
randomcolor()
ctx.fillStyle = `${rgb}`;


}
else{
vY=-vY    
}
}
