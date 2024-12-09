const numInput = document.querySelector('input#number')
const numParaBin = document.querySelector('input#numbin')
const btn = document.querySelector('input#btn')
const res = document.querySelector('div#res')

btn.addEventListener('click', validação)
function validação() {
    let num = Number(numInput.value)

    if (numInput.value.trim() === '' || !Number.isInteger(num)) {
        numInput.style.border = '2px solid red'
        res.style.color = 'red'
        res.innerHTML = '<p><strong>Insira um número válido</strong></p>'
    } else if(num < 0) {
        let num_positivo = Math.abs(num)
        alert(`O programa não suporta números negativos. Considerando ${num} como ${num_positivo}.`)
        numInput.value = num_positivo
        numInput.style.border = ''
        num = num_positivo
        
        res.innerHTML = `${bin(num)}`
    } else {
        res.style.color = ''
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
        console.log(grupoBin)
        return `${grupoBin.join(' ')}`
    } else {
        let decimal = parseInt(String(num), 2)

        if (Number.isNaN(decimal)) {
            numInput.style.border = '2px solid red'
            res.style.color = 'red'
            return '<p><strong>Insira um número binário válido</strong></p>'
        } else {
            res.style.color = ''
            return `${decimal}`
        }
    }
}

numInput.addEventListener('input', () => {
    if (numInput.value.trim() === '' || !Number.isInteger(Number(numInput.value)) || Number(numInput.value) < 0) {
        numInput.style.border = '2px solid red'
    } else {
        numInput.style.border = ''

    }
})