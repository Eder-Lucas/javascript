window.alert('Você está prestes a desembarcar no aeroporto quando é parado por um oficial. Ele desconfia de você e então pergunta...')

//eventos
var enviar = window.document.getElementById('enviar')
enviar.addEventListener('click', nacionalidade)//quando clica em enviar
enviar.addEventListener('mouseenter', entrar)//quando mouse entra 
enviar.addEventListener('mouseout', saida)//quando o mouse sai

function entrar() {//quando o mouse entrar no botão enviar
    enviar.style.background = 'gray'
}

function saida() {//quando o mouse sair do botão enviar
    enviar.style.background = 'white'
}

function nacionalidade() {
    enviar.style.background = 'gray'
    var btnPais = window.document.getElementById('pais')
    var resposta = window.document.getElementById('res')
    var pais = btnPais.value//pega o valor definido no HTML

    if (pais != 'Brasil') {//se não for do Brasil
        resposta.innerHTML = `<p> <strong>MENTIRA!</strong> Você não veio do <strong>${pais}</strong> </p>`
        window.alert('VOCÊ ESTÁ PRESO!')
    } else {//se for do Brasil
        resposta.innerHTML = `<p> <strong>CORRETO!</strong> Você veio do <strong>${pais}</strong>, pode passar.</p>`
    }
}