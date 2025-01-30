/* 1- Number */
console.log(typeof 2);/* Resulta em number */
console.log(typeof 5.14);/* Resulta em number */
console.log(typeof -127); /* Resulta em number */

/* 2- Aritmética com Numbers */
console.log(2 + 4);/* Resulta em 6 */
console.log(10 - 5);/* Resulta em 5 */
console.log(10 * 5);/* Resulta em 50 */
console.log(20 / 2);/* Resulta em 10 */

console.log(5 + 4 * 2);/* Resulta em 13 */

/* 3- Special Numbers */
console.log(typeof Infinity);/* Resulta em number */

console.log(typeof -Infinity);/* Resulta em number */

console.log(12 * "asd"); /* Resulta em NaN */

console.log(typeof NaN); /* Resulta em number */

/* 4- String */
console.log("Um texto");/* Resulta em string */
console.log('Mais um texto');/* Resulta em string */
console.log('13');/* Resulta em string */

console.log(typeof "Um texto");/* Resulta em string */
console.log(typeof 'Mais um texto');/* Resulta em string */

/* 5- Símbolos esperciais em String */
console.log("Testando a \n quebra de linha");

console.log("Espaçamento de \t de tab");


/* 6- Concatenação */
console.log("Oi, " + "tudo" + " bem?");/* Resulta em oi, tudo bem? */

console.log(`Testando ` + `com ` + `crase!`);/* Resulta em Testando com crase! */

/* 7- Interpolação */
console.log(`A soma de 2 + 2 é: ${2 + 2} `);/* Resulta em A soma de 2 + 2 é: 4 */

/* Essa função abaixo tem que ser escrita com crase, se utilizar aspas simples ou dupla ira dar erro */
console.log(`Podemos executar qualquer coisa aqui ${console.log("Teste")}`);/* Resulta em Podemos executar qualquer coisa aqui, undefined */

/* 8- Booleans */
console.log(true);/* Resulta em true */
console.log(5 > 20);/* Resulta em false */
console.log(30 > 10);/* Resulta em true */
console.log(typeof false);/* Resulta em boolean */

/* 9- Comparações */
/* Maior e menor > e < */
/* Igual == */
/* Diferente != */
/* Idêntico === */
console.log(5 <= 5);/* Resulta em true */
console.log(5 < 5);/* Resulta em false */
console.log(10 == 10);/* Resulta em true */
console.log(10 == 9);/* Resulta em false */
console.log(10 != 9);/* Resulta em true */

/* 10- Comparação idêntica */
console.log(9 == "9");/* Resulta em true */

console.log(9 === "9");/* Resulta em false */ /* utilizar como igualdade no código */

console.log(9 != "9");/* Resulta em false */

console.log(9 !== "9");/* Resulta em true */ /* utilizar como igualdade no código */

console.log(9 === 9);/* Resulta em true */

/* 11- Operadores lógicos */
/* Símbolos &&, ||, ! (AND, OR, NOT) */
/* Explicação: && = true apenas se os dois lados forem verdadeiros */
/* Explicação: || = true se pelo menos um dos lados for verdadeiro */
/* Explicação: ! = true se o lado for falso */

console.log(true && true);/* Resulta em true */

console.log(true && false);/* Resulta em false */

console.log(5 > 2 && 2 < 10);/* Resulta em true */

console.log(5 > 2 && "Matheus" === 1);/* Resulta em false */

console.log(5 > 2 || "Matheus" === 1);/* Resulta em true */

console.log(5 < 2 || 5 > 100);/* Resulta em false */

console.log(!true);/* Resulta em false */

console.log(!5 > 2);/* Resulta em false */

/* 12 - Empty Values */
console.log(typeof null, typeof undefined);/* Resulta em object */

console.log(null === undefined);/* Resulta em false */

console.log(null == undefined);/* Resulta em true */

console.log(null == false);/* Resulta em false */

console.log(undefined == false);/* Resulta em false */

/* 13 - Conversão de tipo automática */
console.log(5 * null);/* Resulta em 0 */

console.log("Teste" * "opa");/* Resulta em NaN */

console.log("10" + 1);/* Resulta em 101 */

console.log("10" - 1);/* Resulta em 9 */

