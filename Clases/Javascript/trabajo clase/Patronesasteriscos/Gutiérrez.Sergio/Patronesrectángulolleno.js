let var1=""
let var2=0
let var3=0
let lado
do {
  

lado = parseFloat(prompt("Ingrese el numero de asteriscos que quiere que los lados de las figuras tengan")); }
  while (isNaN(lado) || lado < 0);

do{
var1=var1+"*"
var2=var2+1
}
while(var2<lado)
do{
console.log(var1)
var3=var3+1

}
while(var3<lado)

