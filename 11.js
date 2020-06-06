let id1 = {
    name: 'John', 
    info:{ 
    age: 21, 
    budget1: 23000
    }
}

let id2 = {
    name: 'Steve', 
    info:{ 
    age: 32, 
    budget2: 40000
    }
}

let id3 = {
    name: 'Martin', 
    info:{ 
    age: 16, 
    budget3: 2700
    }
}

const {info:{budget1}} = id1
const {info:{budget2}} = id2
const {info:{budget3}} = id3

suma = budget1 + budget2 + budget3

console.log(suma)