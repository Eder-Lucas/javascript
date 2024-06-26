var idade = 17
console.log(`Você tem ${idade} anos.`)

if (idade < 16) {
// menor que 16 
    console.log('Não vota')
} 
else if (idade < 18 || idade > 65) {
// entre 16 e 17, e acima de 65
        console.log('Voto opcional')
}
else {
// maior que 18
    console.log('Voto obrigatório')
}