/* 1- Métodos */
const animal = {
    nome: "Bob",
    latir: function () {
        console.log("Au au");
    }
};

console.log(animal.nome);

animal.latir();

/* 2- Aprofundando em Métodos */

const pessoa = {
    nome: "Daniel",

    getNome: function () {
        return this.nome;
    },

    setNome: function (novoNome) {
        this.nome = novoNome;
    },
};

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Nayra");

console.log(pessoa.getNome());


/* 3- Prototype */

const text = "asd"

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length);

console.log(Object.getPrototypeOf(arr));


/* 4- Mais sobre prototype */

const myObjeto = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObjeto));

console.log(Object.getPrototypeOf(myObjeto) === Object.prototype);

const mySecondObject = Object.create(myObjeto);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObjeto);


/* 5- Classes Básicas */

const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemao";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);


/* 6 - Função Construtora */

function criarCachorro(nome,raca) {

    const cachorro = Object.create({})

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criarCachorro("Bob", "Vira lata");

console.log(bob);

const jack = criarCachorro("Jack", "Poodle");

console.log(jack);

console.log(Object.getPrototypeOf(jack));


/* 7- Classes baseadas em funções */

function Cachorro(nome, raca){
    this.nome = nome;
    this.raca = raca;   
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);


/* 8- Métodos na função construtora */

Cachorro.prototype.uivar = function(){
    console.log("Au au");
};

console.log(Cachorro.prototype);

husky.uivar();


/* 9- Classes ES6 */

// ES6: Criação de classes no modelo mais atual

class CachorroClasse {
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);

console.log(Object.getPrototypeOf(jeff));


/* 10- Mais sobre Classes */

class Caminhao {
    constructor(eixos, cor){
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao(){
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "Vermelha");

console.log(scania);

scania.descreverCaminhao();

Caminhao.motor = 4;

const c2 = new Caminhao(4, "Preta")

console.log(c2);

console.log(c2.motor);

Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6, "Azul");

console.log(c3.motor);


/* 11- Override nas propriedades via Prototype*/

class Humano {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const matheus = new Humano("Matheus", 31);

console.log(matheus);

console.log(Humano.prototype.idade);

Humano.prototype.idade = "Não definida";

console.log(matheus.idade);

console.log(Humano.prototype.idade);


/* 12- Symbols em Classes */

class Aviao {
    constructor(marca, turbina){
        this.marca = marca;
        this.turbina = turbina;
    }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);
console.log(boeing[pilotos]);


/* 13- Getters e Setters */

// Get: É um método que retorna um valor de alguma propriedade.
// Set: É um método que define um valor para uma propriedade.

class Post {
    constructor(titulo, descricao, tags){
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo(){
        return `Você está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags){
        const tagsArray = tags.split(", ");
        this.tags = tagsArray;
    }
}

const myPost = new Post("Algum post", "É um post sobre programação");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação, javascript, js";

console.log(myPost);


/* 14- Herança */

class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor (patas, nome){
        super(patas, patas);  /* Chama o construtor da classe pai */
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Shark");

console.log(shark);

console.log(shark.patas);


/* 15- Operador instanceof */

console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "teste") instanceof Mamifero);

console.log(new postMessage("a", "b") instanceof Mamifero);