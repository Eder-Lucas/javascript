// Operadores parte 2

// Operadores Relacionais
var maior_que = 10 > 2
console.log(`10 é maior que 2? ${String(maior_que).replace('true' , 'Sim')}`)

var menor_que = 10 < 2
console.log(`10 é menor que 2? ${String(menor_que).replace('false' , 'Não')}`)

var maior_ou_igual = 8 >= 8
console.log(`8 é maior ou igual a 8? ${String(maior_ou_igual).replace('true' , 'Sim')}`)

var menor_ou_igual = 9 <= 7
console.log(`9 é menor ou igual a 7? ${String(menor_ou_igual).replace('false' , 'Não')}`)

var igual = 5 == 5
console.log(`5 é igual a 5? ${String(igual).replace('true' , 'Sim')}`)

var diferente = 5 != 5
console.log(`5 é diferente de 5? ${String(diferente).replace('false' , 'Não')}`)

// Operadores de identidade
var idênticos = 5 === "5" // analisa se é mesmo valor e mesmo  tipo
console.log(`5 é idêntico a "5"? ${String(idênticos).replace('false' , 'Não, pois está analisando o valor e tipo')}`)

var idênticos2 = 5 == "5"
console.log(`5 é igual a "5"? ${String(idênticos2).replace('true' , 'Sim, pois está sendo analisado apenas o valor e não o tipo')}`)

var idênticos3 = 5 === 5
console.log(`5 é idêntico a 5? ${String(idênticos3).replace('true' , 'Sim, pois são do mesmo valor e tipo')}`)

var idênticos4 = 5 !== "5"
console.log(`5 é desigual restrito de "5"? ${String(idênticos4).replace('true' , 'Sim, pois são de diferentes tipos apesar de ter o mesmo valor')}`)

// Operadores Lógicos
/*
! = negação nega as coisas
&& = E Conjunção so da true se as duas afirmações forem true/verdadeiras
|| = OU Disjunção so precisa de um true para dar true

PRECEDÊNCIA
!
&&
||
*/

// Ternário
/*
teste ? true: false
*/
var média = 5.5
var resultado = média >= 7?'APROVADO':'REPROVADO'
console.log(`Sua média foi de ${média} voçê está ${resultado}!`)

// se na mesma expressão aparecer os 4 operadores. Primeiro faz os aritméticos depois relacionais, os lógicos e ternário
/*
ARITMÉTICOS
RELACIONAIS
LÓGICOS
TERNÁRIOS
*/

