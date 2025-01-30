/* 1- Arrays */
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["Daniel", true, 2, 4.12, []];

console.log(itens);

/* 2- Mais sobre Arrays */

const arr = ["a", "b", "c", "d", "e"];

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[83]);

/* 3- Propriedades */
const numbers = [5, 3, 4];

console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Daniel";

console.log(myName.length);

/* 4- Métodos */

const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

/* 5- Objetos (Object Literals) */

const person = {
    name: "Daniel",
    age: 21,
    job: "Programador",
};

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

/* 6- Removendo e criando novas propriedades */
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);


/* 7- Diferença entre Arrays e Objetos */

// Arrays:

// Um array é uma estrutura de dados que armazena uma coleção ordenada de valores, onde cada valor é chamado de elemento.

// Os elementos de um array podem ser de qualquer tipo de dado, como números, strings, objetos, etc.

// Os arrays são indexados, ou seja, cada elemento é identificado por um índice numérico.

// Os arrays têm um comprimento fixo, o que significa que você não pode adicionar ou remover elementos diretamente no meio do array.

// Os arrays são mutáveis, o que significa que você pode modificar os elementos existentes.

// Os arrays têm métodos e propriedades específicos, como push, pop, length, etc., para manipular os elementos.

// Os arrays são representados por colchetes [] e podem ser declarados de forma literal ou usando a função Array.


// Objetos:

// Um objeto é uma estrutura de dados que armazena um conjunto de pares chave-valor, onde cada par é chamado de propriedade.

// As propriedades de um objeto são identificadas por chaves, que podem ser strings ou símbolos.

// Os valores das propriedades podem ser de qualquer tipo de dado, como números, strings, objetos, etc.

// Os objetos são mutáveis, o que significa que você pode adicionar, modificar ou remover propriedades existentes.

// Os objetos têm métodos e propriedades específicos, como toString, hasOwnProperty, etc., para manipular as propriedades.

// Os objetos são representados por chaves {} e podem ser declarados de forma literal ou usando a função Object.




/* 8- Mais sobre Objetos */

const obj =  {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

/* 9- Conhecendo melhor o objeto */

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

/* 10- Mutação (Mutability) */

const a = {
    name: "Daniel",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 21;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

/* 11- Loops em arrays */

const users = ["Matheus", "João", "Pedro", "Miguel"]

for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`);
}

/* 12- Métodos de array: push e pop */

const array = ["a", "b", "c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z","x","y");

console.log(array);


/* 13- Métodos de array: shift e unshift */

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("p", "q", "r");

letters.unshift("z");

console.log(letters);


/* 14- Métodos de array: indexOf e LastIndexOf */

const myElements = ["Morango","Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.indexOf("Mamão")); /* Retorna -1 pois o elemento nao foi encontrado */
console.log(myElements.lastIndexOf("Mamão")); /* Retorna -1 pois o elemento nao foi encontrado */


/* 15- Métodos de array: slide */

const testeSlice = ["a","b","c","d","e", "f"];

const subArray = testeSlice.slice(2,4);

console.log(subArray);
console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);/* Retorna um array(lista) vazio(a) */

const subArray4 = testeSlice.slice(2);

console.log(subArray4);


/* 16- Métodos de array: forEach */

const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) =>{
    console.log(`O núemro é ${numero}`);
})

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"},
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
})

/*  17- Métodos de array: includes*/

const brands = ["Mercedes", "Audi", "BMW"];

console.log(brands.includes("Mercedes"));

console.log(brands.includes("VW"));

if(brands.includes("Mercedes")){
    console.log("Há carros da marca Mercedes!");
}


/* 18- Métodos de array: reverse */

const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();
console.log(reverseTest);


/* 19- Métodos de string: trim*/

const trimTest = "    testando \n    ";

console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length);
console.log(trimTest.trim().length);

/* 20- Métodos de string: padStart */

const testePadStart = "1"
const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");
console.log(testePadEnd);


/* 21- Métodos de string: split */

const frase = "O rato roeu a roupa do rei de Roma"

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

/* 22- Métodos de string: join */

const fraseDenovo = arrayDaFrase.join(" ");

console.log(fraseDenovo);

const itensParaComprar = ["Mouse", "Teclado", "monitor"]

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;

console.log(fraseDeCompra);

/* 23- Métodos de string: repeat */

const palavra = "Testando ";

console.log(palavra.repeat(5));


/* 24- Métodos de array: Rest Operator / Rest Parameters */

const somaInfinita = (...args) => {

    let total = 0

    for(let i = 0; i < args.length; i++){
        total += args[i]
    }

    return total;
};

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(1, 20, 34, 3424, 128812, 12723, 12, 23, 54, 12 ));

/* 25- Estrutura de repetição for... of */

const somaInfinita2 = (...args) => {
    
    let total = 0;
    
    for(num of args){
        total += num;
    }

    return total;
}

console.log(somaInfinita2(1, 2, 4));
console.log(somaInfinita2(5, 6, 1, 23, 5, 6, 3, 5));


/* 26- Destructuring em objetos */

const userDetails = {
    firstName: "Daniel",
    lastName: "Alves",
    job: "Programador",
};

const {firstName, lastName, job} = userDetails;

console.log(firstName, lastName, job);

// renomerar variáveis

const {firstName: primeiroNome} = userDetails;

console.log(firstName);


/* 27- Destructuring em arrays */

const myList = ["Avião", "Submarino", "Carro", "Trator"];

const [veiculoA, veiculoB, veiculoC, veiculoD] = myList

console.log(veiculoA, veiculoB, veiculoC, veiculoD);

/* 28- JSON */

const myJSON = '{"name": "Daniel", "age": 21, "skills": ["PHP", "JavaScript", "Python"]}';

console.log(myJSON);

console.log(typeof myJSON);


/* 29- JSON para objeto e objeto para JSON */

const myObjeto = JSON.parse(myJSON);

console.log(myObjeto);

console.log(myObjeto.name);

console.log(typeof myObjeto);

//JSON inválido

const badJSON = '{"name": Daniel, "age": 21}';

// const myBadObject = JSON.parse(badJSON);

myObjeto.isOpenToWork = true;

console.log(myObjeto);

const myNewJSON = JSON.stringify(myObjeto);

console.log(myNewJSON);

console.log(typeof myNewJSON);