'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoMedia = document.getElementById('media')
const botaoParouImpar = document.getElementById('parOuImpar')
const botaoVerificar = document.getElementById('verificar')
const botaoBhas = document.getElementById('bhas')

function somar(){
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2
    resultado.textContent = total
}
function identificar(){
    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')
    
    if(numero > 0){
        resultado.textContent = 'POSITIVO'
    }else if(numero < 0){
        resultado.textContent = 'NEGATIVO'
    }else{
        resultado.textContent = 'ZERO'
    }
}
function mediaAri(){
    const N1 = Number(document.getElementById('nota1').value)
    const N2 = Number(document.getElementById('nota2').value)
    const N3 = Number(document.getElementById('nota3').value)
    const N4 = Number(document.getElementById('nota4').value)

    const resultadoD = document.getElementById('resultado-d')

    const media = (N1 + N2 + N3 + N4)/4

    if(media >= 7){
        resultadoD.textContent = `APROVADO ${media}`
    }else{
        const exame = document.getElementById('exame')
        exame.classList.toggle('exame-reprovado')

        const N5 = Number(document.getElementById('nota-exame').value)

        if( N5 >= 5){
            resultadoD.textContent = `APROVADO EM EXAME`
        }else{
            resultadoD.textContent = `REPROVADO`
        }
    }
}
function bhaskara(){
    const NB1 = Number(document.getElementById('numerobhas1').value)
    const NB2 = Number(document.getElementById('numerobhas2').value)
    const NB3 = Number(document.getElementById('numerobhas3').value)

    const resultadoB = document.getElementById('bhaskara')

    const qua = NB2 * NB2
    const priM = 4 * NB1 * NB3
    const delta = qua - priM

    if(delta < 0){
        resultadoB.textContent = 'Não há solução real'
    }else if(delta == 0){
        const 
    }

}
function parOuImpar(){
    const numerop = Number(document.getElementById('numeroPouI').value)
    const resultadoP = document.getElementById('resultadoParouImpar')

    if(numerop % 2 == 0){
        resultadoP.textContent = 'Par'
    }else{
        resultadoP.textContent = 'Ímpar'
    }
}
function verificar(){
    const numeroV = Number(document.getElementById('numero1a9').value)

    if(numeroV >= 1 && numeroV <= 9){
        alert('O valor está na faixa permitida')
    }else{
        alert('O valor não está na faixa permitida')
    }
}

botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)
botaoMedia.addEventListener('click', mediaAri)
botaoBhas.addEventListener('click', bhaskara)
botaoParouImpar.addEventListener('click', parOuImpar)
botaoVerificar.addEventListener('click', verificar)