//selecionando elementos
const btnCalc = document.querySelector('input#btnCalc')
const inputNumber = document.querySelector('input#number')
const p = document.querySelector('p')

//ao clicar no botão 'calcular'
//faz algumas validações e chama a função fatorial caso tudo esteja certo
btnCalc.addEventListener('click', () => {
    let n = Number(inputNumber.value)

    //!Number.isInteger(n) => verifica se o número não é inteiro
    if (inputNumber.value.length == 0 || !Number.isInteger(n)) {
        inputNumber.style.borderBottom = '2px solid red'
        inputNumber.value = ''
        p.style.color = 'red'
        p.style.fontWeight = 'bold'
        p.textContent = 'Insira um número inteiro válido!'
    } else {
        p.innerHTML = `${fatorial(n)}`
    }

    //animação ao clicar no botão
    btnCalc.style.background = '#d5cfcfb4'
    setTimeout( () => {
        btnCalc.style.background = ''
    }, 130)
})

//mudança simultanea no input caso algo esteja errado
inputNumber.addEventListener('input', () => {
    if (inputNumber.value.length == 0 || !Number.isInteger(Number(inputNumber.value))) {
        inputNumber.style.borderBottom = '2px solid red'   
    } else {
        inputNumber.style.borderBottom = ''
        p.style.color = ''
        p.style.fontWeight = ''
        p.textContent = 'Digite um número acima'
    }
})

//função que calcula o fatorial
//recebe como parâmetro o valor de 'n' e retorna o resultado
function fatorial(n) {
    let fat = 1

    //validação de números negativos
    if (n < 0) {
        //transforma em positivo
        let n_convertido = Math.abs(n)

        alert(`Não é possivel calcular o fatorial de números negativos. Considerando ${n} como ${n_convertido}`)
        
        //coloca o novo valor positivo em 'n' para prosseguir o calculo
        n = n_convertido
    }

    //calculo fatorial
    for (let i = n; i > 1; i--) {
        fat = i * fat
    }

    //retorna a resposta
    return `O fatorial de ${n} é: <strong>${fat}</strong>`
}


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