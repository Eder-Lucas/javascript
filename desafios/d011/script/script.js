//selecionando elementos globais
const numInput = document.querySelector('input#number')
const numParaBin = document.querySelector('input#numbin')
const btn = document.querySelector('input#btn')
const res = document.querySelector('div#res')

//ao clicar no botão 'Enviar' é feito uma validação
//verifica se o número inserido é válido para a operação
btn.addEventListener('click', validação)

function validação() {
    let num = Number(numInput.value)

    //se o valor for enviado vazio ou o número não é inteiro
    //retorna uma mensagem de erro
    if (numInput.value.trim() === '' || !Number.isInteger(num)) {
        return estiloErro('Insira um número válido.')
    }

    //trata os números negativos convertendo para positivo
    if (numParaBin.checked && num < 0) {
        limparEstilo()
        const num_positivo = Math.abs(num)//converte a positivo
        numInput.value = num_positivo
        num = num_positivo//atribui o valor positivo no num

        //chama a função que converte pra binário
        res.innerHTML = `${bin(num)}`

        //alerta na tela
        alert(`O programa não suporta números negativos. Considerando ${num} como ${num_positivo}.`)
    }

    //se não, verifica se a outra opção está selecionada
    //estando selecionada e contendo um valor não binário ou negativo
    //retorna um erro
    else {
        if (!numParaBin.checked && !/^[01]+$/.test(numInput.value) || num < 0) {
            return estiloErro('Insira um número binário válido.')
        }

        //se não cair nos if anteriores os erros são limpados
        //a função que converte é chamada
        limparEstilo()
        res.innerHTML = `${bin(num)}`
    }
}

function bin(num) {

    //quando 'número para binário está' selecionado
    if (numParaBin.checked) {

        //cálculo mais longo
        /*
        for (let i = num; num > 0; num = Math.floor(num / 2)) {
            let resto = num % 2
            restoArray.push(resto)
        }
        let binario = restoArray.reverse()
        binario.unshift(0)
        */

        //cálculo simples
        /*
        .toString(2)--> base 2 converte um número para binário 
        retorna uma string
        */

        let binario = num.toString(2)

        //divisão por 4bits
        //adiciona zeros a esquerda para completar 4bits
        while (binario.length % 4 !== 0) {
            binario = '0' + binario
        }

        //separação dos números em grupos de 4
        //o loop for itera de 4 em 4 a cada repetição
        //o binario.slice() vai fatiar a array conforme as repetições
        //join transforma a array numa string só com espaços
        //retornando como resultado o valor convertido
        let grupoBin = []
        for (let i = 0; i < binario.length; i += 4) {
            grupoBin.push(binario.slice(i, i + 4))
        }
        return `${grupoBin.join(' ')}`
    }

    //quando é binário para número
    else {
        limparEstilo()

        //o método parseInt de base 2
        //recebe uma string e devolve um valor binário
        //convertemos o num para string
        //e o valor é retornado como resultado da conversão
        let decimal = parseInt(String(num), 2)
        return `${decimal}`
    }
}

//mostra um erro automaticamente
//mas não retorna uma mensagem
//é apenas visual
numInput.addEventListener('input', () => {
    let valor = numInput.value
    if (valor.trim() === '' || !Number.isInteger(Number(valor)) || Number(valor) < 0 || (!numParaBin.checked && !/^[01]+$/.test(numInput.value))) {
        estiloErro('')//retorna uma string vazia pois não há mensagem
    } else {
        limparEstilo()
    }
})

//limpa o estilo deixado por uma função de erro
function limparEstilo() {
    res.innerHTML = ''
    res.style.color = ''
    numInput.style.borderBottom = ''
}

//quando um erro acontece
//aplica um estilo e retorna uma mensagem
function estiloErro(msg) {
    res.style.color = 'red'
    numInput.style.borderBottom = '2px solid red'
    return res.innerHTML = `<p><strong>${msg}</strong></p>`
}

//animação gerada ao clicar no botão Enviar
btn.addEventListener('click', animaçãoBtn)
function animaçãoBtn() {
    btn.style.fontSize = '15.5px'
    btn.style.background = '#1874ff'
    btn.style.color = 'white'
    setTimeout(() => {
        btn.style.fontSize = ''
        btn.style.background = ''
        btn.style.color = ''
    }, 130)
}

//animação quando clica no ícone do github
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