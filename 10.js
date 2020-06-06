let obj = {
    "a":5,
    "b":7
}

let result = Object.keys(obj).map(function(key) {
  return [String(key), obj[key]];
});

console.log(result);