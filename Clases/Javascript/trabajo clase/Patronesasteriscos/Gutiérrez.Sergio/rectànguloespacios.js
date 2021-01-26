let var4=""
let var5=0
let var6=0
let var7=0
let lado4
do {
  

lado4 = parseFloat(prompt("Ingrese el numero de asteriscos que quiere que los lados de las figuras tengan")); }
  while (isNaN(lado4) || lado4 < 0);

do{
var4=var4+"*"
var5=var5+1
}
while(var5<lado4)
let var8=var4

console.log(var4)
var4="*"
do{
var4=var4+" "
var6=var6+1}
while(var6<lado4-2)
var4=var4+"*"
while(var7<lado4-2){
console.log(var4)
var7=var7+1}
console.log(var8)