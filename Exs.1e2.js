function main() {
    
    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));

    if (compara(num1, num2)) {
        console.log(`O primeiro número é maior | ${n1}`);
    } else if (compara(nu,2, num1)) {
        console.log(`O segundo número é maior | ${n2}`);
    } else {
        console.log("Os dois números são iguais!");
    }

    return 0;
}

function compara(a, b) {
    return a > b; 
}

main();
