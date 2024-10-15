function fatorial(n) {
    if (n < 0) return "Fatorial não definido nos numeros reais."; 
    if (n === 0 || n === 1) return 1;
    let resultado = 1; 
    for (let i = 2; i <= n; i++) {
        resultado *= i; 
    }
    return resultado; 
}


let numero = parseInt(prompt("Digite um numero para calcular o fatorial: "), 10);

let resultado = fatorial(numero);
console.log(`O fatorial de ${numero} é: ${resultado}`);
