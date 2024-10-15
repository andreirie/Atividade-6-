function encontrarMaiorNumero(vetor) {
    let maior = vetor[0]; 

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i]; 
        }
    }

    return maior; 
}

const vetor = [0, 12, 1, 98, 23, 65];

const maiorNumero = encontrarMaiorNumero(vetor);
console.log(`O maior número do vetor é: ${maiorNumero}`);
