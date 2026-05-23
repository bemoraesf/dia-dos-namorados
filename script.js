// Suas 3 perguntas
const perguntas = [
    "1. Você lembra exatamente o dia em que a gente se conheceu?",
    "2. Você concorda que a gente forma o casal mais lindo do mundo?",
    "3. Você concorda que sua namorada linda que ama mais?"
];

let perguntaAtual = 0;

// Elementos das telas
const telaIntro = document.getElementById("tela-intro");
const telaQuiz = document.getElementById("tela-quiz");
const telaFinal = document.getElementById("tela-final");

// Elementos do jogo
const textoPergunta = document.getElementById("pergunta-texto");
const botaoNao = document.getElementById("btn-nao");

// Função para o botão START
function iniciarQuiz() {
    telaIntro.classList.remove("ativo");
    telaQuiz.classList.add("ativo");
    atualizarPergunta();
}

// Atualiza o texto da pergunta na tela
function atualizarPergunta() {
    if (perguntaAtual < perguntas.length) {
        textoPergunta.innerText = perguntas[perguntaAtual];
        // Reseta o botão Não para a posição normal
        botaoNao.style.position = 'relative';
        botaoNao.style.left = '0px';
        botaoNao.style.top = '0px';
    } else {
        // Se respondeu todas, vai para a tela final
        telaQuiz.classList.remove("ativo");
        telaFinal.classList.add("ativo");
    }
}

// Quando clica em SIM
function respostaSim() {
    perguntaAtual++;
    atualizarPergunta();
}

// Faz o botão fugir (Adaptado para Touch e Mouse)
function fugaBotao(event) {
    if (perguntaAtual === 2) { 
        // Impede que o clique/toque real aconteça no celular
        if (event) {
            event.preventDefault();
        }

        // Define limites seguros para o botão não sumir da tela do celular
        const larguraJanela = window.innerWidth;
        const alturaJanela = window.innerHeight;

        // Deixa uma margem de segurança de 80 pixels das bordas
        const x = Math.random() * (larguraJanela - botaoNao.offsetWidth - 80) + 40;
        const y = Math.random() * (alturaJanela - botaoNao.offsetHeight - 80) + 40;
        
        botaoNao.style.position = 'fixed';
        botaoNao.style.left = x + 'px';
        botaoNao.style.top = y + 'px';
    } else {
        // Nas duas primeiras perguntas, o "Não" avança normal
        perguntaAtual++;
        atualizarPergunta();
    }
}