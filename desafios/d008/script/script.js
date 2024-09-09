var inputInicio = document.querySelector('input#inicio')
var inputPasso = document.querySelector('input#passo')
var inputFim = document.querySelector('input#fim')
var res = document.querySelector('div#res')

var campos = document.querySelectorAll('input[type="number"]')
campos.forEach(function (input) {
    input.addEventListener('input', () => {
        if (input.value !== '' && !isNaN(Number(input.value))) {
            input.style.borderBottom = ''
        } else {
            input.style.borderBottom = '2px solid red'
        }
    })
})

var contar = document.querySelector('input#contar')
contar.addEventListener('click', () => {
    contagem()
    animationClick()
})

function contagem() {
    var inicio = Number(inputInicio.value)
    var fim = Number(inputFim.value)
    var passo = Number(inputPasso.value)
    let resultado = ''
    res.innerHTML = ''

    campos.forEach(function (input) {
        input.style.borderBottom = ''

        if (input.value === '' || isNaN(Number(input.value))) {
            input.style.borderBottom = '2px solid red'
        }
        if (passo !== 0 && fim !== 0) {
            inputInicio.style.borderBottom = ''
        }
    })

    if (fim === 0) {
        res.innerHTML = '<p class="erro"><strong>Preencha os campos corretamente</strong></p>'
    } else if (fim <= inicio) {
        res.innerHTML = '<p class="erro">O valor de <strong>fim</strong> não pode ser <strong>menor ou igual</strong> ao inicio</p>'
        inputFim.style.borderBottom = '2px solid red'
        inputInicio.style.borderBottom = '2px solid red'
    }
    else if (passo === 0) {
        alert('O valor de passo não pode ser 0. Considerando passo igual a 1')
        inputPasso.value = 1
        passo = 1
        for (inicio; inicio <= fim; inicio += passo) {
            resultado += `${inicio} `
        }
        res.innerHTML = resultado
    } else {
        for (inicio; inicio <= fim; inicio += passo) {
            resultado += `${inicio} `
        }
        res.innerHTML = resultado
    }
}

function animationClick() {
    contar.style.background = '#94999d3e'
    contar.style.transition = '.3s ease'
    setTimeout(() => {
        contar.style.background = ''
    }, 100);

}

document.querySelector('img#linkGitHub').addEventListener('click', function () {
    this.style.width = '40px'
    this.style.transition = '.1s ease-in-out'
    this.style.borderRadius = '20px'

    setTimeout(() => {
        this.style.width = ''
        this.style.borderRadius = ''
        setTimeout(() => {
            window.open('https://github.com/Eder-Lucas', '_blank')
        }, 100)
    }, 90)
})