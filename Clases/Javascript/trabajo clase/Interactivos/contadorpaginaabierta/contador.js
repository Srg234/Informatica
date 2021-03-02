let variableeeee= 1



variableeeee=JSON.parse(localStorage.getItem("variableeeee"))
variableeeee=variableeeee+1
alert( `usted ha ingresado ${variableeeee} veces a esta página`)
localStorage.setItem("variableeeee",JSON.stringify(variableeeee))


