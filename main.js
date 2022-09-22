const { Coche } = require("./coche");
const { sumaTresNumeros } = require("./funcionSuma");

function main() {
  let resultado = sumaTresNumeros(15, 22, 11);
  console.log(resultado);

  const miCoche = new Coche(2);
  miCoche.incrementaPuertas();
  console.log(miCoche.puertas);
}

main();
