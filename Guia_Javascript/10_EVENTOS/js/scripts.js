/* 1- Adicionando eventos */

// seleciona o bot o com o id "my-button"
const btn = document.querySelector("#my-button");

// adiciona um evento de click nesse bot o
// quando o evento de click for acionado, a fun o anonima ser  executada
btn.addEventListener("click", function (){
    // essa fun o ir  imprimir no console "Clicou aqui!"
    console.log("Clicou aqui!");
});

/* 2- Removendo eventos */

// seleciona o botão com o id "btn"
const secondBtn = document.querySelector("#btn");

// função que imprime uma mensagem no console
function imprimirMensagem(){
    console.log("Teste");
}

// adiciona um evento de click no bot o acima
// quando o evento de click for acionado, a função "imprimirMensagem" ser  executada
secondBtn.addEventListener("click", imprimirMensagem);

// seleciona o bot o com o id "other-btn"
const thirdBtn = document.querySelector("#other-btn");

// adiciona um evento de click no botão acima
// quando o evento de click for acionado, a função anonima ser  executada
thirdBtn.addEventListener("click",  () =>{

    console.log("Evento removido");
    // remove o evento de click do botão "btn"
    // o evento de click que foi adicionado anteriormente, foi removido
    secondBtn.removeEventListener("click", imprimirMensagem);
});


/* 3- Argumento do evento */

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) =>{
    console.log(event);
    // console.log(event.srcElement); // Exibe o elemento que foi clicado, mas não é utilizada hoje em dia
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
})

/* 4- Propagação */

const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
});

btnInsideContainer.addEventListener("click",() =>{
    e.stopPropagation();
    console.log("Evento 2");
});


/* 5- Removendo evento padrão */

const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Não alterou a página");
});


/* 6- Eventos de tecla */

document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
    });
    
    document.addEventListener("keydown", (e) => {
    console.log(`Pressionou a tecla ${e.key}`);
});

/* 7- Eventos de mouse */
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
    console.log("Você pressionou o botão");
});

mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou o botão");
});

mouseEvents.addEventListener("dblclick", () => {
    console.log("Clicou duas vezes");
});

/* 8- Movimento do mouse */
document.addEventListener("mousemove", (e) => {
    console.log(`No eixo X: ${e.x}`);
    console.log(`No eixo Y: ${e.y}`);
});

/* 9- Evento de Scroll */
window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 200) {
    console.log("Passamos 200px!");
    }
});

/* 10- Evento de foco */

const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("Entrou no input!");
});

input.addEventListener("blur", (e) =>{
    console.log("Saiu do input!");
});

/* 11- Evento de carregamento de página */

window.addEventListener("load", () => {
    console.log("A página carregou!");
});

window.addEventListener("beforeunload", () => {
    e.preventDefault();
    e.returnValue = "teste";
})

/* 12- Evento de debounce */

const debounce = (f, delay) =>{
    let timeout;

    return (...arguments) => {
        if(timeout){
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            f.apply(arguments);
        }, delay);
    };
};

window.addEventListener("mousemove", 
    debounce( () => {
    console.log("Executando a cada 400ms");
    }, 400)
);