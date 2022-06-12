const { match } = require("assert");
var input = require("fs").readFileSync("stdin", "utf8");
var [a, b, c] = input.split(" ").map((item) => parseFloat(item));

if (a === 0.0) {
  console.log("Impossivel calcular");
} else {
  let delta = b ** 2 - 4 * a * c;
  if (delta < 0.0) {
    console.log("Impossivel calcular");
  } else {
    let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`R1 = ${raiz1.toFixed(5)}`);
    console.log(`R2 = ${raiz2.toFixed(5)}`);
  }
}
