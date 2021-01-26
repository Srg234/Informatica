do {
    notasmax = parseFloat(prompt("Ingrese la cantidad de números de los que quiere el promedio")); 

   } while (isNaN(notasmax) ||notasmax < 0||Number.isInteger(notasmax)==false);
 
let contadorvariable=0
let sumanotas=0
let promedionotas=sumanotas/notasmax
    do {
        number= parseFloat(prompt("Ingrese una de las notas")); 
        sumanotas=sumanotas+number;
        number=0
        contadorvariable=contadorvariable+1


       } while (contadorvariable<notasmax);


promedionotas=sumanotas/notasmax
alert(promedionotas)
