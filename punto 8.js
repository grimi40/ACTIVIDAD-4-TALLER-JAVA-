function calcularAreaTriangulo(base, altura) {
    // Fórmula para calcular el área de un triángulo: (base * altura) / 2
    return (base * altura) / 2;
  }

  let baseTriangulo = 10;
let alturaTriangulo = 5;

let area = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
console.log("El área del triángulo es:", area); // Imprimirá: "El área del triángulo es: 25"
