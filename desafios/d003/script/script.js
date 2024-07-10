//selecionando elementos
var statusNet = window.document.querySelector('strong#status')//status da rede: on/off
var img = window.document.querySelector('img#wifi')//imagem ilustrativa
var msg = window.document.querySelector('p#mensagem')//texto básico

//eventos
//os dois observam quando a internet cair/offline ou voltar/online
window.addEventListener('offline', verificaNet)
window.addEventListener('online', verificaNet)

img.addEventListener('click', clicar)//evento click

//quando clicar na imagem verifica se o navegador está com internet e executa as ações if e else
function clicar() {
    if (navigator.onLine) {//se estiver com internet = true
        alert('Eu sou a internet! Estou bem e funcionando a todo vapor!')
    } else {// se não estiver = false
        alert('Não me sinto bem...Há algo errado comigo...')
    }
}

//função que analisa a conexão com internet
function verificaNet() {
    img.style.width = '200px'//a imagem wifi diferente da carregada no html serão menores

    if (navigator.onLine) {//se estiver online
        //coloca a imagem e o alt
        img.src = "./imagens/wifi.png"
        img.alt = 'Sinal-wifi-ligado'//caso a imagem não carregue

        //interação com o html
        statusNet.innerHTML = ' Online'//coloca o status como online
        msg.innerHTML = 'Você tem internet! O que você mais gosta de fazer com ela?'
        statusNet.style.color = 'lime'//coloca a cor como verde para simbolizar que está tudo bem
        msg.style.color = 'lime'
        
        console.log('Usuário online')
    } 
    else {//se estiver offline
        //troca a imagem e o alt
        img.src = './imagens/sem-wifi.png'
        img.alt = 'Sinal-wifi-desligado'//caso a imagem não carregue( muito provavelmente não irá )

        //interação com o html        
        statusNet.innerHTML = ' Offline'//troca o status por offline
        msg.innerHTML = 'Nem dados movéis? Que tal jogar o Dinossauro do Chrome?'
        statusNet.style.color = 'red'//fica com cor vermelha para simbolizar a queda
        msg.style.color = 'red'

        console.log('Usuário offline')
    }
}

//chama a função para verificar dinamicamente se está com internet ou não 
verificaNet()