const quiz = document.getElementById('quiz')
const resultado = document.getElementById('resultado')
const resultadoFinal = document.getElementById('resultadoFinal')
const detalhesResultado = document.getElementById('detalhesResultado')

const pergunta = document.getElementById("pergunta")
const imagem = document.getElementById("imagem")
const respA = document.getElementById("respA")
const respB = document.getElementById("respB")
const respC = document.getElementById("respC")
const respD = document.getElementById("respD")

let contAcerto = 0
let indexQuestaoAtual = 0

// Pega todas as chaves (q1, q2, q3...) para facilitar a passagem de questões
const chavesQuestoes = Object.keys(questoes)

// Mapeamento dos assuntos das questões para mostrar no final
const assuntos = {
    q1: "Tipos de robôs",
    q2: "Sensores (Conexões Arduino)",
    q3: "Sensoriamento",
    q4: "Multímetro",
    q5: "Protótipos (Resistores)",
    q6: "Arduino (Pinos Analógicos/PWM)",
    q7: "ESP32(8266)",
    q8: "Código (Funções e Parâmetros)",
    q9: "Código (Operadores e Condicionais)",
    q10: "Código (Retorno de Funções)"
}

function mudarQuestao() {
    let chaveAtual = chavesQuestoes[indexQuestaoAtual]
    let questao = questoes[chaveAtual] // Pega a questão atual

    pergunta.innerHTML = questao.pergunta

    // Mostra ou esconde a imagem dependendo da questão
    if (questao.imagem) {
        imagem.src = questao.imagem
        imagem.style.display = 'block'
    } else {
        imagem.style.display = 'none'
    }

    // Coloca os textos nos botões
    respA.innerHTML = `a) ${questao.respA.texto}`
    respB.innerHTML = `b) ${questao.respB.texto}`
    respC.innerHTML = `c) ${questao.respC.texto}`
    respD.innerHTML = `d) ${questao.respD.texto}`
}

function escolherResp(opcaoSelecionada) {
    let chaveAtual = chavesQuestoes[indexQuestaoAtual]
    let questao = questoes[chaveAtual]

    // Verifica se a opção que o usuário clicou (respA, respB, etc) tem "correta: true"
    if (questao[opcaoSelecionada].correta) {
        contAcerto++
        questao.acertou = true
    } else {
        questao.acertou = false
    }

    indexQuestaoAtual++ // Vai para a próxima

    // Verifica se chegou na última questão
    if (indexQuestaoAtual < chavesQuestoes.length) {
        mudarQuestao()
    } else {
        finalizarQuiz()
    }
}

function finalizarQuiz() {
    quiz.style.display = 'none'
    resultado.style.display = 'block'

    resultadoFinal.innerHTML = `Acertos: ${contAcerto} / 10`

    let htmlDetalhes = '<h3>Detalhes (O que você errou):</h3>'
    let erros = 0

    // Passa por todas as questões para ver o que errou
    chavesQuestoes.forEach((chave, index) => {
        if (!questoes[chave].acertou) {
            erros++
            let numeroQuestao = index + 1
            htmlDetalhes += `<p class="erro-item"><strong>Questão ${numeroQuestao}:</strong> Você errou sobre <em>${assuntos[chave]}</em>.</p>`
        }
    })

    if (erros === 0) {
        htmlDetalhes = "<p>Parabéns! Você acertou tudo!</p>"
    }

    detalhesResultado.innerHTML = htmlDetalhes
}

// Inicia o quiz chamando a primeira questão
mudarQuestao()