var text = "hello"; 
function yay(input) { 
    input = input.split(' '); arr = []; 
    for (i = 0; i < input.length; i++) { 
        new_inp = input[i].charAt(0).toLowerCase() + input[i].substring(1, input[i].length - 1) + input[i].charAt(input[i].length - 1).toUpperCase(); arr.push(new_inp); 
    } 
    str = arr.join(' '); 
    return str; 
} 

console.log(yay(text)); 
