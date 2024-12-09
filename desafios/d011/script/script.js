const btn = document.querySelector('input#btn')
btn.addEventListener('click', conts)

function conts() {
    const numInput = document.querySelector('input#number')
    const num_para_bin = document.querySelector('input#numbin')
    const res = document.querySelector('div#res')
    let num = Number(numInput.value)
    let restoArray = []

    if (num_para_bin.checked) {

        /*
        for (let i = num; num > 0; num = Math.floor(num / 2)) {
            let resto = num % 2
            restoArray.push(resto)
        }
        let binario = restoArray.reverse()

        binario.unshift(0)
        */

        let binario = num.toString(2)
        while (binario.length % 4 !== 0) {
            binario = '0' + binario
        }

        let grupos = []

        for (let i = 0; i < binario.length; i += 4) {
            grupos.push(binario.slice(i, i + 4))
        }
        console.log(grupos)
        res.innerHTML = grupos.join(' ')
    } else {
        let decimal = parseInt(num, 2)
        res.innerHTML = decimal     
    }
}