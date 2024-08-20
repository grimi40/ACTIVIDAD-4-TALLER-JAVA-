function convertirMinutos(minutos) {
    // Calculamos las horas dividiendo los minutos entre 60 y obteniendo la parte entera
    const horas = Math.floor(minutos / 60);
    
    // Calculamos los minutos restantes restando a los minutos totales el producto de las horas por 60
    const minutosRestantes = minutos % 60;
  
    // Construimos la cadena con el formato deseado
    return horas + " horas y " + minutosRestantes + " minutos";
  }

  const totalMinutos = 135;
const resultado = convertirMinutos(totalMinutos);
console.log(resultado); // Imprimirá: "2 horas y 15 minutos"
