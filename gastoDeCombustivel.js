var input = require("fs").readFileSync("stdin", "utf8");

const [tempoGasto, velocidadeMedia] = input.split("\n");
const totalPercorrido = tempoGasto * velocidadeMedia;
const qtdCombustivelGasto = totalPercorrido / 12;

console.log(qtdCombustivelGasto.toFixed(3));
