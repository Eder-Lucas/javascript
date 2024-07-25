var msgStats = document.querySelector('#saudacao')
var parágrafo = document.querySelector('#msg')
var img = document.querySelector('#img')

function atualizaHora() {
    var atual = new Date()
    var hora = atual.getHours()
    var corpo = document.body

    if (hora === 1 || hora === 0) {
        parágrafo.innerHTML = `Agora é: <strong>${hora}h</strong>`
    }
    else {
        parágrafo.innerHTML = `Agora são: <strong>${hora}h</strong>`
    }

    if (hora >= 6 && hora < 12) {
        img.src = 'imagens/foto-manha.png'
        img.alt = 'foto representando a manhã'
        corpo.style.background = '#f8b058'
        corpo.style.color = 'black'
        msgStats.textContent = 'Bom dia!'
    }
    else if (hora === 12) {
        img.src = 'imagens/foto-manha.png'
        img.alt = 'foto representando a manhã'
        corpo.style.color = 'black'
        corpo.style.background = '#f8b058'
        msgStats.textContent = 'meio-dia! Já almoçou?'
    }
    else if (hora > 12 && hora < 18) {
        img.src = 'imagens/foto-tarde.png'
        img.alt = 'foto representando a tarde'
        corpo.style.color = 'white'
        corpo.style.background = '#D26A73'
        msgStats.textContent = 'Boa tarde!'
    }
    else if (hora >= 18 && hora < 24) {
        img.src = 'imagens/foto-noite.png'
        img.alt = 'foto representando a noite'
        corpo.style.color = 'white'
        corpo.style.background = '#020659'
        msgStats.textContent = 'Boa noite!'
    }
    else if (hora === 0) {
        img.src = 'imagens/foto-madrugada.png'
        img.alt = 'foto representando a madrugada'
        corpo.style.color = 'white'
        corpo.style.background = 'black'
        msgStats.textContent = 'Meia-noite! O que faz acordado?'
    }
    else {
        img.src = 'imagens/foto-madrugada.png'
        img.alt = 'foto representando a madrugada'
        corpo.style.color = 'white'
        corpo.style.background = 'black'
        msgStats.textContent = 'Está tudo tão quieto...'
    }
}

document.querySelector('#link').addEventListener('click', function() {
    this.style.width = '40px'
    this.style.transition = '.1s ease-in-out'
    this.style.borderRadius = '20px'

    setTimeout( () => {
        this.style.width = ''
        this.style.borderRadius = ''
        location.href = 'https://github.com/Eder-Lucas'
    }, 90)
})

window.onload = () => {
    atualizaHora()

    setInterval(() => {
        atualizaHora()
    }, 1000)
}
