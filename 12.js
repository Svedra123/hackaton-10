let obj = {
    name: "Becky",
    name2: "John",
    name3: "Steve"
}

let result = Object.keys(obj).map(function(key) {
    return [obj[key]];
});

console.log(result);