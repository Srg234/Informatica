let contador= 1
if (contador=null){
localStorage.setItem("contador",JSON.stringify(contador))
alert("ha entrado 1 vez a esta página")}

else{
contador=JSON.parse(localStorage.getItem("contador"))
contador=contador+1
alert( `usted ha ingresado ${contador} veces a esta página`)
localStorage.setItem("contador",JSON.stringify(contador))
}

