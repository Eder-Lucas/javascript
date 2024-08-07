var sec = 5
for (contador = 0; contador <= sec; contador++) {
    setTimeout(() => {
        var segundos = ''
        function cont(sec, segundos) {
            return `${sec} ${sec === 1 || sec === 0? segundos = 'segundo': segundos = 'segundos'}`

        }
        console.log(cont(sec, segundos)) 
        sec--
    }, contador * 1000)
}






