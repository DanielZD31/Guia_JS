/* 1- Variáveis */
let nome = "Daniel";

console.log(nome);
console.log("Daniel");

nome = "Daniel Alves"; /* Alterando o valor em formato de cascata */
console.log(nome);

const idade = 21; /* Constante */

console.log(idade);

// idade = 31;/* Erro */

console.log(typeof nome); /* Tipo de dado: string */
console.log(typeof idade);/* Tipo de dado: number */

/* 2- Mais sobre variáveis */

/* Criar variáveis em sequência, desta maneira: let a = 5, b = 4, c = 10 */
/* Não pode começar com números */
/* Não pode utilizar caracteres especiais, como: !, @, # */
/* As variáveis são case sensitive */

// let 2test = "inválido"; /* Erro */
// let @test = "inválido"; /* Erro */

let a = 10, 
    b = 20, 
    c = 30;

console.log(a, b, c);

const nomecompleto = "Daniel Alves";
const nomeCompleto = "João Silva";

console.log(nomecompleto);
console.log(nomeCompleto);

/* Símbolos permitidos para criar: _ , $ */

let _teste = "ok";

let $teste = "ok";

console.log(_teste);
console.log($teste);


/* 3- Nomes reservados */
/* Algumas palavras tem o nome reservado, não podemos criar variáveis com elas, elas são: break, case, catch, class, const, continue .... */

/* 4- Estrutura de uma Função */

/* Função do JS: prompt */

const age = prompt("Digite sua idade: ")

console.log(`Você tem ${age} anos.`)

/* Função do JS: alert */

alert("Ola mundo!")

const z = 10

alert(`O número é ${z} `);

/* Função do JS: Math.x */

console.log(Math.max(5,2,1,10)); /* Retorna o maior */

console.log(Math.floor(5.14)); /* Arredonda para baixo */

console.log(Math.ceil(5.14)); /* Arredonda para cima */

/* Função do JS: console.x */

console.log("Teste!");/* Resulta em Teste! */

console.error("Error!");/* Resulta em Error! */

console.warn("Aviso!");/* Resulta em Aviso! */

/* 5- Estruturas de Controle */

/* IF */

const m = 10;

if (m > 5){
    console.log("M é maior que 5!");
}

const user = "João";

if (user === "João"){
    console.log("Bem vindo, João!");
}

if(user === "Maria"){
    console.log("Bem vindo, Maria!"); /* Não vai ser executado */
}

console.log(user === "João", user === "Maria");/* True, False */


/* ELSE */

const loggedIn = false;

if(loggedIn){
    console.log("Está autenticado!");
}else{
    console.log("Não está autenticado!");
}

const q = 10;
const w = 25;

if(q > 5 && w > 20){
    console.log("Números mais altos!");
}else{
    console.log("Números mais baixos!");
}

/* ELSE IF */

if(1 > 2){
    console.log("Teste");
} else if(2 > 3){
    console.log("Teste 2");
} else if (5 > 1){
    console.log("Agora sim!");
}

const userName = "Daniel";
const userAge = 21;

if(userName === "José"){
    console.log("O nome é José!");
} else if(userName === "Daniel" && userAge === 21){
    console.log("O nome é Daniel e a idade é 21!");
} else{
    console.log("Nome e idade inválido!");
}


/* 6- Estruturas de Repetição */

/* While */

let p = 0

while(p < 5){
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

/* Loop infinito */

let x = 10;

while(x > 5){
    console.log(`Repetindo ${x}`);
}

/* Do while */
let o = 10;

do{
    console.log(`Repetindo ${o}`);
    o--
} while (o > 1);

/* For */

for(let t = 0; t < 10; t++){
    console.log("Repetindo algo...");
}

let r = 10;

for(r;r > 0; r = r - 1){
    console.log(`O r está diminuindo ${r}`);
}

/* 7- Identação */

for (let u = 0; u < 10; u++) {
  if (u * 2 > 10) {
    console.log(`Maior que 10! ${u}`);
    } else {
    if (u / 2 === 0) {
    console.log("deu 0");
    }
    }
}

/* 8- Break */
for(let g = 20; g > 10; g--){
    console.log(`O valor de g é: ${g}`);
    
    if(g == 15){
        console.log("O g é 12!");
        break;
    }
}

/* 9- Continue */
for(let s = 0; s < 10; s = s + 1){
    // Operador resto = %
    if(s % 2 == 0){
        console.log("Número par!");
        continue;
    }
    console.log(s);
}

/* 10- Switch */
const job = "Advogado";

switch(job){
    case "Programador":
        console.log("Você é um programador!");
        break;
    case "Advogado":
        console.log(" Vocé é um advogado!");
        break;
    case "Engenheiro":
        console.log(" Vocé é um engenheiro!");
        break;
    default:
        console.log("Profissão não encontrada!");
}

/* Switch "Errado!" */

const l = 200;

switch(l){
    case 200:
        console.log("L é 200!");
    case 100:
        console.log("L é 100!");
    case 10:
        console.log("L é 10!");
    default:
        console.log("L não foi encontrado!");
}


