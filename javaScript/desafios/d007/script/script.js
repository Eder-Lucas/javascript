var btnVeri = document.querySelector('input#verificar')//seleciona o botão de verificar
btnVeri.addEventListener('click', verificaIdade)//adiciona um evento de clique no botão

function verificaIdade() {//configuração da função ao clicar
    var anoAtual = new Date().getFullYear()//pega o ano atual
    var anoDigitado = document.querySelector('input#ano')//pega o ano digitado
    var res = document.querySelector('div#res')//seleciona onde sairá as respostas

    var img = document.createElement('img')//cria um elemento imagem
    img.setAttribute('id', 'foto')//atribui um id de foto 
    /* HTML >>> <img id="foto" src="" alt=""> */

    //valida o valor inserido como válido ou inválido
    if (isNaN(anoDigitado.value) || anoDigitado.value > anoAtual || anoDigitado.value <= 0) {
        //se o valor não for um número ou maior que o ano atual ou menor que 0
        res.style.textAlign = 'center'
        res.style.color = 'red'
        res.innerHTML = '<strong>[ERROR] Valor inválido</strong>'//avisa ao usuário
    }
    else {//se tiver válido carrega a lógica principal
        var sexo = document.getElementsByName('sexo')//seleciona o elemento pelo Nome
        var idade = anoAtual - Number(anoDigitado.value)//calcula a idade
        var genero = ''//genero ainda não definido 
        res.style.color = ''//reseta a cor caso esteja vermelha

        //configura a mensagem do res conforme a necessidade
        function formata_texto_do_res(idade, genero) {//recebe os valores de idade e genero
            //retorna o texto usando operadores ternários(if e else)
             /*
            
            genero === 'homem' ? 'um' : 'uma'
                se o genero for homem escreve 'um homem' 
                se não for escreve 'uma mulher'

            idade === 1 || idade === 0 ? 'ano' : 'anos'
              se a idade for 1 ou 0 escreve 'ano'
              se não for escreve no plural 'anos'

            */
            return `Detectado ${genero === 'homem' ? 'um' : 'uma'} ${genero} com ${idade} ${idade === 1 || idade === 0 ? 'ano' : 'anos'}`;
        }

        //se o primeiro name 'sexo' ou seja masculino estiver selecionado
        if (sexo[0].checked) {
            genero = 'homem'//o genero é homem
            res.innerHTML = `<p>${formata_texto_do_res(idade, genero)}</p>`
            //chama a função com innerHTML para mostrar na tela

            //lógica da idade masculina
            if (idade >= 0 && idade <= 3) {//entre 0 e 3 anos
                img.setAttribute('src', 'imagens/bebe-masc.png')//atribui o caminho para a imagem
                img.setAttribute('alt', 'um bebê sorrindo')//atribui o texto alternativo da imagem
            } else if (idade < 12) {//entre 4 e 11 anos
                img.setAttribute('src', 'imagens/crianca-masc.png')
                img.setAttribute('alt', 'uma criança sorrindo')
            } else if (idade < 19) {//entre 12 e 18 anos
                img.setAttribute('src', 'imagens/jovem-masc.png')
                img.setAttribute('alt', 'um jovem de casaco preto')
            } else if (idade < 60) {//entre 19 e 59 anos
                img.setAttribute('src', 'imagens/adulto-masc.png')
                img.setAttribute('alt', 'um adulto negro sorrindo')
            } else if (idade < 1000) {//entre 60 e 999 anos
                img.setAttribute('src', 'imagens/idoso-masc.png')
                img.setAttribute('alt', 'um idoso de chapéu')
            } else {//interação extra de morte
                img.setAttribute('src', 'imagens/caveira.png')
                img.setAttribute('alt', 'uma caveira do rosto humano')
                res.innerHTML = `<p>Você simplesmente não existe</p>`
            }
        }

        //se o segundo name 'sexo' ou seja feminino estiver selecionado
        else if (sexo[1].checked) {
            genero = 'mulher'//genero agora é mulher
            res.innerHTML = `<p>${formata_texto_do_res(idade, genero)}</p>`
            //chama a função novamente com innerHTML para mostrar na tela

            //lógica da idade feminina
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
        //adiciona a imagem dentro do res após a lógica
        res.appendChild(img)
    }
}

//animação de clique do botão verificar
btnVeri.addEventListener('click', function () {//função anônima
    //quando clica
    btnVeri.style.background = '#1874ffde'
    btnVeri.style.borderRadius = '25px'
    btnVeri.style.opacity = '0.8'

    setTimeout(() => {//após 90 milissegundos reseta tudo
        btnVeri.style.background = ''
        btnVeri.style.borderRadius = ''
        btnVeri.style.opacity = ''
    }, 90)
})

//encaminha o usuário para o github ao clicar na imagem
document.querySelector('img#linkGitHub').addEventListener('click', function () {
    //começa a animação
    this.style.width = '40px'//'this' se refere a imagem selecionada
    this.style.transition = '.1s ease-in-out'
    this.style.borderRadius = '20px'

    setTimeout(() => {
        this.style.width = ''
        this.style.borderRadius = ''
        setTimeout(() => {
            window.open('https://github.com/Eder-Lucas', '_blank')
        }, 100)//após 100 milissegundos manda o usuário para o github
    }, 90)//termina a animação em 90 milissegundos
    //isso dá tempo da animação terminar e logo após o usuário ser encaminhado para o link
})