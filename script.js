var input = require("fs").readFileSync("stdin", "utf8");

var [A, B, C] = input.split(" ");
var pi = 3.14195;

var areaTriangulo = (A * C) / 2;
var areaCirculo = pi * Math.pow(C, 2);
var areaTrapezio = ((parseFloat(A) + parseFloat(B)) * C) / 2.0;
var areaQuadrado = B * B;
var areaRetangulo = A * B;

console.log("TRIANGULO: " + areaTriangulo.toFixed(3));
console.log("CIRCULO: " + areaCirculo.toFixed(3));
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));
console.log("QUADRADO: " + areaQuadrado.toFixed(3));
console.log("RETANGULO: " + areaRetangulo.toFixed(3));
