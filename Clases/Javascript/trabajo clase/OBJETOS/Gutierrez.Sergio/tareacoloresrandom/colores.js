let boton = document.querySelector("#color")
let parrafo = document.querySelector("#p1")
boton.onclick = changeColor
function changeColor(){     
     let a = Math.floor(Math.random() * 226)
    let b = Math.floor(Math.random() * 226)
    let c = Math.floor(Math.random() * 226)
    parrafo.style.color = `rgb(${a},${b},${c})`}
    let boton2 = document.querySelector("#takeout")
let parrafo2 = document.querySelector("#p2")
boton2.onclick = show
function show(){
    if (parrafo2.innerHTML == ""){
        parrafo2.innerHTML ="Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo Parrafo  Parrafo Parrafo Parrafo "
    }
    else{
        parrafo2.innerHTML = ""
    }
}
let boton3 = document.querySelector("#show")
let p3 = document.querySelector("#p3")
boton3.onclick = takeout 
function takeout(){
    p3.style.display = "none"
    setTimeout(reapear, 3000);
}
function reapear(){
    p3.style.display = "block"
}



