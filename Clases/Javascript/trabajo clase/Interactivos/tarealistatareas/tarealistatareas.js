let lista = [
    {Materia:"Informática", Descripción:"Hacer una tarea de informática que tenga todas las tareas.",Fecha:"2021-02-23"},
    {Materia:"Historia", Descripción:"Estudiar la crisis del 1300",Fecha:"2021-02-26"},
    {Materia:"Matemáticas", Descripción:"Evaluación f. raciones, exponenciales y polinómicas",Fecha:"2021-03-02"},
]

let tabla = document.querySelector('#lista')
function llenarTabla(){
    let contenidoTabla = '<tr><th>Materia</th><th>Descripción</th><th>Fecha</th></tr>'
    for (elemento of lista){
        contenidoTabla = contenidoTabla + `<tr><td>${elemento.Materia}</td><td>${elemento.Descripción}</td>
        <td> ${elemento.Fecha}</td></tr>`
    }
    tabla.innerHTML = contenidoTabla;
}

let form = document.querySelector("#formularioAdd");

function addElement(){
    
    let nombreNuevo = document.querySelector("input[name=nombre]").value

    let diametroNuevo = document.querySelector("input[name=diametro]").value
   
    let urlNuevo = document.querySelector("input[name=urlImagen]").value
   
    let elementoNuevo = {Materia:nombreNuevo, Descripción:diametroNuevo, Fecha:urlNuevo}
    console.log("Ahora voy a añadir el siguiente elemento");
    console.log(elementoNuevo)

    lista.push(elementoNuevo)
    llenarTabla();
    return false;
}

form.onsubmit = addElement;



llenarTabla();