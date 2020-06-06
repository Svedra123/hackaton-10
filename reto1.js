// ejercicio 1
function suma (a,b) {
    return a + b
}

console.log(suma(1,2))

// ejercicio 2
function potencia (a,b) {
    let c = 1
    for (let i=0; i<b; i++) {
        c = c *a
    }
    
    return c
}

console.log(potencia(2,3))

// ejercicio 3
function cubos (a,b,c) {
    let d = a*a*a + b*b*b + c*c*c
   
    return d
}

console.log(cubos(1,5,9))

// ejercicio 4
function areat (a,b) {
    return a * b /2
} 

console.log(areat(3,2))

// ejercicio 5
function calculator (a,b,c) {
   
    switch (c) {
        case "+":
            d = a + b
        break;
        case "-":
            d = a - b
        break;
        case "/":
            d = a / b
        break;
        case "*":
            d = a * b
        break;
        case "%":
            console.log("El parametro no es reconocido")
        break;
        default:
            console.log("El parametro no es reconocido")
    }

    return d
}

let operacion = prompt("Ingrese la operacion a realizar (+,-,/,*,%")

console.log(calculator(2,2,operacion))