let N = parseInt(prompt("Ingresa un número N para la cuenta regresiva:"));
let resultado = "";

for (let i = N; i >= 1; i--) {
    resultado += i + " ";
}

console.log(resultado);
alert(resultado);