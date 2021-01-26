do{
    lado6= parseFloat(prompt("Ingrese el numero de asteriscos que quiere que los lados de las figuras tengan")); }
 while (isNaN(lado6) || lado6 < 0);

let Espacingcounter=lado6-1
let printline2=""
let asteriscosline=""
let asteriscoscounter=0
let espacecontando=0


while(asteriscoscounter<lado6){
asteriscosline=asteriscosline+"*"
asteriscoscounter=asteriscoscounter+1
}
while(Espacingcounter>0){
while(espacecontando<Espacingcounter){
printline2=printline2+" "
espacecontando=espacecontando+1
}
Espacingcounter=Espacingcounter-1
printline2=printline2+asteriscosline
console.log(printline2)
printline2=""
espacecontando=0}
