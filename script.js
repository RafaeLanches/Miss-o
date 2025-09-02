const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "João Vitor (Baiano) está na academia, focado no treino, mas com a cabeça cheia de pensamentos sobre Ana Flávia (Bonhole). Ele vê ela pela primeira vez. O que ele faz?",
        alternativas: [
            {
                texto: "Baiano decide começar com uma conversa casual e se aproxima de Ana Flávia.",
                afirmacao: "Baiano tenta puxar papo de forma tranquila, sem parecer desesperado. Ele está curioso, mas não quer forçar nada."
            },
            {
                texto: "Baiano tenta impressioná-la logo de cara com um elogio exagerado.",
                afirmacao: "Ana Flávia não se impressiona com o elogio e Baiano percebe que talvez tenha exagerado no começo."
            }
        ]
    },
    {
        enunciado: "Após a primeira tentativa de conversa, Ana Flávia responde de maneira distante. O que Baiano faz para não desistir?",
        alternativas: [
            {
                texto: "Baiano finge que não se importa e foca no treino, esperando o momento certo para tentar de novo.",
                afirmacao: "Ana Flávia nota a atitude de Baiano e, pela primeira vez, sente que ele é diferente dos outros caras."
            },
            {
                texto: "Baiano tenta fazer uma piada para quebrar o gelo.",
                afirmacao: "Ana Flávia sorri, mas ainda mantém a postura distante. Baiano percebe que precisa de algo mais profundo."
            }
        ]
    },
    {
        enunciado: "Baiano começa a perceber que Ana Flávia tem um jeito misterioso e gosta de se fazer de difícil. Ele decide tentar algo mais ousado. O que ele faz?",
        alternativas: [
            {
                texto: "Baiano se aproxima e a provoca de maneira leve, dizendo que ela parece estar sempre se esquivando.",
                afirmacao: "Ana Flávia fica intrigada com a ousadia de Baiano e começa a pensar que ele realmente pode ser interessante."
            },
            {
                texto: "Baiano tenta se fazer de difícil também, ignorando Ana Flávia por um tempo para ver se ela se interessa mais.",
                afirmacao: "Ana Flávia, ao perceber que Baiano está agindo de forma diferente, decide tentar mais uma vez se aproximar."
            }
        ]
    },
    {
        enunciado: "Baiano e Ana Flávia têm um momento de interação mais intensa durante uma competição interna da academia. Como Baiano usa essa chance?",
        alternativas: [
            {
                texto: "Baiano se dedica ao máximo na competição para mostrar a sua força e dedicação.",
                afirmacao: "Ana Flávia se impressiona com o desempenho de Baiano e começa a vê-lo de uma maneira diferente."
            },
            {
                texto: "Baiano prefere não se destacar tanto e finge estar mais relaxado para não parecer arrogante.",
                afirmacao: "Ana Flávia percebe a atitude de Baiano, mas sente que ele está tentando ser alguém que não é."
            }
        ]
    },
    {
        enunciado: "Depois da competição, Ana Flávia se aproxima de Baiano. Ela pergunta sobre seu desempenho, mas também o provoca. O que Baiano responde?",
        alternativas: [
            {
                texto: "Baiano responde com confiança: 'Eu não costumo perder quando o prêmio é alguém tão difícil de conquistar.'",
                afirmacao: "Ana Flávia, surpresa pela confiança de Baiano, começa a ver nele uma pessoa intrigante e decide se abrir mais."
            },
            {
                texto: "Baiano responde de forma mais modesta: 'Eu só me dedico ao máximo, não busco competir com ninguém.'",
                afirmacao: "Ana Flávia fica com a sensação de que Baiano é um cara mais tranquilo, mas que ainda tem muito a mostrar."
            }
        ]
    },
    {
        enunciado: "Depois de várias interações, Baiano decide que é hora de ser direto com Ana Flávia. O que ele faz?",
        alternativas: [
            {
                texto: "Baiano a convida para sair, dizendo que gostaria de conhecer melhor quem ela realmente é.",
                afirmacao: "Ana Flávia, tocada pela sinceridade, aceita o convite e sente que talvez Baiano seja alguém mais interessante do que imaginava."
            },
            {
                texto: "Baiano decide não ser tão direto e, ao invés disso, faz um elogio indireto.",
                afirmacao: "Ana Flávia percebe que Baiano ainda está jogando o jogo e decide testar mais um pouco sua paciência."
            }
        ]
    },
    {
        enunciado: "Ana Flávia finalmente começa a ver Baiano como algo mais do que apenas um cara na academia. Como ela reage?",
        alternativas: [
            {
                texto: "Ela se aproxima e diz que está disposta a dar uma chance a ele, porque ele realmente a surpreendeu.",
                afirmacao: "Baiano sorri, sabendo que finalmente conseguiu conquistar o coração de Ana Flávia, mas a jornada ainda não acabou."
            },
            {
                texto: "Ela se mantém distante, dizendo que gosta dele, mas ainda precisa de mais tempo.",
                afirmacao: "Baiano decide ser paciente, sabendo que conquistar Ana Flávia será um processo, mas ele está disposto a esperar."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O desafio de Baiano e Ana Flávia está apenas começando...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
