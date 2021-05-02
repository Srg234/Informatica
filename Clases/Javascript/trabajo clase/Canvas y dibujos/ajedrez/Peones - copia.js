let canvas2=document.querySelector('#miCanvas2')
let ctx = canvas2.getContext("2d")
function straightline(x,SizeSelect){

let FirstSquareY=25+(45*SizeSelect)
let SecondSquareY=25


ctx.beginPath()
do{
ctx.fillRect(x,SecondSquareY,45*SizeSelect, 45*SizeSelect)
ctx.strokeRect(x+1,FirstSquareY,45*SizeSelect, 45*SizeSelect)
ctx.strokeRect(x+45*SizeSelect,SecondSquareY,45*SizeSelect, 45*SizeSelect);
ctx.fillRect(x+45*SizeSelect,FirstSquareY,45*SizeSelect, 45*SizeSelect)

FirstSquareY=FirstSquareY+90*SizeSelect;
SecondSquareY=SecondSquareY+90*SizeSelect}
while(FirstSquareY<70*5*SizeSelect)}
//si el tamaño es mayor a 3 no se centra bien en el tablero por lo que no se dibuja el tablero(Si logro descubrir cómo lo arreglaré más tarde)
//cambie SizeSelect para cambiar el tamaño de los peones
let SizeSelect= 4

let Xcambiante=25


if(SizeSelect<=3&&SizeSelect>=1){
    do{
    straightline(Xcambiante,SizeSelect)
    Xcambiante=Xcambiante+90*SizeSelect}
    while(Xcambiante<70*5*SizeSelect)}


function DrawPawn(xCentral,yCentral,SizeSelect,ColorSelect){
ctx.beginPath()
ctx.lineWidth= 1

ctx.strokeStyle="#F9E4B7"
ctx.arc((xCentral*SizeSelect)+3*SizeSelect, 35*SizeSelect+(yCentral*SizeSelect), 6*SizeSelect, Math.PI*0, 2* Math.PI);

ctx.moveTo((xCentral*SizeSelect)+3*SizeSelect,41*SizeSelect+(yCentral*SizeSelect))
ctx.lineTo((xCentral*SizeSelect)-6*SizeSelect,42*SizeSelect+(yCentral*SizeSelect))
ctx.lineTo((xCentral*SizeSelect)+3*SizeSelect,43*SizeSelect+(yCentral*SizeSelect))
ctx.lineTo((xCentral*SizeSelect),49*SizeSelect+(yCentral*SizeSelect))
ctx.lineTo((xCentral*SizeSelect)-3*SizeSelect,53*SizeSelect+(yCentral*SizeSelect))
ctx.lineTo((xCentral*SizeSelect)-4*SizeSelect,54*SizeSelect+(yCentral*SizeSelect))
ctx.lineTo((xCentral*SizeSelect)-5*SizeSelect,56*SizeSelect+(yCentral*SizeSelect))
ctx.lineTo((xCentral*SizeSelect)-13*SizeSelect,60*SizeSelect+(yCentral*SizeSelect))
ctx.lineTo((xCentral*SizeSelect)-13*SizeSelect,64*SizeSelect+(yCentral*SizeSelect))
ctx.lineTo((xCentral*SizeSelect)+19*SizeSelect,64*SizeSelect+(yCentral*SizeSelect))
ctx.lineTo((xCentral*SizeSelect)+19*SizeSelect,60*SizeSelect+(yCentral*SizeSelect))
ctx.lineTo((xCentral*SizeSelect)+11*SizeSelect,56*SizeSelect+(yCentral*SizeSelect))
ctx.lineTo((xCentral*SizeSelect)+9*SizeSelect,54*SizeSelect+(yCentral*SizeSelect))
ctx.lineTo((xCentral*SizeSelect)+9*SizeSelect,53*SizeSelect+(yCentral*SizeSelect))
ctx.lineTo((xCentral*SizeSelect)+6*SizeSelect,49*SizeSelect+(yCentral*SizeSelect))
ctx.lineTo((xCentral*SizeSelect)+3*SizeSelect,43*SizeSelect+(yCentral*SizeSelect))
ctx.lineTo((xCentral*SizeSelect)+11*SizeSelect,42*SizeSelect+(yCentral*SizeSelect))
ctx.lineTo((xCentral*SizeSelect)+3*SizeSelect,41*SizeSelect+(yCentral*SizeSelect))
ctx.fillStyle=ColorSelect
    ctx.fill()
ctx.stroke()}
let xBase=45-((SizeSelect-1)*8)
for(let xBase=45-((SizeSelect-1)*8); xBase < (8*45)+1; xBase= xBase+45){

    DrawPawn(xBase,45-((SizeSelect-1)*8),SizeSelect,"#F9E4B7")
    
    }
    

for(let xBase2=45-((SizeSelect-1)*8); xBase2< (8*45)+1; xBase2= xBase2+45){
    DrawPawn(xBase2,270-((SizeSelect-1)*8),SizeSelect,"black")
    
    ctx.stroke()
    }



    