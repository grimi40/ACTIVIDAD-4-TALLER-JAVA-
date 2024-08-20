function esBisiesto(año) {
    // Un año es bisiesto si:
    // - Es divisible por 400.
    // - Es divisible por 4 y no es divisible por 100.
  
    return (año % 400 === 0) || (año % 4 === 0 && año % 100 !== 0);
  }
  
  const año = 2024;
if (esBisiesto(año)) {
  console.log(año + " es un año bisiesto.");
} else {
  console.log(año + " no es un año bisiesto.");
}

