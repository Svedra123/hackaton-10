function vreplace(str) {

    let resultado = str.replace(/[eiou]/g, "a")

    return resultado
}
  
  let text = "Hola Prueba de Replace y/o Javascript";
  const z = vreplace(text);
  console.log(z);