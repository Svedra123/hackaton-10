function telefono(...numeros){ 
    
  
    if(numeros.length == 0) {
    return 0;
    }


    return "(" + numeros[0] + numeros[1] + numeros[2] + ") " + numeros[3] + numeros[4] + numeros[5] + "-" + numeros[6] + numeros[7] + numeros[8] + numeros[9]

}

let numeros = [0,9,9,3,4,2,0,9,7,4]

console.log(telefono(...numeros))