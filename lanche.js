var input = require("fs").readFileSync("stdin", "utf8");
var [codItem, qtdItem] = input.split(" ").map((numeros) => parseInt(numeros));

let itens = [
  [1, 4.0],
  [2, 4.5],
  [3, 5.0],
  [4, 2.0],
  [5, 1.5],
];
let totalPagar = 0;

itens.forEach((elemento) => {
  if (elemento[0] == codItem) {
    totalPagar = elemento[1] * qtdItem;
  }
});

console.log(`Total: R$ ${totalPagar.toFixed(2)}`);
