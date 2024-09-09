var inputInicio = document.querySelector('input#inicio')
var inputFim = document.querySelector('input#fim')
var inputPasso = document.querySelector('input#passo')
var res = document.querySelector('div#res')

document.querySelector('input#contar').addEventListener('click', () => {
    var inicio = Number(inputInicio.value)
    var fim = Number(inputFim.value)
    var passo = Number(inputPasso.value)
       
    res.innerHTML = ''

    var campos = document.querySelectorAll('input[type="number"]')
    campos.forEach(function (input) {
        var valor = input.value
        input.style.border = ''

        if (valor === '' || isNaN(Number(valor))) {
            input.style.border = '2px solid red'
        }

        if (passo !== 0 && fim !== 0) {
            inputInicio.style.border = ''
        }
    })

    if (fim === 0) {
        res.innerHTML = '<p class="erro"><strong>Preencha os campos corretamente</strong></p>'
    } else if (fim <= inicio) {
        res.innerHTML = '<p class="erro">O valor de <strong>fim</strong> não pode ser <strong>menor ou igual</strong> ao inicio</p>'
        inputFim.style.border = '2px solid red'
    }
    else if (passo === 0) {
        alert('O valor de passo não pode ser 0. Considerando passo igual a 1')
        inputPasso.value = 1
        passo = 1
        for (inicio; inicio <= fim; inicio += passo) {
            res.innerHTML += `${inicio} `
            }
    } else {
        for (inicio; inicio <= fim; inicio += passo) {
            res.innerHTML += ` ${inicio} `
            }
    }
})