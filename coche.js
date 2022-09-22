class Coche {
  puertas = 0;

  constructor(numeroPuertas) {
    this.puertas = numeroPuertas;
  }

  incrementaPuertas() {
    this.puertas++;
  }
}

module.exports = { Coche };
