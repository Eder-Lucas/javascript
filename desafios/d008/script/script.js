//selecionando elementos principais
var inputInicio = document.querySelector('input#inicio')
var inputPasso = document.querySelector('input#passo')
var inputFim = document.querySelector('input#fim')
var campos = document.querySelectorAll('input[type="number"]')
var res = document.querySelector('div#res')

//chama as funções quando clica no botão 'contar'
var contar = document.querySelector('input#contar')
contar.addEventListener('click', () => {
    contagem()
    animationClick()
})

function contagem() {
    var valid = true
    res.innerHTML = ''

    //seleciona todos os input
    campos.forEach(function (input) {
        input.style.borderBottom = ''

        //se algum input tiver em branco ou não for um número
        if (input.value.length == 0 || isNaN(Number(input.value))) {
            input.style.borderBottom = '1px solid red'//simboliza um erro
            valid = false//não é mais válido 
        }
    })

    //se a contagem não for valida
    if (!valid) {
        res.innerHTML = '<p class="erro"><strong>Preencha os campos corretamente</strong></p>'//mensagem de erro
        return//interrompe a função
    }

    //selecionando os campos para a contagem
    var inicio = Number(inputInicio.value)
    var fim = Number(inputFim.value)
    var passo = Number(inputPasso.value)

    //validação dos números
    if (passo <= 0) {//se o passo for menor ou igual a 0
        alert('O valor de passo não pode ser igual ou menor do que zero. Considerando passo como 1')
        inputPasso.value = 1//o input recebe o valor 1
        passo = 1//a variavel também recebe 1
    }

    //se o inicio for menor que o fim => contagem regressiva
    if (inicio < fim) {
        for (let i = inicio; i <= fim; i += passo) {
            res.innerHTML += `${i} \u{1F449}`//emoji de mãozinha pra direita
        }
    }
    else {//se inicio for maior que o fim => contagem progressiva
        for (let i = inicio; i >= fim; i -= passo) {
            res.innerHTML += `${i} \u{1F449}`
        }
    }
    res.innerHTML += '\u{1F3C1}'//no fim mostra um emoji de chegada
}

//animação do botão ao clicar
function animationClick() {
    contar.style.background = '#94999d3e'
    contar.style.transition = '.3s ease'
    setTimeout(() => {
        contar.style.background = ''
    }, 100);

}

//evento simultâneo
campos.forEach(function (input) {
    input.addEventListener('input', () => {//verifica qualquer alteração no input

        //quando algum campo está correto
        if (input.value.length !== 0 || isNaN(Number(input.value))) {
            input.style.borderBottom = ''
        } else {//assim que algum campo está invalido
            input.style.borderBottom = '1px solid red'//simboliza um erro
        }

        //quando todos estão corretos a saída é limpada
        if (inputFim.value.length !== 0 && inputInicio.value.length !== 0 && inputPasso.value.length !== 0) {
            res.innerHTML = ''
        }
    })
})

//animação ao clicar no icon do github
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

//quando tudo for carregado chama um função
window.onload = function () {
    inputInicio.focus()//o foco começa no input inicio

    //adciona uma class css ao body que faz a animação inicial
    window.document.body.classList.add('fade')

    //após 250 o body ganha outra class css que retira a animação do css
    setTimeout(() => {
        window.document.body.classList.add('visi')
    }, 250)

    res.innerHTML = '<p class="happy">Divirta-se!</p>'//texto intuitivo
}