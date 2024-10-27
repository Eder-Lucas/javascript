function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat = c * fat//o valor de cada loop é reatribuido na variavel
    }
    return fat//quando o loop termina ele retorna o resultado
}
console.log(fatorial(5))
