//selecionando elementos
const inputNum = document.querySelector('input#fnum')
const btnAdd = document.querySelector('input#btnA')
const btnDel = document.querySelector('input#delete')
const btnFinal = document.querySelector('input#btnF')
const ul = document.querySelector('ul#ul')
const form = document.querySelector('div#form')
const res = document.querySelector('div#res')

//vai armazenar os valores do input
let valores = []

btnAdd.addEventListener('click', adicionar)
function adicionar() {
    let num = Number(inputNum.value)

    //validação
    if (inputNum.value.trim() === '' || !Number.isInteger(num)) {
        Erro('Insira um número válido.')
    } else if (num < 1 || num > 100) {
        Erro('Insira um valor entre 1 e 100.')
    } else if (valores.includes(num)) {
        Erro(`O valor ${num} já foi adicionado.`)
    } else {
    //após ser aprovado pela validação
    //começa a adicionar os valores

        res.innerHTML = ''
        valores.push(num) //coloca o valor na array
        inputNum.value = ''
        inputNum.focus() //coloca o foco novamente no input

        //verifica se tem 1 filho na lista e ele é a mensagem
        if (ul.children.length === 1 && ul.children[0].id === "msgLi") {
            ul.innerHTML = '' //apaga a mensagem para adicionar os valores
        }

        let li = document.createElement('li')
        li.innerHTML = `Valor ${num} adicionado`
        ul.appendChild(li)
        
        //efeito acompanha a lista
        li.scrollIntoView({ behavior: "smooth", block: "end" })
    }
}

//essa função torna capaz adicionar números pelo Enter do teclado
//o function(e) está dizendo que você vai acessar informações específicas do evento que aconteceu
//é um mecanismo que te permite interagir com o evento de uma forma mais dinâmica
inputNum.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        adicionar()
    }
})

//configuração do botão de remover
btnDel.addEventListener('click', deletar)
function deletar() {
    inputNum.value = ''

    //evita enviar e apagar valores desordenadamente
    btnDel.disabled = true
    btnAdd.disabled = true

    //se tiver valores na array o último é apagado
    if (valores.length > 0) {
        valores.splice(-1, 1)
    }

    //selecionando o último elemento da lista
    let lastLi = ul.querySelector('li:last-child')

    //se o último elemento existe e não é a mensagem principal
    //carrega uma animação
    if (lastLi && lastLi.id !== 'msgLi') {
        lastLi.classList.add("animationApagando")

        setTimeout(() => {
            if (ul.children.length > 0) {
                ul.removeChild(ul.lastChild)
                res.innerHTML = ''
            }

            let newLastLi = ul.querySelector('li:last-child')
            if (newLastLi) {
                ul.scrollTop -= 5
                newLastLi.scrollIntoView({ behavior: "smooth", block: "end" })
            }

            if (ul.children.length === 0) {
                if (!document.querySelector('li#msgLi')) {
                    let msgLi = document.createElement('li')
                    msgLi.id = 'msgLi'
                    msgLi.textContent = 'Adicione números!'
                    ul.appendChild(msgLi)
                }
            }

            btnDel.disabled = false
            btnAdd.disabled = false
            inputNum.focus()
        }, 900)
    } else {
        btnDel.disabled = false
        btnAdd.disabled = false
    }
    lastLi.scrollIntoView({ behavior: "smooth", block: "end" })
}

btnFinal.addEventListener('click', finalizar)

function finalizar() {
    res.classList.remove("styleErro")

    if (valores.length == 0) {
        Erro('Adicione valores antes de finalizar!')
    } else {
        let quantValores = valores.length
        let menorValor = Math.min(...valores)
        let maiorValor = Math.max(...valores)
        let soma = valores.reduce((a, b) => a + b, 0)
        let media = (soma / quantValores)
        media = Number.isInteger(media) ? media : media.toFixed(1)
        /*
        metodo 2
        let quantValores = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / quantValores
        */
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos <strong>${quantValores}</strong> número${quantValores > 1 ? 's' : ''} informado${quantValores > 1 ? 's' : ''}.</p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${menorValor}</strong>.</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${maiorValor}</strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong>.</p>`
    }
}

inputNum.addEventListener('input', () => {
    let valor = Number(inputNum.value)

    if (inputNum.value.trim() === '' || !Number.isInteger(valor)) {
        Erro()
    } else if (valor < 1 || valor > 100) {
        Erro()
    } else if (valores.includes(valor)) {
        Erro()
    } else {
        semErro()
    }
})

function Erro(msg) {
    if (msg) {
        res.classList.add("styleErro")
        res.innerHTML = `<p><strong>${msg}</strong></p>`
    } else {
        inputNum.style.borderBottom = '2px solid red'
        res.innerHTML = ''
    }
}

function semErro() {
    res.classList.remove("styleErro")
    inputNum.style.borderBottom = ''
    res.innerHTML = ''
}

const botões = document.querySelectorAll('.buttons')

botões.forEach(function (botao) {
    botao.addEventListener('click', function () {
        this.classList.add("animacao")
        this.style.background = '#1b58ff'
        setTimeout(() => {
            this.classList.remove("animacao")
            this.style.background = ''
        }, 150);
    })
})

const gitHub = document.querySelector('img#linkGitHub')

gitHub.addEventListener('click', function () {
    this.classList.add('animationGit')

    setTimeout(() => {
        this.classList.remove('animationGit')
        setTimeout(() => {
            window.open('https://github.com/Eder-Lucas', '_blank')
        }, 100)
    }, 90)
})