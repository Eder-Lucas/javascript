bandido = 'vivo'
tiros = 0

console.log('bandido avistado')
while (bandido === 'vivo') {//enquanto o bandido estiver vivo
    console.log('*tiros*')
    tiros++
    if (tiros === 4) {//quando der 4 tiros
        console.log('bandido abatido')
        bandido = 'morto'//termina o loop
    }
}