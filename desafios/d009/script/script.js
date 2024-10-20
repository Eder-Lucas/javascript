var gerarTab = window.document.querySelector('input#gerar')
gerarTab.addEventListener('click', tabuada)
var res = window.document.querySelector('div#res')
var tab = window.document.querySelector('select#seltab')
var ul = window.document.querySelector('ul#ul')
var num = window.document.querySelector('input#num')

function checkMobile() {
    return window.matchMedia("(max-width: 768px)").matches
}

function tabuada() {
    if (num.value.length == 0) {
        alert('Valor inválido')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        ul.innerHTML = ''

        if (checkMobile()) {
            for (let i = 1; i <= 10; i++) {
                let li = document.createElement('li')
                li.innerHTML = `${n} x ${i} = ${n * i}`
                ul.appendChild(li)
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                let item = document.createElement('option')
                item.text = `${n} x ${i} = ${n * i}`
                item.value = `tab${i}`
                tab.appendChild(item)
            }
        }
    }
}

function version() {
num.value = ''
    if (checkMobile()) {
        tab.innerHTML = ''
        tab.style.display = 'none'
        ul.style.display = 'block'
    } else {
        tab.style.display = 'block'
        ul.style.display = 'none'
        ul.innerHTML = ''
    }
}
version()

window.matchMedia("(max-width: 768px)").addEventListener('change', () => {
    version()
})