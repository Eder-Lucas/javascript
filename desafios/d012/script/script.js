const inputNum = document.querySelector('input#fnum')
const btnAdd = document.querySelector('input#btnA')
const btnDel = document.querySelector('input#delete')
const btnFinal = document.querySelector('input#btnF')
const lista = document.querySelector('select#flista')
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
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        lista.appendChild(item)
    }
}

btnDel.addEventListener('click', deletar)

function deletar() {
    if (lista.options.length > 0) {
        res.innerHTML = ''
        valores.splice(-1, 1)
        lista.remove(lista.options.length - 1)
    }
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
        res.innerHTML += `<p>Ao todo, temos <strong>${quantValores}</strong> números informados.</p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${menorValor}</strong>.</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${maiorValor}</strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong>.</p>`
    }
}