    /* 
    O que é bug e Debug?:
    Um bug (bug) e um erro (error)
    Um debug (debug) e uma anotação 
    */

/* 1- Strict Mode */

"use strict";

const opa = "teste";

// const undefined = 10;

// delete [].length;

/* 2- Método de debug: console.log */


// Verifica se a é igual a 1 e, se for, soma 2 com o valor de b e atribui para a
let a = 1;
let b = 2;

if(a == 1){
    a = b + 2
}

// Mostra o valor atual de a
console.log(a);

// Loop que ir  de 0 at  b - 1, e a cada itera o, soma 2 ao valor de a e mostra o valor atual de a
for(let i = 0; i < b; i++){
    a = a + 2
    console.log(a);
}

// Verifica se o valor de a  maior que 5, se for, atribui o valor 25 para a
if(a > 5){
    a = 25
}

// Mostra o valor atual de a
console.log(a);


/* 3- Método de debug: debugger */

// Atribui valores para as variáveis c e d
let c = 1;
let d = 2;

// Verifica se c é igual a 1 e, se for, atribui o valor de d + 2 para c

if(c == 1){
    c = d + 2
}

// Pausa o código para debug
debugger;

// Executa um loop com o valor de d vezes
for (let i = 0; i < d; i++) {
    // A cada loop, soma 2 em c
    c = c + 2;
}

// Imprime uma mensagem para verificar se o loop foi executado
console.log("executou o loop");

// Pausa o código novamente para debug
debugger;

// Verifica se c é maior que 5 e, se for, atribui o valor de 25 para c
if (c > 5) {
    c = 25;
}

/* 4- Tratamento de dado por função */

// Função que verifica se o valor é um número
function checkNumber(n) {

    // Converte o valor para um número
    const result = Number(n);

    // Verifica se o resultado é NaN
    if (Number.isNaN(result)) {
        // Se for NaN, imprime uma mensagem de valor incorreto
        console.log("Valor incorreto!");
        return;
    }
    
    // Se não for NaN, imprime uma mensagem de valor correto
    console.log("Valor correto!");
    return result;
}

// Testa a função com um número
checkNumber(5);

// Testa a função com uma string numérica
checkNumber("10");

// Testa a função com um objeto
checkNumber({});

// Testa a função com uma string não numérica
checkNumber("teste");



/* 5- Exceptions */

// Verifica se o valor de x é diferente de 11
let x = 10;

// Se x for diferente de 11, lança um erro
if(x != 11){
    throw new Error("O valor de x não pode ser diferente de 11!");
}


/* 6- Try Catch */

// Tenta somar o valor de x com o valor yield
// Se der erro, pega o erro e imprime na tela com a mensagem "Erro no programa: {erro}"
try {
    const soma = x + yield;
} catch(error){
    console.log(`Erro no programa: ${error}`);
}

/* 7- Finally */

// Tenta executar o bloco de código que verifica um número
try {
    const value = checkNumber("1") // Checa se o valor é um número

    if(!value){
        // Se o valor não for um número, lança um erro
        throw new Error("Valores inválidos")
    }
} catch(error){
    // Captura e exibe o erro caso aconteça
    console.log(`Opa, aconteceu um problema: ${error}`);
} finally {
    // Será executado independentemente de ocorrer um erro ou não
    console.log("O código foi executado!");
}

/* 8- Assertions */

// Verifica se o array passado como parâmetro tem elementos
// Se sim, imprime a quantidade de elementos
// Se não, lança um erro
function checkArray(arr){

    if(arr.length == 0){
        throw new Error("O array precisa ter elementos!");
    }else{
        console.log(`O array tem ${arr.length} elementos`);
    }
}

// checkArray([]);

checkArray([1, 2, 3]);
