//selecionando elementos
var statusNet = window.document.querySelector('strong#status')//status da rede: on/off
var img = window.document.querySelector('img#wifi')//imagem ilustrativa
var msg = window.document.querySelector('p#mensagem')//texto básico

//eventos
//os dois observam quando a internet cair/offline ou voltar/online
window.addEventListener('offline', verificaNet)
window.addEventListener('online', verificaNet)
img.addEventListener('click', clicar)//evento extra de click

//quando clicar na imagem verifica se o navegador está com internet e executa as ações if e else
function clicar() {
    if (navigator.onLine) {//se estiver com internet = true
        alert('Eu sou a internet! Estou bem e funcionando a todo vapor!')
    } else {// se não estiver = false
        alert('Não me sinto bem...Há algo errado comigo...')
    }}
    
//pré carregando as imagens para evitar erros durante a operação
//pré carregamento da imagem com sinal de internet desligado
var imagemOff = new Image()//cria um objeto imagem
imagemOff.onload = function () {//verifica se carregou
    console.log('imagem offline carregada')
}
imagemOff.onerror = function () {//verifica se não carregou
    console.log('imagem offline não foi carregada')
}
imagemOff.src = './imagens/sem-wifi.png'//atribui o caminho da imagem com sinal de internet desligado
imagemOff.alt = 'Sinal-wifi-desligado'//atribui o texto alternativo

//pré carregamento da imagem com sinal de internet ligado
var imagemOn = new Image()
imagemOn.onload = function () {
    console.log('imagem online carregada')
}
imagemOn.onerror = function () {
    console.log('imagem online não foi carregada')
}
imagemOn.src = './imagens/wifi.png'
imagemOn.alt = 'Sinal-wifi-ligado'

//função que analisa a conexão com internet
function verificaNet() {
    if (navigator.onLine) {//se estiver online
        console.log('Usuário online')//avisa que o usuário está com internet
        img.src = imagemOn.src//carregamento das imagens e o texto alternativo
        img.alt = imagemOn.alt
        statusNet.innerHTML = ' Online'//coloca o status como online
        msg.innerHTML = 'Você tem internet! O que você mais gosta de fazer com ela?'
        statusNet.style.color = 'lime'//coloca a cor como verde para simbolizar que está online
        msg.style.color = 'lime'
    } 
    else {//se estiver offline
        console.log('Usuário offline')//avisa que o usuário está sem internet
        img.src = imagemOff.src//carregamento das imagens e o texto alternativo
        img.alt = imagemOff.alt        
        statusNet.innerHTML = ' Offline'//troca o status por offline
        msg.innerHTML = 'Nem dados movéis? Que tal jogar o Dinossauro do Chrome?'
        statusNet.style.color = 'red'//fica com cor vermelha para simbolizar que está offline
        msg.style.color = 'red'
    }}

//chama a função para verificar dinamicamente se está com internet ou não 
verificaNet()