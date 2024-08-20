function mayorDeDos(n1, n2) {
    // Si n1 es mayor o igual que n2, retorna n1
    if (n1 >= n2) {
      return n1;
    } else {
      // Si no, retorna n2
      return n2;
    }
  }

  let numero1 = 15;
let numero2 = 20;

let numeroMayor = mayorDeDos(numero1, numero2);
console.log("El número mayor es:", numeroMayor);
