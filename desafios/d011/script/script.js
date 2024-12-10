const numInput = document.querySelector('input#number')
const numParaBin = document.querySelector('input#numbin')
const btn = document.querySelector('input#btn')
const res = document.querySelector('div#res')

btn.addEventListener('click', validação)

function validação() {
    let num = Number(numInput.value)

    if (numInput.value.trim() === '' || !Number.isInteger(num)) {
        return estiloErro('Insira um número válido')
    }

    if (numParaBin.checked && num < 0) {
        limparEstilo()
        const num_positivo = Math.abs(num)
        numInput.value = num_positivo
        num = num_positivo
        res.innerHTML = `${bin(num)}`
        alert(`O programa não suporta números negativos. Considerando ${num} como ${num_positivo}.`)
    }
    else {
        if (!numParaBin.checked && !/^[01]+$/.test(numInput.value) || num < 0) {
            return estiloErro('Insira um número binário válido')
        }
        limparEstilo()
        res.innerHTML = `${bin(num)}`
    }
}

function bin(num) {
    if (numParaBin.checked) {

        /*
        for (let i = num; num > 0; num = Math.floor(num / 2)) {
            let resto = num % 2
            restoArray.push(resto)
        }
        let binario = restoArray.reverse()

        binario.unshift(0)
        */

        let binario = num.toString(2)
        while (binario.length % 4 !== 0) {
            binario = '0' + binario
        }

        let grupoBin = []
        for (let i = 0; i < binario.length; i += 4) {
            grupoBin.push(binario.slice(i, i + 4))
        }
        return `${grupoBin.join(' ')}`
    } else {
        limparEstilo()
        let decimal = parseInt(String(num), 2)
        return `${decimal}`
    }
}

function limparEstilo() {
    res.innerHTML = ''
    res.style.color = ''
    numInput.style.borderBottom = ''
}

function estiloErro(msg) {
    numInput.style.borderBottom = '2px solid red'
    res.style.color = 'red'
    return res.innerHTML = `<p><strong>${msg}</strong></p>`
}

numInput.addEventListener('input', () => {
    let valor = numInput.value
    if (valor.trim() === '' || !Number.isInteger(Number(valor)) || Number(valor) < 0 || (!numParaBin.checked && !/^[01]+$/.test(numInput.value))) {
        numInput.style.borderBottom = '2px solid red'
    } else {
        limparEstilo()
    }
})