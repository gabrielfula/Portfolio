window.sr = ScrollReveal();

sr.reveal(".projects", {
    duration: 3000,
    delay: 1000
});

// Animação Texto


var a = window.document.getElementById('text');

function TextHtml() {
    a.innerText = "HTML é Linguagem de Marcação de HiperTexto onde é possível marcar um bloco de construção mais básico da web";
}

function TextCss() {
    a.innerText = "CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML, utilizado para a representação visual."

}

function TextBootstrap() {
    a.innerText = "Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples."

}

function TextJs() {
    a.innerText = "Javascript é uma linguagem de programação que permite criar conteúdos que se atualizam dinamicamente"

}

function Return() {
    a.innerText = "* Passe o Mouse por cima *"
}