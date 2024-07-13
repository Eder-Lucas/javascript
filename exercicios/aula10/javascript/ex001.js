alert('O exercicío a seguir funciona corretamente apenas com um uso de um mouse!')

//selecionando os elementos da primeira div
var area = window.document.getElementsByTagName('div')[0]//1ª div
//eventos que chamam uma funcão 
area.addEventListener('click', clicar)//quando clicar com o mouse chama a função clicar
area.addEventListener('mouseenter', entrar)//quando entrar
area.addEventListener('mouseout', sair)//e quando sair com o mouse

function clicar() {//quando clica
    console.log('clicou')
    area.textContent = 'Clicou!'
    area.style.background = 'black'
    area.style.color = 'white'
}
function entrar() {//quando o mouse entra na div
    console.log('entrou')
    area.textContent = 'Entrou!'
}

function sair() {//quando sair
    console.log('saiu')
    area.textContent = 'Saiu!'

//reseta as configurações do evento clicar
    area.style.background = 'yellow'
    area.style.color = 'black'
}

//selecionando os elementos da segunda div
var msg = window.document.getElementById('mensagem')
var vzsMoveu = window.document.getElementById('vezes-que-moveu')
var area1 = window.document.getElementsByTagName('div')[1]//2ª div
area1.addEventListener('mousemove', mover)//quando o mouse se move dentro da div

var moveu = 0//ainda não moveu o mouse dentro da div
function mover() {// so executa quando o mouse está se movendo
    console.log(`moveu dentro do quadrado`)
    msg.textContent = 'movendo...'

//quando começar a mover é disparado um contador    
    vzsMoveu.textContent = `mexeu ${moveu++} vezes`
}

//selecionando os elementos da terceira div
var area2 = window.document.getElementsByTagName('div')[2]//3ª div
area2.addEventListener('mousedown', segurar)//quando segura
area2.addEventListener('mouseup', soltar)//depois que você solta o mouse
area2.addEventListener('mouseout', sairArea2)//uma configuração para quando tirar o mouse

function segurar() {//quando segura
    console.log('segurando')
    area2.textContent = 'Segurando...'
    area2.style.background = '#78780e'//muda a cor para simbolizar que está sendo segurado
    area2.style.borderRadius = '20px'//arredonda as bordas da div
    area2.style.cursor = 'grabbing'//cursor mudado para grabbing
}
function soltar() {//quando soltar
    console.log('soltou')
    area2.textContent = 'soltou'
    area2.style.background = 'yellow'
    area2.style.borderRadius = ''//tira a borda redonda
    area2.style.cursor = 'grab'//volta o cursor do mouse prara grab
}

function sairArea2() {//quando tirar o mouse da 3ª div
//caso uma configuração anterior permaneça mesmo quando tirar o mouse da div
    area2.textContent = 'Interaja...'//reseta qualquer texto para "Interaja..."
    area2.style.background = 'yellow'//muda qualquer cor para amarelo
    area2.style.borderRadius = ''//retira a borda 
    area2.style.cursor = 'pointer'//volta o cursor para pointer novamente
}