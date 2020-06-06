
function pb(numeros1,numeros2,numeros3){ 
    
        let max1 = numeros1[0];
        for(let i = 1; i < numeros1.length; i++) {
        if(numeros1[i] > max1) {
            max1 = numeros1[i];
        }
        }

    
        let max2 = numeros2[0];
        for(let i = 1; i < numeros2.length; i++) {
        if(numeros2[i] > max2) {
            max2 = numeros2[i];
        }
        }

        let max3 = numeros3[0];
        for(let i = 1; i < numeros3.length; i++) {
        if(numeros3[i] > max3) {
            max3 = numeros3[i];
        }
        }
 
return [max1,max2,max3]

}

let numeros1 = [4,2,7,1]
let numeros2 = [20,70,40,90]
let numeros3 = [1,2,0]

console.log(pb(numeros1,numeros2,numeros3))
