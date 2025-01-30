/* 1- Movendo-se pelo DOM*/

// Mostra o body do HTML
console.log(document.body);

// Mostra os filhos do body
console.log(document.body.childNodes);

// Mostra o primeiro filho do body
console.log(document.body.childNodes[1]);

// Mostra os filhos do primeiro filho do body
console.log(document.body.childNodes[1].childNodes);

// Mostra o texto do primeiro filho do primeiro filho do body
console.log(document.body.childNodes[1].childNodes[1].textContent);


/* 2- Selecionando elementos por tag*/

const listItens = document.getElementsByTagName("li");

console.log(listItens);

/* 3- Encontrando elementos por ID */

// Encontrando elemento por ID
// O getElementById retorna o elemento com o ID especificado
// Nesse caso, o elemento com o ID "title"
const title = document.getElementById("title");

console.log(title);


/* 4- Encontrando elementos por Classe */

// Encontrando elementos por classe
// O getElementsByClassName retorna todos os elementos que
// possuem a classe "product"
const products = document.getElementsByClassName("product");

console.log(products);


/* 5- Encontrando elementos por CSS */

// Encontrando elementos por CSS Selector
// O querySelectorAll retorna todos os elementos que
// possuem a classe "product"
const productsQuery = document.querySelectorAll(".product");

console.log(products);

// Encontrando um elemento por CSS Selector
// O querySelector retorna o primeiro elemento que
// possue o ID "main-container"
const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);


/* 6- Alterando o HTML com insertBefore */


// Cria um novo par grafo <p>
const p = document.createElement("p");

// Pega o pai do título
const header = title.parentElement;

// Adiciona o novo <p> antes do título
header.insertBefore(p, title);


/* 7- Alterando o HTML com AppendChild */


// Seleciona o elemento <ul> dentro do <nav>
const navLinks = document.querySelector("nav ul");

// Cria um novo elemento <li>
const li = document.createElement("li");

// Adiciona o novo <li> ao final da lista <ul>
navLinks.appendChild(li);


/* 8- Alterando o HTML com ReplaceChild */


// Cria um novo elemento h2
const h2 = document.createElement("h2");

// Define o texto do h2
h2.textContent = "meu novo título!";

// Substitui o elemento title pelo novo h2 no header
header.replaceChild(h2, title);


/* 9- Alterando o HTML com CreateTextNode */


// Cria um novo texto com o conteúdo "Agora vamos colocar mais um título"
const myText = document.createTextNode("Agora vamos colocar mais um título");

console.log(myText);

// Cria um novo elemento H3 e adiciona o texto criado acima
const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

// Adiciona o elemento H3 criado acima ao container principal
mainContainer.appendChild(h3);



/* 10- Trabalhando com atributos: hetAttribute/setAttribute */

// Seleciona o primeiro link dentro da lista de navegação
const firstLink = navLinks.querySelector("a");

console.log(firstLink); // Exibe o elemento do link no console

// Define o atributo 'href' do link para 'https://google.com'
firstLink.setAttribute("href", "https://google.com");

console.log(firstLink.getAttribute("href")); // Exibe o novo valor do atributo 'href' no console

// Define o atributo 'target' do link para '_blank' para abrir em uma nova aba
firstLink.setAttribute("target", "_blank");


/* 11- Altura e Largura dos elementos  */

// Seleciona o elemento footer
const footer = document.querySelector("footer");

// Mostra a largura e altura do elemento, incluindo padding e border
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

// Mostra a largura e altura do elemento, sem considerar padding e border diminuindo 8px
console.log(footer.clientWidth);
console.log(footer.clientHeight);


/* 12- Posição dos elementos */

// Seleciona o primeiro produto da lista de produtos
const product1 = products[0];

// Exibe as dimensões e posição do primeiro produto em relação à viewport
console.log(product1.getBoundingClientRect());


/* 13- Estilos (CSS) com JS */

// Muda a cor do texto do container principal para vermelho
// Muda a cor de fundo do container principal para preto
// Adiciona padding de 15px na parte inferior do container principal
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";


/* 14- Alterando estilos de HTMLCollection */

// Itera sobre cada item da lista e altera a cor de fundo para vermelho

for(const li of listItens){
    li.style.backgroundColor = "red";
}
