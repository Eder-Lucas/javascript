const inputNum = document.querySelector('input#fnum')
const btnAdd = document.querySelector('input#btnA')
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
    }else if (valores.includes(num)) {
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

/*
ao todo temos tantos números cadastrados
o menor valor informado foi tanto
somando todos os valores, temos tanto
a média dos valores digitados é tanto
*/

btnFinal.addEventListener('click', finalizar)

function finalizar() {
    res.innerHTML = ''
    let quantValores = valores.length

    let menorValor = Math.min(...valores)

    let soma = 0
    for (const i of valores) {
        soma += i
    }

    let media = (soma / quantValores).toFixed(2)

    res.innerHTML += `${quantValores} <br>`
    res.innerHTML += `${menorValor} <br>`
    res.innerHTML += `${soma} <br>`
    res.innerHTML += `${media}`

}