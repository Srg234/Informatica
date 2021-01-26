let contadorEspacios=0//contador espacios
let contadorAsteriscos=0//contador asteriscos
let contadorNasteriscos=2//contador Nasteriscos
let contadorLineas=0//contador lineas
let linea2=""
let reset=0
let lado2
do{
  lado2 = parseFloat(prompt("Ingrese el numero de asteriscos que quiere que los lado2s de las figuras tengan")); 
}while (isNaN(lado2) || lado2 < 0)
let contadorNespacios=Math.round(lado2/2)-1//contador Nespacios

//   **
//  ****

//  *


if(lado2%2==0)

  do{
    
      
      
  while(contadorEspacios<contadorNespacios){
  linea2= linea2+" "
  contadorEspacios=contadorEspacios+1

  }

  do{
  linea2=linea2+"*"
  contadorAsteriscos=contadorAsteriscos+1

  }
  while (contadorAsteriscos<contadorNasteriscos)
  contadorNespacios=contadorNespacios-1
  contadorEspacios=reset
 contadorNasteriscos=contadorNasteriscos+2
  contadorAsteriscos=reset
  contadorLineas=contadorLineas+1
  console.log(linea2)
  linea2=""
  }
  while(contadorLineas<Math.round(lado2/2))
else{
    
   contadorNasteriscos=1
    do{    
        while(contadorEspacios<contadorNespacios){
          linea2= linea2+" "
          contadorEspacios=contadorEspacios+1
        
        }
        
        do{
          linea2=linea2+"*"
          contadorAsteriscos=contadorAsteriscos+1
        }while (contadorAsteriscos<contadorNasteriscos)

        contadorNespacios=contadorNespacios-1
        contadorEspacios=reset
       contadorNasteriscos=contadorNasteriscos+2
        contadorAsteriscos=reset
        contadorLineas=contadorLineas+1
        console.log(linea2)
        linea2=""
    }while(contadorNespacios>-1)
}








