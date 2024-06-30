// Operadores parte 1

console.log("podemos realizar contas no JavaScript com os Operadores Aritméticos:")

var soma = 2 + 2
console.log(`Soma de 2+2 é: ${soma}`)

var subtração = 2 - 2
console.log(`A subtração de 2-2 é: ${subtração}`)

var multiplicação = 2 * 2
console.log(`A multiplicação de 2x2 é: ${multiplicação}`)

var divisão = 2 / 2 // aceita números quebrados
console.log(`A divisão de 2÷2 é: ${divisão}`)

var resto_da_divisão = 3 % 2
console.log(`O resto da divisão entre 3÷2 é: ${resto_da_divisão}`)
/*
    3| 2
  - 2  1
    1<-- resto
*/

var potência = 2 ** 2
console.log(`A potênciação de 2² é: ${potência}`)

/* 
Ordem de Precedência

()
**
* / % se aparecer juntas numa mesma expressão, resolve da esquerda para a direita
+ -
*/

console.log("Atribuição Simples:")

var a = 5 + 3
var b = a % 5
var c = 5 * b ** 2// primeiro faz a potência
var d = 10 - a / 2// primeiro faz a divisão
var e = 6 * 2 / d// faz o que aparece primeiro, a multiplicação
var f = b % e + 4 / e// faz o resto e depois a divisão e por último soma tudo

console.log(`a = ${a}`)// 8
console.log(`b = ${b}`)// 3
console.log(`c = ${c}`)// 45
console.log(`d = ${d}`)// 6
console.log(`e = ${e}`)// 2
console.log(`f = ${f}`)// 3

console.log("Auto-atribuições:")

var n = 3
n = n + 4// ou n += 4 / só funciona quando a variavel receba ela mesma
n -= 5// simplificado
n = n + 4// completo
console.log(`No final n valerá: ${n}`)

console.log("Incremento:")

var x = 5
x++// mesmo que x = x + 1 ou x += 1
x--
x++
console.log(x)
