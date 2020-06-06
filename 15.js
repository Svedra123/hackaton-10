function sumac(...numeros) {
    if(numeros == 0) {
        return 0;
    }

    return numeros[0]*numeros.length + ", " + numeros[1]*numeros.length + ", " + numeros[2]*numeros.length + ", " + numeros[3]*numeros.length
}

let numeros = [2,3,1,0]

console.log(sumac(...numeros)) 