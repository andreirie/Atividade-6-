function main(){
    let nota = prompt("Nota do usuário: ");

    console.log(resultado(nota));
}

function resultado(nota){
    if(nota<6){
        return "Reprovado.";
    }
    else if(nota >= 6 && nota < 8){
        return "Arovado.";
    }
    else if(nota >= 8){
        return "Aprovado com louvor.";
    }
}

main();