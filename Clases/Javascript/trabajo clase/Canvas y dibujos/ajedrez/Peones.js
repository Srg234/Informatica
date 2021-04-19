let canvas2=document.querySelector('#miCanvas2')
let ctx = canvas2.getContext("2d")
function straightline(x){

let FirstSquareY=70
let SecondSquareY=25


ctx.beginPath()
do{
ctx.fillRect(x,SecondSquareY,46, 45)
ctx.strokeRect(x+1,FirstSquareY,44, 44)
ctx.strokeRect(x+46,SecondSquareY,44, 44);
ctx.fillRect(x+45,FirstSquareY,46, 45)


FirstSquareY=FirstSquareY+90;
SecondSquareY=SecondSquareY+90}
while(FirstSquareY<341)}

let Xcambiante=25
do{
straightline(Xcambiante)
Xcambiante=Xcambiante+90}
while(Xcambiante<361)

//4 pixeles de espacio entre cuadro y peón, base de 42 pixeles así que se cambia a 5???
//xCentral=45
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

ctx.stroke()}
let xBase=45
for(let xBase=45; xBase < 361; xBase= xBase+45){

    DrawPawn(xBase,45)
    ctx.fillStyle = "#F9E4B7"
    ctx.fill()
    }
    

for(let xBase2=45; xBase2< 361; xBase2= xBase2+45){
    DrawPawn(xBase2,270)
    ctx.fillStyle="black"
    ctx.fill()
    ctx.stroke()
    }
    