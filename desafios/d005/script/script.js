//seleciona todos os inputs com class imc
var inputs = document.querySelectorAll('.imc')

//itera os elementos
inputs.forEach(function (input) {
    //chama uma função anônima
    input.addEventListener('focus', () => {//quando o input tiver em foco
        input.style.borderBottom = '1px solid black'
    })

    input.addEventListener('blur', () => {//quando não tiver em foco 
        input.style.borderBottom = ''
    })
})

//seleciona os elementos que vão ser usados no calculo de IMC
var peso = document.querySelector('input#peso')//peso
var altura = document.querySelector('input#altura')//altura
var enviar = document.querySelector('input#btn')//botão de enviar

//quando clicar no botão chama uma função que vai calcular o IMC
enviar.addEventListener('click', calculoImc)

function calculoImc() {
    var resImc = document.getElementsByClassName('res')[0]//resultado do IMC
    var res = document.getElementsByClassName('res')[1]//reposta padrão

    //converte os valores para números
    var kg = Number(peso.value)
    var m = Number(altura.value)

    //calcula o IMC
    var calc = kg / m ** 2
    var imc = calc.toFixed(1)//arredonda com uma casa decimal

    //não permite que insira números negativos ou maiores que 500 no peso
    if (kg <= 0 || kg > 500) {
        console.log('valor inválido')
        peso.style.borderBottom = '2px solid red'
        res.style.color = 'red'
        res.textContent = 'Preencha o campo corretamente'
        resImc.textContent = ''
    }
    else if (m <= 0 || m > 3) {//não permite números negativos ou maiores que 3 para a altura
        console.log('valor inválido')
        altura.style.borderBottom = '2px solid red'
        res.style.color = 'red'
        res.textContent = 'Preencha o campo corretamente'
        resImc.textContent = ''
    }
    else if (imc < 10.99) {//IMC menor que 10.99
        console.log('Muito abaixo do peso')
        resImc.style.color = 'yellow'
        resImc.textContent = `Seu IMC foi de: ${imc}`
        res.style.color = ''
        res.textContent = ' você está  muito abaixo do peso'
    }
    else if (imc >= 11 && imc < 18.49) {//IMC entre 11 e 18.49
        console.log('Abaixo do peso')
        resImc.style.color = 'yellowgreen'
        resImc.textContent = `Seu IMC foi de: ${imc}`
        res.style.color = ''
        res.textContent = ' você está abaixo do peso'
    }
    else if (imc >= 18.5 && imc < 24.99) {//IMC entre 18.5 e 24.99
        console.log('Normal')
        resImc.style.color = 'lime'
        resImc.textContent = `Seu IMC foi de: ${imc}`
        res.style.color = ''
        res.textContent = ' você está saudável'
    }
    else if (imc >= 25 && imc < 29.99) {//IMC entre 25 e 29.99
        console.log('Sobre peso')
        resImc.style.color = 'orange'
        resImc.textContent = `Seu IMC foi de: ${imc}`
        res.style.color = ''
        res.textContent = ' você está sobre peso'
    }
    else if (imc >= 30 && imc < 34.99) {//IMC entre 30 e 34.99
        console.log('Obesidade 1')
        resImc.style.color = '#fc4343'
        resImc.textContent = `Seu IMC foi de: ${imc}`
        res.style.color = ''
        res.textContent = ' você está com obesidade grau 1'
    }
    else if (imc >= 35 && imc < 39.99) {//IMC entre 35 e 39.99
        console.log('Obesidade 2')
        resImc.style.color = 'red'
        resImc.textContent = `Seu IMC foi de: ${imc}`
        res.style.color = ''
        res.textContent = ' você está com obesidade grau 2'
    }
    else if (imc >= 40) {//IMC maior ou igual a 40
        console.log('Obesidade 3')
        resImc.style.color = '#8a0000'
        resImc.textContent = `Seu IMC foi de: ${imc}`
        res.style.color = ''
        res.textContent = ' você está com obesidade grau 3'
    }

    //mostra no console os resultados
    console.log(`quilos: ${kg}`)
    console.log(`metros: ${m}`)
    console.log(`IMC: ${calc}`)
    console.log(`Arredondado: ${imc}`)
}

//quando clicar acontece uma curta animação no fundo do botão enviar
enviar.addEventListener('click', () => {
    enviar.style.background = '#434242'
    enviar.style.borderRadius = '10px'

    //após 80 milissegundos reseta tudo
    setTimeout(() => {
        enviar.style.background = ''
        enviar.style.borderRadius = ''
    }, 80)
})