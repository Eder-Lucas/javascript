document.querySelector('input#verificar').addEventListener('click', function () {
    var anoAtual = new Date().getFullYear()
    var anoDigitado = document.querySelector('input#ano')
    var res = document.querySelector('div#res')

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (anoDigitado.value > anoAtual || anoDigitado.value <= 0) {
        res.style.textAlign = 'center'
        res.style.color = 'red'
        res.innerHTML = '<strong>[ERROR] Valor inválido</strong>'
    }
    else {
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - Number(anoDigitado.value)
        var genero = ''

        res.style.textAlign = 'center'
        res.style.color = ''

        if (sexo[0].checked) {
            genero = 'homem'
            res.innerHTML = `<p>Detectado um ${genero} com ${idade} anos</p>`

            if (idade >= 0 && idade <= 3) {
                img.setAttribute('src', 'imagens/bebe-masc.png')
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
            } else if (idade < 1000) {
                img.setAttribute('src', 'imagens/idoso-masc.png')
                img.setAttribute('alt', 'um idoso de chapéu')
            } else {
                img.setAttribute('src', 'imagens/caveira.png')
                img.setAttribute('alt', 'uma caveira do rosto humano')
                res.innerHTML = `<p>Você simplesmente não existe</p>`
            }
        }

        else if (sexo[1].checked) {
            genero = 'mulher'
            res.innerHTML = `<p>Detectado uma ${genero} com ${idade} anos</p>`

            if (idade >= 0 && idade <= 3) {
                img.setAttribute('src', 'imagens/bebe-fem.png')
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
            } else if (idade < 1000) {
                img.setAttribute('src', 'imagens/idoso-fem.png')
                img.setAttribute('alt', 'uma mulher idosa sorrindo')
            } else {
                img.setAttribute('src', 'imagens/caveira.png')
                img.setAttribute('alt', 'uma caveira do rosto humano')
                res.innerHTML = ''
                res.innerHTML = `<p>Você simplesmente não existe</p>`
            }
        }
        res.appendChild(img)
    }
})

document.querySelector('#verificar').addEventListener('click', function () {
    this.style.background = '#1874ffde'
    this.style.borderRadius = '25px'

    setTimeout(() => {
        this.style.background = ''
        this.style.borderRadius = ''
    }, 90)
})

document.querySelector('#linkGitHub').addEventListener('click', function () {
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
