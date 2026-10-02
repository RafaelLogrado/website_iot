let quiz = document.getElementById('quiz')
let resultado = document.getElementById('resultado')
let resultadoFinal = document.getElementById('resultadoFinal')

let pergunta = document.getElementById("pergunta")
let imagem = document.getElementById("imagem")
let respA = document.getElementById("respA")
let respB = document.getElementById("respB")
let respC = document.getElementById("respC")
let respD = document.getElementById("respD")

let contAcerto = 0
let contErro = 0

function escolherResp(resp, questao, numq){
    if(resp == "A"){
        if(questao.respA.correto){
            contAcerto++
            questao.acertado = 'true'
        }else{
            contErro++
            questao.acertado = 'false'
        }
    }else if(resp == "B"){
        if(questao.respB.correto){
            contAcerto++
            questao.acertado = 'true'
        }else{
            contErro++
            questao.acertado = 'false'
        }
    }else if(resp == "C"){
        if(questao.respC.correto){
            contAcerto++
            questao.acertado = 'true'
        }else{
            contErro++
            questao.acertado = 'false'
        }
    }else if(resp == "D"){
        if(questao.respD.correto){
            contAcerto++
            questao.acertado = 'true'
        }else{
            contErro++
            questao.acertado = 'false'
        }
    }

    if(numq == 10){
        finalizarQuiz()
    }else{
        let proxima = 'q' + (numq+1)
        mudarQuestao(questoes[proxima])
    }
}

function mudarQuestao(questao){ // ATUALIZA QUESTÃO
    pergunta.innerHTML = `${questao.pergunta}` // ATUALIZA PERGUNTA DA QUESTÃO
    if(questao.imagem != false){
        imagem.src = questao.imagem // COLOCA IMAGEM SE QUESTÃO TIVER
    }

    // ATUALIZA TEXTO E VALIDADE DAS ALTERNATIVAS
    respA.setAttribute('correto','false')
    respB.setAttribute('correto','false')
    respC.setAttribute('correto','false')
    respD.setAttribute('correto','false')
    
    respA.innerHTML = questao.respA.texto
    if(questao.respA.correto){
        respA.setAttribute('correto','true')
    }

    respB.innerHTML = questao.respB.texto
    if(questao.respB.correto){
        respB.setAttribute('correto','true')
    }

    respC.innerHTML = questao.respC.texto
    if(questao.respC.correto){
        resC.setAttribute('correto','true')
    }

    respD.innerHTML = questao.respD.texto
    if(questao.respD.correto){
        respD.setAttribute('correto','true')
    }
}

function finalizarQuiz(){
    contAcerto = 0, contErro = 0
    quiz.style.display = 'none'
    resultado.style.display = 'block'

    resultadoFinal.innerHTML = `Acertos: ${contAcerto}/10`

    let questoesErradas = []
    let cont = 0
    questoes.forEach(el => {
        cont++
        if(el.acertado == 'false'){
            questoesErradas.push('Questão ' + cont)
        }
    })
}

mudarQuestao(questoes.q1)