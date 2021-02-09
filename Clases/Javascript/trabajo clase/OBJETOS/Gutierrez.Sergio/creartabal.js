let mercado2=[
   {nombre: "Huevos"},
   {nombre:"Pan"},
   {nombre:"Arroz"},
   {nombre:"Pescado"},
   {nombre:"Carne"}]

   let listamercado= document.querySelector('#mercado')
   let listareal= '<ul> </ul>'
   for(elemento of mercado2){
listareal=listareal+ `<li>${elemento.nombre}</li> `


   }
listamercado.innerHTML=listareal






