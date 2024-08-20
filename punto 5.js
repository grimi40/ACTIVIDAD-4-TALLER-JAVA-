function estaEnRango(numero, inicio, fin) {
    // Verificamos si el número es mayor o igual al inicio y menor o igual al fin
    return numero >= inicio && numero <= fin;
  }
  
  let numero = 5;
  let inicio = 2;
  let fin = 7;
  
  if (estaEnRango(numero, inicio, fin)) {
    console.log("El número está dentro del rango.");
  } else {
    console.log("El número está fuera del rango.");
  }
  