

//figura 1


//   ****************
//   *              **
//   *              * *
//   *              *  *
//   *              *   *
//   *              *   * 
//   *              *   *
//   ****************   *
//    *              *  *
//     *              * *
//      *              **  
//       ****************  
//        



let lado;
do {
  lado = parseFloat(prompt("Ingrese el numero de asteriscos que quiere que los lados de las figuras tengan, con un mínimo de 8")); 
 } while (isNaN(lado) || lado < 8);
let Nlinea=0
let espacio= " "
let asterisco="*"
let linea=""
let vacío=""
let espacioentrecaras=""
let Nasteriscos=0
let Nespacios= 0
let espaciolateral=""

console.log("paralelepípedo rectangular")
//lados horizontales
do
{linea=linea+asterisco;

Nasteriscos=Nasteriscos+1;
if(Nasteriscos=lado){
 console.log(linea) 
linea=vacío
}}
  while(Nasteriscos<lado)
//valores base variables
  
  linea=linea+asterisco
  //Espacio por línea
 do{
   espacioentrecaras=espacioentrecaras+espacio;
   Nespacios=Nespacios+1
 }
 while(Nespacios<lado-2)
 //valores base variables
 linea=linea+espacioentrecaras+asterisco
 Nespacios=1
 //Lados tridimensionales
 do{
linea=linea+espaciolateral+asterisco;
console.log(linea);
Nlinea=Nlinea+1
espaciolateral=espaciolateral+espacio;
Nespacios=Nespacios+1}
while(Nespacios<Math.round(lado/2)-1)
//repeticiones faltantes
do{
console.log(linea);
Nlinea=Nlinea+1
}
while(Nlinea<lado) 
//valores base variables
linea=""
Nasteriscos=1
do
{linea=linea+asterisco;

Nasteriscos=Nasteriscos+1;
if(Nasteriscos=lado){
 linea=linea+espaciolateral+asterisco
 console.log(linea) 
linea=vacío
}}
  while(Nasteriscos<lado)
//lado abajo cara ce
if(Nlinea=lado){
do
{linea=linea+asterisco;

Nasteriscos=Nasteriscos+1;
if(Nasteriscos=lado){
 linea=linea+espaciolateral+asterisco
 console.log(linea) 
linea=vacío
}}
  while(Nasteriscos<lado)

}
























 


