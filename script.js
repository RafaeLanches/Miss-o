const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "João Vitor (Baiano) está na academia tentando puxar papo com Ana Flávia (Bonhole). Ele decide usar a nova tecnologia de chat de IA para descobrir o que falar com ela. Como o chat sugere?",
        alternativas: [
            {
                texto: "O chat sugere que ele fale sobre treino e saúde, mas sem ser insistente.",
                afirmacao: "João Vitor segue o conselho da IA e consegue um bom começo de conversa com Ana Flávia, mas ela se mostra focada no treino."
            },
            {
                texto: "O chat sugere que ele a convide para um café depois do treino.",
                afirmacao: "João Vitor tenta ser mais direto e convida Ana Flávia para um café, mas ela recusa educadamente, dizendo que está muito focada no treino."
            }
        ]
    },
    {
        enunciado: "Após o encontro, João Vitor decide usar a IA para entender como melhorar suas chances com Ana Flávia. Qual é o primeiro conselho que a IA dá?",
        alternativas: [
            {
                texto: "A IA sugere que ele foque em demonstrar suas habilidades e inteligência, ao invés de tentar ser engraçado.",
                afirmacao: "João Vitor decide seguir o conselho da IA e começa a conversar com Ana Flávia sobre temas mais profundos e interessantes, como tecnologia e inovações."
            },
            {
                texto: "A IA sugere que ele seja mais direto e expresse claramente seu interesse em ela.",
                afirmacao: "João Vitor fica mais confiante ao seguir o conselho da IA e começa a ser mais claro sobre suas intenções. No entanto, Ana Flávia se mantém distante."
            }
        ]
    },
    {
        enunciado: "Depois de mais algumas tentativas, João Vitor decide pedir um conselho sobre como melhorar sua aproximação. A IA sugere ele fazer algo mais arriscado. O que a IA aconselha?",
        alternativas: [
            {
                texto: "A IA sugere que ele organize um evento de treino em grupo e a convide para ajudar na organização.",
                afirmacao: "João Vitor segue o conselho da IA e organiza um evento na academia. Ana Flávia aceita o convite e eles acabam se aproximando."
            },
            {
                texto: "A IA sugere que ele crie uma conversa descontraída sobre IA e como ela pode mudar a vida das pessoas.",
                afirmacao: "João Vitor tenta a sugestão, mas Ana Flávia parece desinteressada, dizendo que prefere focar no treino e nas atividades pessoais."
            }
        ]
    },
    {
        enunciado: "João Vitor começa a usar a IA para melhorar suas habilidades em outras áreas, como na escola. Ele decide pedir ajuda para um trabalho de biologia. O que a IA sugere para ele?",
        alternativas: [
            {
                texto: "A IA sugere que ele use seus conhecimentos e criatividade, ajudando a entender o conteúdo de forma mais profunda e prática.",
                afirmacao: "João Vitor segue o conselho da IA e consegue escrever um trabalho excelente, utilizando sua própria criatividade e as sugestões da IA."
            },
            {
                texto: "A IA sugere que ele copie partes de artigos científicos e coloque no trabalho para parecer mais profissional.",
                afirmacao: "João Vitor tenta seguir a sugestão, mas logo percebe que o trabalho não tem sua própria identidade e decide refazer, utilizando a IA apenas para sugestões."
            }
        ]
    },
    {
        enunciado: "Com o tempo, João Vitor percebe que a IA está se tornando cada vez mais útil para seu dia a dia, mas ele começa a questionar se está se tornando dependente dela. O que ele decide fazer?",
        alternativas: [
            {
                texto: "Ele decide parar de usar a IA por um tempo, focando mais em suas próprias ideias e habilidades.",
                afirmacao: "João Vitor consegue sentir que sua criatividade e confiança aumentam ao não depender tanto da IA."
            },
            {
                texto: "Ele decide usar a IA para melhorar ainda mais suas habilidades, confiando nela para aprimorar todas as suas ações.",
                afirmacao: "João Vitor sente que a IA o ajuda a se destacar em muitas áreas, mas começa a se questionar se isso está diminuindo sua autonomia."
            }
        ]
    },
    {
        enunciado: "João Vitor percebe que a IA pode ser uma ferramenta poderosa para o futuro do trabalho, mas ele começa a se preocupar com as pessoas que podem ser substituídas por máquinas. O que ele faz?",
        alternativas: [
            {
                texto: "Ele começa a estudar sobre como a IA pode ser utilizada de forma ética e inclusiva para beneficiar todos.",
                afirmacao: "João Vitor decide usar seus conhecimentos sobre IA para criar projetos que ajudem a integrar as pessoas ao mundo da tecnologia."
            },
            {
                texto: "Ele decide ignorar as implicações éticas da IA e usa apenas para seu próprio benefício, sem se preocupar com os outros.",
                afirmacao: "João Vitor começa a se distanciar da ética no uso da IA, o que o leva a perder sua conexão com os colegas."
            }
        ]
    },
    {
        enunciado: "João Vitor quer impressionar Ana Flávia, então decide usar a IA para criar algo incrível para ela. O que ele faz?",
        alternativas: [
            {
                texto: "Ele usa a IA para criar uma obra de arte digital personalizada e envia para Ana Flávia.",
                afirmacao: "Ana Flávia fica impressionada com a criatividade e a utilidade da IA, mas ainda mantém uma postura reservada."
            },
            {
                texto: "Ele usa a IA para criar uma música romântica especialmente para ela.",
                afirmacao: "Ana Flávia se encanta com a ideia, mas diz que prefere uma abordagem mais natural e pessoal, sem depender de tecnologia."
            }
        ]
    },
    {
        enunciado: "Após todas as tentativas com a IA, João Vitor começa a refletir sobre o impacto que a tecnologia tem na sua vida e no relacionamento com Ana Flávia. O que ele pensa?",
        alternativas: [
            {
                texto: "Ele percebe que a IA pode ser útil, mas que o verdadeiro valor está na interação humana e na autenticidade.",
                afirmacao: "João Vitor decide que, embora a IA tenha suas vantagens, ele precisa ser mais verdadeiro e natural em seus relacionamentos."
            },
            {
                texto: "Ele sente que a IA é a solução para todos os problemas, e decide confiar nela completamente em todas as áreas da vida.",
                afirmacao: "João Vitor se torna cada vez mais dependente da IA, mas logo percebe que isso não substitui as experiências reais e pessoais."
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
