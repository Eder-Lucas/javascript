window.alert('Você está prestes a desembarcar no aeroporto quando é parado por um oficial. Ele desconfia de você e então pergunta...')

//eventos
var enviar = window.document.getElementById('enviar')
enviar.addEventListener('click', nacionalidade)//quando clica em enviar

function nacionalidade() {
    var btnPais = window.document.getElementById('pais')
    var resposta = window.document.getElementById('res')
    var pais = btnPais.value//pega o valor definido no HTML

    if (pais != 'Brasil') {//se não for do Brasil
        resposta.innerHTML = `<p> <strong>MENTIRA!</strong> Você não veio do <strong>${pais}</strong> </p>`
    } else {//se for do Brasil
        resposta.innerHTML = `<p> <strong>CORRETO!</strong> Você veio do <strong>${pais}</strong>, pode passar.</p>`
    }
    
    enviar.style.background = 'gray'//quando clicar o fundo do botão enviar fica cinza
    setTimeout( () => {//após 80 milissegundos ele volta a ter o fundo branco
        enviar.style.background = ''
    }, 80)

}