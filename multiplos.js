let input = require("fs").readFileSync("stdin", "utf8");
let linhas = input.split(" ");

var a = parseInt(linhas[0]);
var b = parseInt(linhas[1]);

var maior = a > b ? (maior = a) : (maior = b);
var menor = a < b ? (menor = a) : (menor = b);

if (maior % menor === 0) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}
