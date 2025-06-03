// Operadores Aritméticos

// operações
const soma = 3 + 3
const subtracao = 6 - 3
const multiplicacao = 2 * 3
const divisao = 9 / 3
const restoDivisao = 10 % 3
const potencia = 3 ** 3
const raizQuadrada = Math.sqrt(9)

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(restoDivisao)
console.log(potencia)
console.log(raizQuadrada)

//calculos

const x = 10
const y = 5
const calc = (x + y)*2
console.log(calc)

//desconto

const preco = 340
const porcentagem = 25

const desconto = (preco * porcentagem) / 100
const precoFinal = preco - desconto

console.log(`Preço do produto: ${preco}`)
console.log(`desconto de: ${porcentagem}%`)
console.log(`Preço final do produto: ${precoFinal}`)

//quantidade de segundos

const minutos = 60
const hora = minutos * 60
const dia = hora * 24
const semana = dia * 7
const ano = dia * 365

console.log(`Um minuto tem ${minutos} segundos`)
console.log(`Uma hora tem ${hora} segundos`)
console.log(`Um dia tem ${dia} segundos`)
console.log(`Uma semana ${semana} segundos`)
console.log(`Um ano tem ${ano} segundos`)