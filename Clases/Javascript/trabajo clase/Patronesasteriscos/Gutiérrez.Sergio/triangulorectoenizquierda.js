do{
lado7= parseFloat(prompt("Ingrese el numero de asteriscos que quiere que los lados de las figuras tengan")); }
  while (isNaN(lado7) || lado7 < 0);
  let lineasumando=""
  let starCounting=0
  let greatering=1 



while(greatering<=lado7){
  while (starCounting<greatering){
  lineasumando=lineasumando+"*"
  starCounting=starCounting+1
  }
  console.log(lineasumando)
lineasumando=""
starCounting=0
greatering=greatering+1
}






































































