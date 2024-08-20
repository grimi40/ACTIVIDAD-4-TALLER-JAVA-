function celsiusAFahrenheit(celsius) {
    // Fórmula para convertir Celsius a Fahrenheit: (Celsius * 9/5) + 32
    return (celsius * 9/5) + 32;
  }
  
  let temperaturaCelsius = 25;
let temperaturaFahrenheit = celsiusAFahrenheit(temperaturaCelsius);
console.log(temperaturaCelsius + " grados Celsius equivalen a " + temperaturaFahrenheit + " grados Fahrenheit.");
