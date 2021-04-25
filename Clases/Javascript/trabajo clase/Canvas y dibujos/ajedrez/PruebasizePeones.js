let canvas2=document.querySelector('#miCanvas2')
let ctx = canvas2.getContext("2d")

function DrawPawn(xCentral,yCentral,Ux){
    ctx.beginPath()
    ctx.lineWidth= 1
    //base=3x,41y
    ctx.strokeStyle="#F9E4B7"
    ctx.arc(xCentral+Ux, 35+yCentral, 6, Math.PI*0, 2* Math.PI);

ctx.moveTo(xCentral+Ux,41+yCentral)
ctx.lineTo(xCentral-Ux*2,42+yCentral)
ctx.lineTo(xCentral+Ux,43+yCentral)
ctx.lineTo(xCentral+Ux-3,49+yCentral)
ctx.lineTo(xCentral-Ux,53+yCentral)
ctx.lineTo(xCentral-Ux-1,54+yCentral)
ctx.lineTo(xCentral-Ux-2,56+yCentral)
ctx.lineTo(xCentral-Ux-10,60+yCentral)
ctx.lineTo(xCentral-Ux-10,64+yCentral)
ctx.lineTo(xCentral+Ux+16,64+yCentral)
ctx.lineTo(xCentral+Ux+16,60+yCentral)
ctx.lineTo(xCentral+Ux+8,56+yCentral)
ctx.lineTo(xCentral+Ux+6,54+yCentral)
ctx.lineTo(xCentral+Ux+6,53+yCentral)
ctx.lineTo(xCentral+Ux+6,49+yCentral)
ctx.lineTo(xCentral+Ux,43+yCentral)
ctx.lineTo(xCentral+Ux+8,42+yCentral)
ctx.lineTo(xCentral+Ux,41+yCentral)
    
    ctx.stroke()}

    DrawPawn(50,0,3)
    
function DawNormalPawn(xCentral1,yCentral1){
    ctx.beginPath()
    ctx.arc(xCentral1+3, 35+yCentral1, 6, Math.PI*0, 2* Math.PI);

ctx.moveTo(xCentral1+3,41+yCentral1)
ctx.lineTo(xCentral1-6,42+yCentral1)
ctx.lineTo(xCentral1+3,43+yCentral1)
ctx.lineTo(xCentral1,49+yCentral1)
ctx.lineTo(xCentral1-3,53+yCentral1)
ctx.lineTo(xCentral1-4,54+yCentral1)
ctx.lineTo(xCentral1-5,56+yCentral1)
ctx.lineTo(xCentral1-13,60+yCentral1)
ctx.lineTo(xCentral1-13,64+yCentral1)
ctx.lineTo(xCentral1+19,64+yCentral1)
ctx.lineTo(xCentral1+19,60+yCentral1)
ctx.lineTo(xCentral1+11,56+yCentral1)
ctx.lineTo(xCentral1+9,54+yCentral1)
ctx.lineTo(xCentral1+9,53+yCentral1)
ctx.lineTo(xCentral1+6,49+yCentral1)
ctx.lineTo(xCentral1+3,43+yCentral1)
ctx.lineTo(xCentral1+11,42+yCentral1)
ctx.lineTo(xCentral1+3,41+yCentral1)
ctx.stroke()}

DawNormalPawn(90,120)