let variableeee= 1



variableeee=JSON.parse(localStorage.getItem("variableeee"))
variableeee=variableeee+1
alert( `usted ha ingresado ${variableeee} veces a esta página`)
localStorage.setItem("variableeee",JSON.stringify(variableeee))


