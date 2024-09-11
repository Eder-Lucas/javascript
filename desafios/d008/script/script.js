var inputInicio = document.querySelector('input#inicio')
var inputPasso = document.querySelector('input#passo')
var inputFim = document.querySelector('input#fim')
var res = document.querySelector('div#res')

function contagem() {
    var valid = true
    res.innerHTML = ''
    
    campos.forEach(function (input) {
        input.style.borderBottom = ''
        if (input.value.length == 0 || isNaN(Number(input.value.length))) {
            input.style.borderBottom = '1px solid red'
            valid = false
        }
    })
 
    if (valid === false) {
        res.innerHTML = '<p class="erro"><strong>Preencha os campos corretamente</strong></p>'
        return
    }

    var inicio = Number(inputInicio.value)
    var fim = Number(inputFim.value)
    var passo = Number(inputPasso.value)

    if (passo <= 0) {
        alert('O valor de passo não pode ser igual ou menor do que zero. Considerando passo como 1')
        inputPasso.value = 1
        passo = 1
    }

    if (inicio < fim) {
        for (let i = inicio; i <= fim; i += passo) {
            res.innerHTML += `${i} \u{1F449}`
        }
    } else {
        for (let i = inicio; i >= fim; i -= passo) {
            res.innerHTML += `${i} \u{1F449}`
        }
    }
    res.innerHTML += '\u{1F3C1}'
}

function animationClick() {
    contar.style.background = '#94999d3e'
    contar.style.transition = '.3s ease'
    setTimeout(() => {
        contar.style.background = ''
    }, 100);

}

var campos = document.querySelectorAll('input[type="number"]')
campos.forEach(function (input) {
    input.addEventListener('input', () => {
        if (input.value !== '' && !isNaN(Number(input.value))) {
            input.style.borderBottom = ''
        } else {
            input.style.borderBottom = '1px solid red'
        }

        if (inputFim.value !== '' && inputInicio.value !== '' && inputPasso.value !== '') {
            res.innerHTML = ''
        }
    })
})

var contar = document.querySelector('input#contar')
contar.addEventListener('click', () => {
    contagem()
    animationClick()
})

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

window.onload = function () {
    inputInicio.focus()
    window.document.body.classList.add('fade')
    setTimeout(() => {
        window.document.body.classList.add('visi')
    }, 250)

    res.innerHTML = '<p class="happy">Divirta-se!</p>'
}