/* 1- Função SetTimeout */

// Log a message indicating that the asynchronous request has not yet executed
console.log("Ainda não executou");

// Set a timeout to log a message after 2 seconds
setTimeout(function (){
    console.log("Requisição assíncrona");
}, 2000); // 2000ms = 2s

// Log a message indicating that the second asynchronous request has not yet executed
console.log("Ainda não executou 2");



/* 2- SetInterval */
// Loop infinito

// Log a message indicating that the interval has not started yet
console.log("Ainda não começou");

// Set an interval to log a message every 3 seconds
setInterval(function() {
    console.log("Intervalo assíncrono")
}, 3000); // 3000ms = 3s

// Log a message indicating that the second message has not started yet
console.log("Ainda não começou 2");


/* 3- Promises */


// Resolve a promessa com o valor da soma de 5 + 5
const promessa = Promise.resolve(5 + 5)

console.log("Algum código");

// Pega o valor da promessa e imprime na tela com a mensagem "A soma é {valor}"
// Retorna o valor para a próxima then
promessa.then(value => {
    console.log(`A soma é ${value}`);
    return value;
})
// Pega o valor retornado e subtrai 1
// Retorna o valor para a próxima then
.then((value) => value - 1)
// Pega o valor retornado e imprime na tela com a mensagem "Agora é {valor}"
.then((value) => console.log(`Agora é ${value}`));


console.log("Outro código");

/* 4- Falhas na Promises */

// Tenta fazer uma multiplicação com um valor que não é número
// Se a multiplicação der NaN, lança um erro com a mensagem "Valores inválidos"
// O catch pega o erro e imprime ele na tela com a mensagem "Um erro ocorreu: {erro}"

Promise.resolve(4 * "asd")
    .then((n) => {
        if(Number.isNaN(n)){
            throw new Error("Valores inválidos");
        }
    })
    .catch((err) => console.log(`Um erro ocorreu: ${err}`));



/* 5- Rejeitando promises */

// Função que verifica se um número é maior que 10
// Retorna uma promise que resolve com uma string se o número for maior que 10
// Retorna uma promise que reject com um erro se o número for menor ou igual a 10
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if(n > 10){
            resolve(`O número é maior que 10`);
        } else{
            reject(new Error("Número muito baixo"));
        }
    });
}

// Verificando o resultado da função com um número maior que 10
const a = checkNumber(20);

// Verificando o resultado da função com um número menor que 10
const b = checkNumber(10);

// Mostrando os resultados
console.log(a, b);

// Pegando o resultado da promise "a" e mostrando com um log
// Se der erro, pega o erro e mostra com um log
a.then((v) => console.log (`O resultado é ${v}`)).catch((err) => 
    console.log(`Um erro ocorreu: ${err}`)
);

// Pegando o resultado da promise "b" e mostrando com um log
// Se der erro, pega o erro e mostra com um log
b.then((v) => console.log (`O resultado é ${v}`)).catch((err) => 
    console.log(`Um erro ocorreu: ${err}`)
);


/* 6- Resolvendo varias Promises */

// Cria uma promise que resolve com o valor 10 após 1 segundo
const p1 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(10)
    }, 1000)
})

// Cria uma promise já resolvida com o valor 20
const p2 = Promise.resolve(10 + 10);

// Cria uma promise que resolve com 30 se a condição for verdadeira
const p3 = new Promise((resolve, reject) =>{
    if(30 > 10){
        resolve(30)
    } else{
        reject("Erro!");
    }
});

// Aguarda todas as promises serem resolvidas e imprime os valores
Promise.all([p1, p2, p3]).then((values) => console.log(values));
Promise.all([p1,p2,p3]).then((values) => console.log(values));


/* 7- Async Functions */

// Fun o assincrona que soma dois valores e retorna o resultado
async function somarComDelay(a,b){
    return a + b;
}

// Chama a fun o e printa o resultado
somarComDelay(302, 1273).then((value) => {
    console.log(`O valor da soma  : ${value}`);
});

console.log("Teste async");



/*  8- Async Await*/

// Função que retorna uma Promise que resolve após um atraso

function resolveComDelay(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("resolveu a Promise");
        }, 2000);
    });
}

// Função assíncrona que chama resolveComDelay e aguarda seu resultado
async function chamadaAsync(){
    console.log("Chamado a Promise, e esperando o resultado");
    const result = await resolveComDelay();
    console.log(`O resultado chegou: ${result}`);
}


chamadaAsync();

/* 9- Generators */

// Fun o generator que retorna um iterator
function* generator(){
    // yield = retorna o valor e pausa a fun o
    yield 1;
    yield 2;
}

const gen = generator();

// Chama o next() do iterator e exibe o valor
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);



