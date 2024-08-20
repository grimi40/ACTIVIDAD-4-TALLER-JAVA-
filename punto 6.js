function calcularPrecioFinal(precioInicial, descuento) {
    // Convertimos el porcentaje de descuento a un decimal
    const descuentoDecimal = descuento / 100;
  
    // Calculamos el descuento a aplicar
    const descuentoCantidad = precioInicial * descuentoDecimal;
  
    // Calculamos el precio final restando el descuento al precio inicial
    const precioFinal = precioInicial - descuentoCantidad;
  
    return precioFinal;
  }

  const precioOriginal = 100;
const descuentoPorcentaje = 20;

const precioConDescuento = calcularPrecioFinal(precioOriginal, descuentoPorcentaje);
console.log("El precio final es:", precioConDescuento); // Imprimirá: "El precio final es: 80"
