var gerarTab = window.document.querySelector('input#gerar')
gerarTab.addEventListener('click', tabuada)

function tabuada() {
    var num = window.document.querySelector('input#num')
    var tab = window.document.querySelector('select#seltab')

    if (num.value.length == 0) {
        alert('Valor inválido')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''

        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n * i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }

}