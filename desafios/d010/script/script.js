const btnCalc = document.querySelector('input#btnCalc')
const inputNumber = document.querySelector('input#number')
const p = document.querySelector('p')

btnCalc.addEventListener('click', () => {
    let n = Number(inputNumber.value)

    if (inputNumber.value.length == 0) {
        inputNumber.style.border = '2px solid red'
        inputNumber.value = ''
        p.textContent = 'Valor inválido'
    } else {
        p.innerHTML = `${fatorial(n)}`
    }
})

inputNumber.addEventListener('input', () => {
    if (inputNumber.value.length == 0) {
        inputNumber.style.border = '2px solid red'
    } else {
        inputNumber.style.border = ''
        p.textContent = 'Digite um número acima'
    }

})

function fatorial(n) {
    let fat = 1

    if (n < 0) {
        let n_convertido = Math.abs(n)
        alert(`Não é possivel calcular o fatorial de números negativos. Considerando ${n} como ${n_convertido}`)
        n = n_convertido
    }

    for (let i = n; i > 1; i--) {
        fat = i * fat
    }

    return `O fatorial de ${n} é: <strong>${Number.isInteger(n) ? fat : fat.toFixed(2)}</strong>`
}