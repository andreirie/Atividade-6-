
function exibirMenu() {
    console.log("Escolha uma opção:");
    console.log("1. Opção 1");
    console.log("2. Opção 2");
    console.log("3. Opção 3");
}

function main() {
    exibirMenu(); 
    let escolha = prompt("Escolha uma opção: "); 

    switch (escolha) {
        case "1":
            console.log("Opção 1 escolhida.");
            break;
        case "2":
            console.log("Opção 2 escolhida.");
            break;
        case "3":
            console.log("Opção 3 escolhida.");
            break;
        default:
            console.log("Opção inválida.");
    }
}

main();
