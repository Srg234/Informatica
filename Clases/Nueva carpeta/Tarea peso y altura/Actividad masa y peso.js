alert("este es un programa que busca informarle su estado de salud en relación con su peso, es decir, si está por debajo de su peso común, en un peso común para su edad o sufre de sobrepeso")

let masa; 
do {
 masa = parseFloat(prompt("Ingrese su masa")); 
} while (isNaN(masa) || masa < 0||masa==0);
let e;  
do {
e = parseFloat(prompt("Ingrese su estatura")); 
} while (isNaN(e) || e < 0 ||e == 0);

alert(`Su Índice de masa corporal es: ${masa/(e*e)}`)

let bmi= parseFloat(`${masa/(e*e)}`)

if(bmi<18.5){
alert("usted está bajo el peso común")}

    
if(18.5<bmi&&bmi<25){
    alert("usted tiene un peso común")}
   
    
if(25<bmi&&bmi<30){
    alert("usted está en sobrepeso")}
   
    if(bmi>30){
        alert("usted está obeso")}
   

