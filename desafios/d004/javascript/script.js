//selecionando
var n1 = document.querySelector('input#numero')//pega o número digitado
var btn = document.querySelector('input#btn')//pega o botão enviar
var num = document.querySelector('#num')//pega onde é mostrado o número
var int = document.querySelector('#inteiro')//pega onde diz se o número foi convertido
var parImpar = document.querySelector('#par-ou-impar')//pega onde diz se é par ou impar

btn.addEventListener('click', verificaNumero)//quando clicar em enviar chama a função

function verificaNumero() {//função de quando clicar
    var valor = Number.parseFloat(n1.value)//converte o número de String para Number e pega seu valor
    var valorInt = Math.round(valor)//caso não seja inteiro será convertido
    var analisa = valorInt % 2//Salva o resultado do resto da divisão por 2
    num.innerHTML = `Número: <strong>${valor}</strong>`//mostra o número no HTML
    console.log(`valor digitado: ${valor}`)
    console.log(`valor convertido para inteiro: ${valorInt}`)
    console.log(`quando divido por 2 restou: ${analisa}`)
    /*
    todo número inteiro quando é dividido por 1 resta 0
        3| 1
        3 1
        0<--- resta 1
    */

   //se o valor digitado quando dividido por 1 reste um número diferente de 0 e se estiver válido 
    if (valor % 1 != 0 && !Number.isNaN(valor)) {
        console.log('O número digitado não foi inteiro')//avisa que não é inteiro
        int.innerHTML = `Número convertido para: <strong>${valorInt}</strong>`//mostra o valor convertido para inteiro
    } else {//se não apenas não mostra nada
        console.log('o número foi inteiro')
        int.textContent = ''
    }
    
    
    //se o que for digitado não for válido como número ou qualquer outra situação
    if (Number.isNaN(valor)){
        console.log('o número não foi válido')
        num.textContent = 'digite um número válido'
        parImpar.textContent = ''
    }
    //números pares quando são dividos por 2 restam 0
    //a variavel analisa recebe o restante da divisão entre o que foi digitado por 2 
    else if (analisa === 0) {//se o restante for igual a 0 
        console.log('o número foi par')//é par
        parImpar.innerHTML = '<strong>É par.</strong>'
    }
    else {//se não restar 0
        console.log('o número foi ímpar')//é impar
        parImpar.innerHTML = '<strong>É ímpar.</strong>'
    }   
}