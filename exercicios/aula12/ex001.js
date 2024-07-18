//condição aninhada
var idade = 17
console.log(`Você tem ${idade} anos.`)

if (idade < 16) {
//menor que 16 anos
    console.log('Não vota')
}
//se em cima der false lógicamente a idade é maior que 16
else if (idade < 18 || idade > 65) {
//se continuar sendo menor que 18 ou maior que 65
        console.log('Voto opcional')
}
else {
//maior que 18 e menor que 65
    console.log('Voto obrigatório')
}