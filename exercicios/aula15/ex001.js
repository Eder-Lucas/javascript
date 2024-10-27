//variável composta

let num = [3, 9, 5, 7]

//coloca o valor 2 no final 
num.push(2)

//organiza os números em ordem crescente
//considera apenas o primeiro número
//podendo haver sitações onde o 10 venha primeiro que o 2
num.sort()

//mostra os valores em colchetes 
console.log(num)

//diz quantos elementos tem uma array
console.log(`O vetor tem ${num.length} posições`)

//mostrando o elemento de índice 0
console.log(`O primeiro valor do vetor é ${num[0]}`)

//vê em que lugar está o valor 5 na array
//quando o valor não é encontrado ele retorna -1
let pos = num.indexOf(5)

if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 5 está na posição ${pos}`)
}
