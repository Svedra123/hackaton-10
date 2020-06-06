function minmax(...numeros){ 
    
  
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
    return [min, max];
}

let numeros = [8,1,5,6,7,3]

console.log(minmax(...numeros))
