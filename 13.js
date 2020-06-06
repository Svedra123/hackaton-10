let obj = {
    likes :2,
    dislikes :3,
    followers : 10
}

let result = Object.keys(obj).map(function(key) {
  return [String(key), obj[key]];
});

console.log(result);