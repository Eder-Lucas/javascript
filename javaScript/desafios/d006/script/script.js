//função que atualiza o HTML dependendo da hora
function atualizaHora() {
    //selecionando os elementos do HTML
    var msgStats = document.querySelector('p#saudacao')//aqui a saudação referente a hora
    var parágrafo = document.querySelector('p#msg')//aqui mostrará as horas
    var img = document.querySelector('img#img')//seleciona a imagem
    var corpo = document.body//body do HTML

    var atual = new Date()//cria um objeto date
    var hora = atual.getHours()//pega a hora atual
    
    //alterando para a gramática correta quando indica as horas
    if (hora === 1 || hora === 0) {//se for 1h ou 0h
        parágrafo.innerHTML = `Agora é: <strong>${hora}h</strong>`//agora é tal hora
    }
    else {//se for qualquer outra hora
        parágrafo.innerHTML = `Agora são: <strong>${hora}h</strong>`//agora são tal horas
    }

    //lógica principal
    if (hora >= 6 && hora < 12) {//entre 6 as 11h | manhã
        img.src = 'imagens/foto-manha.png'//muda a imagem
        img.alt = 'foto representando a manhã'//texto alternativo
        corpo.style.background = '#f8b058'//muda o fundo tornando mais escuro ao passar das horas
        corpo.style.color = 'black'
        msgStats.textContent = 'Bom dia!'
    }
    else if (hora === 12) {//exatamente 12h | meio-dia
        img.src = 'imagens/foto-manha.png'
        img.alt = 'foto representando a manhã'
        corpo.style.color = 'black'
        corpo.style.background = '#f8b058'
        msgStats.textContent = 'meio-dia! Já almoçou?'
    }
    else if (hora > 12 && hora < 18) {//entre 13 as 17h | tarde
        img.src = 'imagens/foto-tarde.png'
        img.alt = 'foto representando a tarde'
        corpo.style.color = 'white'
        corpo.style.background = '#D26A73'
        msgStats.textContent = 'Boa tarde!'
    }
    else if (hora >= 18 && hora < 24) {//entre 18 as 23h | noite
        img.src = 'imagens/foto-noite.png'
        img.alt = 'foto representando a noite'
        corpo.style.color = 'white'
        corpo.style.background = '#020659'
        msgStats.textContent = 'Boa noite!'
    }
    else if (hora === 0) {//exatamente 0h | meia-noite
        img.src = 'imagens/foto-madrugada.png'
        img.alt = 'foto representando a madrugada'
        corpo.style.color = 'white'
        corpo.style.background = 'black'
        msgStats.textContent = 'Meia-noite! O que faz acordado?'
    }
    else {//se não for nenhum dos acima | madrugada
        img.src = 'imagens/foto-madrugada.png'
        img.alt = 'foto representando a madrugada'
        corpo.style.color = 'white'
        corpo.style.background = 'black'
        msgStats.textContent = 'Está tudo tão quieto...'
    }
}
//quando clicar no icone do github
document.querySelector('#linkGitHub').addEventListener('click', function () {
    //carrega uma animação
    this.style.width = '40px'//'this' referencia o que foi selecionado, neste caso foi o icone
    this.style.transition = '.1s ease-in-out'
    this.style.borderRadius = '20px'

    setTimeout(() => {
        //termina a animação de clique
        this.style.width = ''
        this.style.borderRadius = ''
        setTimeout(() => {//encaminha para o GitHub
            window.open('https://github.com/Eder-Lucas', '_blank')
        }, 100)//após a animação o usuário é levado para o GitHub
    }, 90)//tempo para terminar a animação
})

//quando tudo for carregado
window.onload = () => {
    atualizaHora()//chama a função para verificar a hora atual

    //a cada intervalo de 1s chama a função para alterar automáticamente a hora
    setInterval(() => { 
        atualizaHora()
    }, 1000)//1s
}