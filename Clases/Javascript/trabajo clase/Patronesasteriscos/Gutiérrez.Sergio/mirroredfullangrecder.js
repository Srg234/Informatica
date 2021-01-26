do{
lado8= parseFloat(prompt("Ingrese el numero de asteriscos que quiere que los lados de las figuras tengan")); }
while (isNaN(lado8) || lado8 < 0);
let espacioscount=lado8-1
let printline= ""
let espacioscounter=0
let asteriscoscount=0
let asteriscosPorlinea="*"
while(asteriscoscount<lado8){
  while(espacioscount>espacioscounter){
  printline=printline+" "
  espacioscounter=espacioscounter+1}
  printline=printline+asteriscosPorlinea
  console.log(printline)
  asteriscosPorlinea=asteriscosPorlinea+"*"
  espacioscounter=0
  espacioscount=espacioscount-1
  printline=""
  asteriscoscount=asteriscoscount+1}

