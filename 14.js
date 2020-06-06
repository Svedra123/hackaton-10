function sumac(numeros) {
    if(numeros == 0) {
        return 0;
      }
      let suc = 0;
      for(let i = 1; i < numeros+1; i++) {
          suc = suc + i*i;
      }
      return suc;
}

console.log(sumac(3))