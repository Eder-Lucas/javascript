// Operadores parte 2

// Operadores Relacionais
console.log('Operadores Relacionais')

// um tipo de comparação que retorna um valor booleano como resultado
var maior_que = 10 > 2
console.log(`10 é maior que 2? ${maior_que}`)// TRUE verdadeiro

var menor_que = 10 < 2
console.log(`10 é menor que 2? ${menor_que}`)// FALSE falso

var maior_ou_igual = 8 >= 8
console.log(`8 é maior ou igual a 8? ${maior_ou_igual}`)

var menor_ou_igual = 9 <= 7
console.log(`9 é menor ou igual a 7? ${menor_ou_igual}`)

var igual = 5 == 5
console.log(`5 é igual a 5? ${igual}`)

var diferente = 5 != 5
console.log(`5 é diferente de 5? ${diferente}`)

// Operadores de Identidade
console.log('Operadores de Identidade')

// analisa se é mesmo o valor e mesmo o tipo
var idênticos = 5 === "5" 
console.log(`5 é idêntico a "5"? ${idênticos}, pois está analisando o valor e tipo`)// FALSE

var idênticos2 = 5 == "5"
console.log(`5 é igual a "5"? ${idênticos2}, pois está sendo analisado apenas o valor e não o tipo`)// TRUE

var idênticos3 = 5 === 5
console.log(`5 é idêntico a 5? ${idênticos3}, pois são do mesmo valor e tipo`)

var idênticos4 = 5 != "5"
console.log(`5 é desigual restrito de "5"? ${idênticos4}, pois são de diferentes tipos apesar de ter o mesmo valor'`)

// Operadores Lógicos
console.log('Operadores Lógicos')

//! = negação nega as coisas
var x = !true// era verdadeiro mas passou a ser falso
console.log(x)// false

var y = !false// era falso mas virou true
console.log(y)// true

//&& = E, Conjunção: Apenas se as duas afirmações forem true para o resultado ser true
console.log('quero duas canetas, uma azul E outra vermelha')
var caneta1 = 'azul'
var caneta2 = 'preta'
var resultado = caneta1 == 'azul' && caneta2 == 'vermelha'
console.log(`A primeira caneta é ${caneta1}, a segunda é ${caneta2}. Logo o resultado é ${resultado}`)// false

//|| = OU, Disjunção: se uma afirmação for true o resultado é TRUE
console.log('quero duas canetas, uma azul OU uma vermelha')
var caneta1 = 'azul'
var caneta2 = 'preta'
var resultado = caneta1 == 'azul' || caneta2 == 'vermelha'
console.log(`A primeira caneta é ${caneta1}, a segunda é ${caneta2}. Logo o resultado é ${resultado}`)// TRUE

/* PRECEDÊNCIA
!
&&
||
*/

// Operador Ternário
console.log('Operador Ternário')

//principio base de if e else
/*
teste ? true: false
*/
var média = 5.5
var resultado = média >= 7?'APROVADO':'REPROVADO'
console.log(`Sua média foi de ${média} você está ${resultado}!`)

// se na mesma expressão aparecer os 4 operadores. Primeiro faz os aritméticos depois relacionais, os lógicos e ternário
/*
ARITMÉTICOS
RELACIONAIS
LÓGICOS
TERNÁRIOS
*/

