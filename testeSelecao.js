var input = require("fs").readFileSync("stdin", "utf8");
var [a, b, c, d] = input.split(" ").map((item) => parseInt(item));

if (b > c && d > a && (c + d > a + b) & (c > 0) && a % 2 === 0) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}
