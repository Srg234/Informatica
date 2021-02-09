let paragraph = document.querySelector("#miParrafo")
let botón1 = document.querySelector("#boton1")

botón1.onclick = colorrandom()

function colorrandom(){
if(paragraph.innerHTML=="black")
paragraph.innerHTML="hola";
}



