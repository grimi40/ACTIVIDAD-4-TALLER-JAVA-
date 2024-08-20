function puedeVotar(edad) {
    // Si la edad es mayor o igual a 18, la persona puede votar
    return edad >= 18;
  }

  let edadPersona = 20;
if (puedeVotar(edadPersona)) {
  console.log("La persona puede votar.");
} else {
  console.log("La persona no puede votar.");
}
