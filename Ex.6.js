function somaMatriz(matriz) {
    let soma = 0; 

    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]; 
        }
    }

    return soma; 
}

const matriz = [
    [1, 6, 4],
    [7, 1, 5],
    [9, 3, 1]
];

const resultado = somaMatriz(matriz);
console.log(`A soma dos elementos da matriz é: ${resultado}`);
