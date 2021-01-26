do{
    lado10= parseFloat(prompt("Ingrese el numero de asteriscos que quiere que los lados de las figuras tengan")); }
    while (isNaN(lado10) || lado10 < 0);
let printline4=""
let espacioCOUNTer=0
let asteriscocounter=lado10
let espacioN=0
let asteriscoCOUNTer=0
while(espacioCOUNTer<=lado10-1){
while(asteriscoCOUNTer<asteriscocounter){
printline4=printline4+"*"
asteriscoCOUNTer=asteriscoCOUNTer+1
}
if(espacioCOUNTer>0){
while(espacioN<espacioCOUNTer){
printline4=" "+printline4
espacioN=espacioN+1}

espacioN=0
}
console.log(printline4)
printline4=""
asteriscoCOUNTer=0
asteriscocounter=asteriscocounter-1
espacioCOUNTer=espacioCOUNTer+1}
