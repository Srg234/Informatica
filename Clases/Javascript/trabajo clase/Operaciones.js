let b = parseFloat(prompt("ingrese b"))
let c =parseFloat( prompt("ingrese c"))
console.log(`la suma es: ${b+c}`)
console.log(`la resta es: ${b-c}`)
console.log(`el producto es: ${b*c}`)
console.log(`la división es: ${b/c}`)
console.log(`el residuo es: ${b%c}`)
console.log(`la concatenación es: ${b+" "+c}`)

let p= true
let d= false
console.log(`la && es: ${p&&d}`)
console.log(`la o es: ${p||d}`)
alert(`la suma es: ${b+c}`)
alert(`la resta es: ${b-c}`)
alert(`el producto es: ${b*c}`)
if(c==0)
{alert("la división y el residuo no son posibles")}
else
{alert(`la división es: ${b/c}`)
alert(`el residuo es: ${b%c}`)}

alert(`la concatenación es: ${b+" "+c}`)
alert(`la && es: ${p&&d}`)
alert(`la o es: ${p||d}`)