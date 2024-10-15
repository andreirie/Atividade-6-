function main(){
    let i=0;
    let nums = [];
    let num;
    console.log("Calculadora de Media\nDigite 9999 para parar de inserir numeros.")
    do {
        num = parseFloat(prompt("Digite um numero: "));
        if (num !== 9999) {
            nums.push(num);
        }
    } while (num !== 9999);
    console.log(`media doos numeros: ${media(nums)}`)
}

function media(nums){
    let soma=0;
    for(let i=0; i < nums.length;i++){
        soma+=nums[i];
    }
    
    return soma/nums.length;
}

main();