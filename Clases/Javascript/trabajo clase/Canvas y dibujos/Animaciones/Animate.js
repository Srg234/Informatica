let canvas3=document.querySelector('#miCanvas3')
let ctx = canvas3.getContext("2d")
ctx.beginPath()

function DrawPawn(xCentral,yCentral){
    ctx.beginPath()
    ctx.lineWidth= 1
    
    ctx.strokeStyle="#F9E4B7"
    ctx.arc(xCentral+3, 35+yCentral, 6, Math.PI*0, 2* Math.PI);
    
    ctx.moveTo(xCentral+3,41+yCentral)
    ctx.lineTo(xCentral-6,42+yCentral)
    ctx.lineTo(xCentral+3,43+yCentral)
    ctx.lineTo(xCentral,49+yCentral)
    ctx.lineTo(xCentral-3,53+yCentral)
    ctx.lineTo(xCentral-4,54+yCentral)
    ctx.lineTo(xCentral-5,56+yCentral)
    ctx.lineTo(xCentral-13,60+yCentral)
    ctx.lineTo(xCentral-13,64+yCentral)
    ctx.lineTo(xCentral+19,64+yCentral)
    ctx.lineTo(xCentral+19,60+yCentral)
    ctx.lineTo(xCentral+11,56+yCentral)
    ctx.lineTo(xCentral+9,54+yCentral)
    ctx.lineTo(xCentral+9,53+yCentral)
    ctx.lineTo(xCentral+6,49+yCentral)
    ctx.lineTo(xCentral+3,43+yCentral)
    ctx.lineTo(xCentral+11,42+yCentral)
    ctx.lineTo(xCentral+3,41+yCentral)
    ctx.stroke()
ctx.fill()}
    let x1= 0;
    let y1= 300;
    let x2=750
    let y2=0
    let x3=1500
    let y3=0
    let vX1 = 40; // en px/s
    let vY1=200
    let vX2 = 100; // en px/s
    let vY2=100
let dT = 20; // en milisegundos
function moverYDibujar(){
    ctx.clearRect(0,0, 2000, 2000);
    let dX1 = (dT/1000) * vX1;
    let dY1 = (dT/1000) * vY1
    let dX2 = (dT/1000) * vX2;
    let dY2 = (dT/1000) * vY2// desplazamiento
     x1 = x1 + dX1;// se cambia el valor de la x
    y1 = 300

    DrawPawn(x1,y1)

    y2=y2+dY1
    DrawPawn(x2,y2)

    x3=x3-dX2
    y3=y3+dY2
    DrawPawn(x3,y3)

}
window.setInterval(moverYDibujar,dT)
    