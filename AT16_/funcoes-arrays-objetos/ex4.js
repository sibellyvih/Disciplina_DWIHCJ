let numeros = [
        3,
        5,
        10,
        33,
        58,
        89,
        12,
        45,
        22,
        13
];

function exibirPares(numeros){
    for (let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            console.log(numeros[i])
        }
    }
}

exibirPares(numeros);