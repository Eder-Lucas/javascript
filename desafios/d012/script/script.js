const inputNum = document.querySelector('input#fnum')
const btnAdd = document.querySelector('input#btnA')
const btnDel = document.querySelector('input#delete')
const btnFinal = document.querySelector('input#btnF')
const lista = document.querySelector('select#flista')
const ul = document.querySelector('ul#ul')
const form = document.querySelector('div#form')
const res = document.querySelector('div#res')

btnAdd.addEventListener('click', adicionar)

var valores = []

function adicionar() {
    let num = Number(inputNum.value)

    if (inputNum.value.trim() === '' || !Number.isInteger(num)) {
        alert('Insira um valor Válido')
    } else if (num < 1 || num > 100) {
        alert('Insira um valor entre 1 e 100')
    } else if (valores.includes(num)) {
        alert(`O valor ${num} já foi adicionado`)
    } else {
        res.innerHTML = ''
        valores.push(num)
        inputNum.value = ''
        inputNum.focus()

        if (ul.children.length === 1 && ul.children[0].id === "msgLi") {
            ul.innerHTML = ''
        }
        let li = document.createElement('li')
        li.innerHTML = `Valor ${num} adicionado`
        ul.appendChild(li)
        li.scrollIntoView({ behavior: "smooth", block: "end"})

        if (lista.children.length === 1 && lista.children[0].id === "msgOpt") {
            lista.innerHTML = ''
        }
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        lista.appendChild(item)
        item.scrollIntoView({ behavior:"smooth", block:"end"})

    }
}


btnDel.addEventListener('click', deletar)

function deletar() {
    valores.splice(-1, 1)
    lista.remove(lista.options.length - 1)
    ul.removeChild(ul.lastChild)
    res.innerHTML = ''
}

btnFinal.addEventListener('click', finalizar)

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let quantValores = valores.length
        let menorValor = Math.min(...valores)
        let maiorValor = Math.max(...valores)
        let soma = valores.reduce((a, b) => a + b, 0)
        let media = (soma / quantValores).toFixed(1)
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

function checkMobile() {
    return window.matchMedia("(max-width: 768px)").matches
}

function version() {
    if (checkMobile()) {
        ul.style.display = "block"
        lista.style.display = "none"
    } else {
        lista.style.display = "block"
        ul.style.display = "none"
    }
}

version()

window.matchMedia("(max-width: 768px)").addEventListener('change', version)