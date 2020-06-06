function suma(...numeros) {
    if(numeros.length == 0) {
      return 0;
    }
    let suma = numeros[0];
    for(let i = 1; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    return suma;
  }

  alert(suma(3,6,9))
