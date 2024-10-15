function mediaMatriz(matriz) {
    let soma = 0; 
    let cont = 0; 

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]; 
            cont+;
        }
    }

    return cont > 0 ? soma / cont : 0; 
}

const matriz = [
    [1, 6, 4],
    [7, 1, 5],
    [9, 3, 1]
];

const resultado = mediaMatriz(matriz);
console.log(`A média dos elementos da matriz é: ${resultado}`);
