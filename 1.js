const hola = (name, apellido, edad) =>
  `Mi nombre es ${name} mi apellido ${apellido} mi edad ${edad}`;

let name = prompt ("Ingrese su nombre")
let apellido = prompt ("Ingrese su apellido")
let edad = prompt ("Ingrese su edad")

console.log(hola(name, apellido, edad));
