do{
lado9 = parseFloat(prompt("Ingrese el numero de asteriscos que quiere que los lado9s de las figuras tengan")); }
  while (isNaN(lado9) || lado9 < 0);
let printline3=""
let Starcount=lado9
let starCOUNTER=0
while(Starcount>0){
while(starCOUNTER<Starcount){
printline3=printline3+"*"
starCOUNTER=starCOUNTER+1
}
Starcount=Starcount-1
console.log(printline3)
printline3=""
starCOUNTER=0}