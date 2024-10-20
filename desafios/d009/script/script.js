//selecionando elementos principais
var tab = window.document.querySelector('select#seltab')
var ul = window.document.querySelector('ul#ul')
var num = window.document.querySelector('input#num')
var p = window.document.getElementsByTagName('p')[0]

function checkMobile() {
    return window.matchMedia("(max-width: 768px)").matches
}

//ao clicar no botão chama a função da tabuada
var gerarTab = window.document.querySelector('input#gerar')
gerarTab.addEventListener('click', tabuada)

function tabuada() {
    //se nenhum valor for colocado
    //não considera 0 como inválido apenas a ausência
    if (num.value.length == 0) {
        alert('Valor inválido')
        num.style.borderBottom = '1px solid red'
    } else { //se tiver válido a lógica procede
        var n = Number(num.value)
        num.style.borderBottom = ''
        p.textContent = ''
        tab.innerHTML = ''
        ul.innerHTML = ''
        if (checkMobile()) {
            //se for mobile
            //adiciona os valores nas listas
            for (let i = 1; i <= 10; i++) {
                let li = document.createElement('li')
                li.innerHTML = `${n} x ${i} = ${n * i}`
                ul.appendChild(li)//coloca como filho de 'ul'
            }

        } else {
            //se não for mobile
            //adiciona os valores no select
            for (let i = 1; i <= 10; i++) {
                let item = document.createElement('option')
                item.text = `${n} x ${i} = ${n * i}`
                item.value = `tab${i}`
                tab.appendChild(item)
            }
        }
    }
}

/*
função que apaga ou mostra os elementos dependendo se
o dispositivo for classificado como Mobile ou não
*/
function version() {
num.value = ''
    //se for mobile o select é ocultado
    if (checkMobile()) { 
        ul.style.display = 'block'
        tab.style.display = 'none'
        tab.innerHTML = ''
    }
    //se não for as listas são ocultadas
    else {
        tab.style.display = 'block'
        ul.style.display = 'none'
        ul.innerHTML = ''
    }
}

version()//chama a função para ser executada

//toda a vez que a largura da janela mudar e passar de 768px
//vai chamar a função version para tratar das interações
window.matchMedia("(max-width: 768px)").addEventListener('change', () => {

    //chama a função
    version()

    //mesmo que apague o texto volta a cada mudança
    p.textContent = 'Digite um número'
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