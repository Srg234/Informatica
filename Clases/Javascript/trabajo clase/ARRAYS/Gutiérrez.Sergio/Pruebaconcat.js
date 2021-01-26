function promedioarray(notas){
let variablecontadorbucle=0    
let variablesumaelementos=0
do{
variablesumaelementos=notas[variablecontadorbucle]+variablesumaelementos
variablecontadorbucle=variablecontadorbucle+1
}
while(variablecontadorbucle<notas.length)
return(variablesumaelementos/notas.length)
}


function concatenararraypalabras(arraypalabras){
let contadorrepeticionesbucle=0
let variableconcatenado=""
do{
    variableconcatenado=variableconcatenado.concat(arraypalabras[contadorrepeticionesbucle])
    contadorrepeticionesbucle=contadorrepeticionesbucle+1
    }
    while(contadorrepeticionesbucle<arraypalabras.length)
return(variableconcatenado)



}