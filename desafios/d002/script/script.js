var lamp = window.document.querySelector('#lampada')//seleciona a imagem
var msg = window.document.querySelector('#mensagem')//seleciona o parágrafo
var recar = window.document.querySelector('#recarregar')//seleciona o parágrafo de recarregar a página

//eventos da imagem
lamp.addEventListener('mouseenter', entrar)
lamp.addEventListener('mouseout', sair)
lamp.addEventListener('click', clicar)

var clicou = false//usuário ainda não clicou
var clicks = 0//usuário ainda não deu nenhum click na imagem

function clicar() {//quando clicar
    clicou = true//usuário clicou
    quantidade_clicks = clicks += 1//conta os clicks
    lamp.src = "./imagens/lampada-quebrada.png"//troca a imagem
    lamp.alt = 'lâmpada-quebrada'//muda o texto alternativo
    msg.innerHTML = "Ops! Recarregue a página e tenha mais cuidado"//texto indicativo
    recar.textContent = 'Recarregar'//mostra a opção de recarregar
    console.log(`A lâmpada foi clicada e quebrou ${quantidade_clicks} vezes`)

    if (clicks >= 2) {//apartir de 2 clicks essa mensagem se repete
        alert('Recarregue a página para continuar a experiência')
    }       
}

function entrar() {//quando entra
    if (clicou == false) {//só executa quando a lâmpada NÃO está quebrada/clicada
        lamp.src = "./imagens/lampada-ligada.png"//troca a imagem
        lamp.alt = 'lâmpada-ligada'//muda o texto alternativo
        console.log('A lâmpada ligou')
    }
}

function sair() {//quando sai
    if (!clicou) {//o operador "!" nega assim como a comparação anterior
        lamp.src = "./imagens/lampada-desligada.png"//troca a imagem
        lamp.alt = 'lâmpada-desligada'//muda o texto alternativo
        console.log('A lâmpada desligou')
    }
}

//quando clicar para recarregar
recar.addEventListener('click', () => {
    msg.innerHTML = ''//apaga o texto indicativo
    recar.textContent = 'Recarregando...'//mostra que ta carregando
    recar.style.transition = '1s ease-in-out'//animação
    recar.style.textDecoration = 'none'//tira a linha inferior
    recar.style.fontSize = '1.4em'//aumenta o texto
    recar.style.color = 'white'//muda a cor pra branco

    setTimeout( () => {//após 2s finalmente recarrega a página
        location.reload()
    }, 2000)
})