var input = require("fs").readFileSync("stdin", "utf8");
var [intervalo] = input.split(" ").map((item) => parseFloat(item));

if (intervalo < 0 || intervalo > 100) {
  console.log("Fora de intervalo");
} else if (intervalo >= 0 && intervalo <= 25) {
  console.log("Intervalo [0,25]");
} else if (intervalo > 25 && intervalo <= 50) {
  console.log("Intervalo (25,50]");
} else if (intervalo > 50 && intervalo <= 25) {
  console.log("Intervalo (50,75]");
} else if (intervalo > 75 && intervalo <= 100) {
  console.log("Intervalo (75,100]");
}
