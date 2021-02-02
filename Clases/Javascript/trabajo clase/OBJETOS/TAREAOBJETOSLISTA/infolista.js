


let mercado=[
{objeto:"huevos",cantidadpaquetes:2,marca:"gallina feliz",foto:"https://www.santareyes.com.co/wp-content/uploads/2020/09/GF-X18-01.jpg"},
{objeto:"pasta",cantidadpaquetes:2,marca:"doria",foto:"https://mistiendas.com.co/mistiendas/1036-large_default/pasta-doria-grueso-surtido.jpg"},
{objeto:"mantequilla",cantidadpaquetes:1,marca:"canolalife",foto:"https://www.hv.com.co/wp-content/uploads/2018/02/Productos-Canola-Life-Mantequilla.jpg"},
{objeto:"queso",cantidadpaquetes:2,marca:"alpina",foto:"https://www.alpina.com/Portals/entertaiment/EasyDNNnews/145/800800p7976EDNmainKV-QUESITO-ALPINA-fondo-madera_0000s_0000s_0001_Layer-4.png"},
{objeto:"salsa de tomate",cantidadpaquetes:1,marca:"Fruco",foto:"https://supertiendascomunal.com/7479-thickbox_default/salsa-tomate-fruco-150-g.jpg"},
{objeto:"carne",cantidadpaquetes:2,marca:"no aplica",foto:"https://dam.cocinafacil.com.mx/wp-content/uploads/2020/01/BOVIDA.jpg"}

]
let creartabla=function(lista){
    let partearribatabla="<tr><th>objeto</th><th>cantidadpaquetes</th><th>marca</th><th>foto</th></tr>";
for(let mercado of lista){

let fila;
fila="<tr> <td>";
fila +=mercado.objeto;
fila +="</td>";
fila +="<td>";
fila +=mercado.cantidadpaquetes;
fila +="</td>";
fila +="<td>";
fila +=mercado.marca;
fila +="</td>";
fila +="<td>";
fila +=mercado.foto;
fila +="</td>";
fila +="</tr>";
partearribatabla+=fila


}
return(partearribatabla)
}
document.getElementById("listadeobjetos").innerHTML=creartabla(mercado)



creartabla(mercado)





