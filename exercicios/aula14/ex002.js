var sec = 5
for (contador = 0; contador <= sec; contador++) {//faz uma ordem decrescente 5 até 0
    setTimeout(() => {
        var segundos = ''
        function cont(sec, segundos) {//retorna o texto já validado
            return `${sec} ${sec === 1 || sec === 0? segundos = 'segundo': segundos = 'segundos'}`
        }
        console.log(cont(sec, segundos)) 
        sec--
    }, contador * 1000)//executa a cada segundo
}






