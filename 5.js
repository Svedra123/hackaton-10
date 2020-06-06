var arr = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: "x" },
    { id: "y"},
    { id: 10 }
  ];
  
  var entradasInvalidas = 0;
  function filtrarPorID(obj) {
    if ('id' in obj && typeof(obj.id) === "string" && !isNaN(obj.id)) {
      return true;
    } else {
      entradasInvalidas++;
      return false;
    }
  }
  
  var arrPorID = arr.filter(filtrarPorID);
  
  console.log('Array Filtrado\n', arrPorID);
