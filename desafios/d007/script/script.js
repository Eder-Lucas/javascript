document.querySelector('input#verificar').addEventListener('click', function () {
    var anoAtual = new Date().getFullYear()
    var anoDigitado = document.querySelector('input#ano')
    var res = document.querySelector('div#res')

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if (anoDigitado.value > anoAtual || anoDigitado.value <= 0) {
        res.style.textAlign = 'center'
        res.style.color = 'red'
        res.innerHTML = '<strong>preencha corretamente</strong>'
    }
    else {
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - Number(anoDigitado.value)
        var genero = ''

        if (sexo[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <= 3) {
                img.setAttribute('src', 'imagens/bebe.png')
                img.setAttribute('alt', 'um bebê sorrindo')
            } else if (idade < 12) {
                img.setAttribute('src', 'imagens/crianca-masc.png')
                img.setAttribute('alt', 'uma criança sorrindo')
            } else if (idade < 19) {
                img.setAttribute('src', 'imagens/jovem-masc.png')
                img.setAttribute('alt', 'um jovem de casaco preto')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/adulto-masc.png')
                img.setAttribute('alt', 'um adulto negro sorrindo')
            } else {
                img.setAttribute('src', 'imagens/idoso-masc.png')
                img.setAttribute('alt', 'um idoso de chapéu')
            }
        } 
        
        else if (sexo[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade <= 3) {
                img.setAttribute('src', 'imagens/bebe.png')
                img.setAttribute('alt', 'uma bebê sorrindo')
            } else if (idade < 12) {
                img.setAttribute('src', 'imagens/crianca-fem.png')
                img.setAttribute('alt', 'uma menina de boca aberta')
            } else if (idade < 19) {
                img.setAttribute('src', 'imagens/jovem-fem.png')
                img.setAttribute('alt', 'uma jovem de cabelo curto')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/adulto-fem.png')
                img.setAttribute('alt', 'uma mulher adulta sorrindo')
            } else {
                img.setAttribute('src', 'imagens/idoso-fem.png')
                img.setAttribute('alt', 'uma mulher idosa sorrindo')
            }
        }
        res.style.textAlign = 'center'
        res.style.color = ''
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
})
