function cubos (a,b,c) {
    let d = a*a*a + b*b*b + c*c*c
   
    return d
}

let a = prompt("Ingresa el primer numero")
let b = prompt("Ingresa el segundo numero")
let c = prompt("Ingresa el tercer numero")

console.log(cubos(a,b,c))