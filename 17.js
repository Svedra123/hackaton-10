function difminmax(...numeros){ 
    
  
    if(numeros.length == 0) {
    return 0;
    }
    
    let min = numeros[0];
    for(let i = 1; i < numeros.length; i++) {
    if(numeros[i] < min) {
        min = numeros[i];
    }
    }

    let max = numeros[0];
    for(let i = 1; i < numeros.length; i++) {
    if(numeros[i] > max) {
        max = numeros[i];
    }
    }
return max-min;
}

let numeros = [10,4,1,4,-10,-50,32,21]

console.log(difminmax(...numeros))