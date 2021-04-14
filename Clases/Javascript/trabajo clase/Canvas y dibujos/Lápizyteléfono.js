let canvas=document.querySelector('#miCanvas')
let ctx = canvas.getContext("2d")
// Escoger los colores
ctx.fillStyle = "yellow"
ctx.strokeStyle = "black"
// dibujo un rectángulo
ctx.fillRect(50, 0 , 100, 45)
ctx.fillStyle = "red"

ctx.lineWidth= 1
ctx.strokeRect(50,0,100, 45)
ctx.strokeRect(50,15,100, 15)
// debo iniciar un camino
ctx.beginPath()
ctx.fillArc = "red"
ctx.arc(150, 23, 23, Math.PI*1.5, 2.5* Math.PI);
ctx.fill()

ctx.lineWidth= 1
ctx.strokeStyle = "black"
ctx.beginPath()

ctx.moveTo(0, 23)
ctx.lineTo(50, 0)
ctx.moveTo(0, 23)
ctx.lineTo(50, 45)
ctx.moveTo(0, 23)
ctx.lineTo(20, 15)
ctx.moveTo(0, 23)
ctx.lineTo(20, 30)
ctx.lineTo(20, 15)
ctx.stroke()

ctx.fillStyle = "black"
ctx.fill()
ctx.moveTo(0,50)


ctx.beginPath()
ctx.fillStyle = "black"
ctx.fillRect(0,65,100, 45)
ctx.fillRect(100,65,25, 15)
ctx.fillStyle = "grey"
ctx.fillRect(3,71,9, 9)
ctx.fillRect(3,83,9, 9)
ctx.fillRect(3,95,9, 9)
ctx.fillRect(15,71,9, 9)
ctx.fillRect(15,83,9, 9)
ctx.fillRect(15,95,9, 9)
ctx.fillRect(27,71,9, 9)
ctx.fillRect(27,83,9, 9)
ctx.fillRect(27,95,9, 9)
ctx.fillRect(39,71,9, 9)
ctx.fillRect(39,83,9, 9)
ctx.fillRect(39,95,9, 9)
ctx.fillStyle = "blue"
ctx.fillRect(54,71,39, 33)




ctx.endPath()

// ctx.endPath()



