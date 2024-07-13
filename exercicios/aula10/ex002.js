var btn = window.document.querySelector('input#btn')//selecionou o botão
btn.addEventListener('click', somar)//quando clicar

function somar() {
    //selecionando os elementos
    var tn1 = window.document.querySelector('input#txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById('res')

    var n1 = Number(tn1.value)//transformou em números e pegou seu valor
    var n2 = Number(tn2.value)
    var soma = n1 + n2//somou
    res.innerHTML = `A soma entre <strong>${n1}</strong> e <strong>${n2}</strong> é igual a: <strong>${soma}</strong>`//mostra o resultado na tela
    if (n1 == 0 && n2 == 0) {//caso nenhum número seja inserido
        res.textContent = 'Certifique-se de colocar algum valor'
    }else if (soma > 9999999) {//interação extra
        alert('A que ponto chegamos?')
    }
}