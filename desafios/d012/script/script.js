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
    semErro()
    inputNum.value = ''//apaga o valor do campo

    //evita enviar e apagar valores desordenadamente
    btnDel.disabled = true
    btnAdd.disabled = true

    //se tiver valores na array o último é apagado
    if (valores.length > 0) {
        valores.splice(-1, 1)
    }

    //último elemento da lista
    let lastLi = ul.querySelector('li:last-child')

    //rola a lista até o último li
    lastLi.scrollIntoView({ behavior: "smooth", block: "end" })

    //se o último elemento existe e não é a mensagem principal
    //carrega uma animação
    if (lastLi && lastLi.id !== 'msgLi') {
        lastLi.classList.add("animationApagando")//adiciona o estilo do CSS

        //após 900ms
        setTimeout(() => {
            //verifica se tem valores e apaga o último valor
            if (ul.children.length > 0) {
                ul.removeChild(lastLi)
                res.innerHTML = ''
            }

            //já que o anterior foi apagado 
            //pega o novo último elemento li
            let newLastLi = ul.querySelector('li:last-child')

            //efeito ao remover um item com rolagem ativada
            if (newLastLi) {//verifica se existe um novo último elemento li
                ul.scrollTop -= 5//move a rolagem 5px para cima
                newLastLi.scrollIntoView({ behavior: "smooth", block: "end" })//move novamente para baixo
            }

            //impede que a mensagem suma criando um novo elemento
            if (ul.children.length === 0) {
                if (!document.querySelector('li#msgLi')) {
                    let msgLi = document.createElement('li')
                    msgLi.id = 'msgLi'
                    msgLi.textContent = 'Adicione números!'
                    ul.appendChild(msgLi)
                }
            }

            //no final da remoção
            //habilita o uso dos botões e volta o foco pro input
            btnDel.disabled = false
            btnAdd.disabled = false
            inputNum.focus()
        }, 900)
    } else {//caso for inválido reabilita os botões
        btnDel.disabled = false
        btnAdd.disabled = false
    }
}

btnFinal.addEventListener('click', finalizar)

function finalizar() {
    res.classList.remove("styleErro")//formata o estilo

    //validação
    if (valores.length == 0) {
        Erro('Adicione valores antes de finalizar!')
    } else {
        let quantValores = valores.length//quantidade de valores
        let menorValor = Math.min(...valores)//(...)spread analisa cada valor individualmente
        let maiorValor = Math.max(...valores)

        //itera de forma simplificada cada valor da array e soma
        let soma = valores.reduce((a, b) => a + b, 0)

        let media = (soma / quantValores)//média

        //se o número for inteiro retorna média sem vírgula
        //se o número não for inteiro retorna a média com vírgula
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

        //mostra o resultado
        res.innerHTML = ''
        //adiciona o plural na frase por operador ternario
        res.innerHTML += `<p>Ao todo, temos <strong>${quantValores}</strong> número${quantValores > 1 ? 's' : ''} informado${quantValores > 1 ? 's' : ''}.</p>`

        res.innerHTML += `<p>O menor valor informado foi <strong>${menorValor}</strong>.</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${maiorValor}</strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong>.</p>`
    }
}

//verifica mudanças no input e trata os erros
inputNum.addEventListener('input', () => {
    let valor = Number(inputNum.value)

    if (inputNum.value.trim() === '' || !Number.isInteger(valor) || (valor < 1 || valor > 100) || valores.includes(valor)) {
        Erro()
    } else {
        semErro()
    }
})

//função de erro que retorna uma mensagem quando preciso
function Erro(msg) {
    if (msg) {
        res.classList.add("styleErro")
        res.innerHTML = `<p><strong>${msg}</strong></p>`
    } else {
        inputNum.style.borderBottom = '2px solid red'
        res.innerHTML = ''
    }
}

//função que limpa o estilo da função de erro
function semErro() {
    res.classList.remove("styleErro")
    inputNum.style.borderBottom = ''
    res.innerHTML = ''
}

//animção em todos os botões
document.querySelectorAll('.buttons').forEach(function (botao) {
    botao.addEventListener('click', function () {
        botao.classList.add("animacao")// 'botao' representa cada elemento
        botao.style.background = '#1b58ff'
        setTimeout(() => {
            botao.classList.remove("animacao")
            botao.style.background = ''
        }, 150);
    })
})

//animação da imagem do gitHub
document.querySelector('img#linkGitHub').addEventListener('click', function () {
    this.classList.add('animationGit')

    setTimeout(() => {
        this.classList.remove('animationGit')
        setTimeout(() => {
            window.open('https://github.com/Eder-Lucas', '_blank')
        }, 100)
    }, 90)
})