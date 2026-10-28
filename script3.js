let N = parseInt(prompt("Ingresa un número N para ver los pares:"));
let resultado = "";

for (let i = 2; i <= N; i += 2) {
    resultado += i + " ";
}

console.log(resultado);
alert(resultado);