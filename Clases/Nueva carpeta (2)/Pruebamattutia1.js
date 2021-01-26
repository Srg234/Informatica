let nnotas
let nota
let y=0
let notas11=[]
do {
  nnotas=parseFloat(prompt("Ingrese su numero de notas"))}
   while (nnotas<=0 || isNaN(nnotas));
let notas
do {
 nota=parseFloat(prompt("Ingrese sus notas"))
 if (0<=nota  && nota<=10 && y<nnotas) {
   y=y+1;
   notas11.push(nota)
} 
   else{y=y+0}
}
 while (y<nnotas);
