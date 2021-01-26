let var10=""
let var20=0
let var30=0
let lado6
do {
  

lado6= parseFloat(prompt("Ingrese el numero de asteriscos que quiere que los lados de las figuras tengan")); }
  while (isNaN(lado6) || lado6 < 0);

do{
var10=var10+"*"
var20=var20+1
}
while(var20<lado6)
do{
console.log(var10)
var30=var30+1
var10=" "+var10
}
while(var30<lado6)