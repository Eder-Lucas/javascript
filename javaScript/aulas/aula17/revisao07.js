// ESTRUTURA CONDICIONAL IF

// if (expressão) {}

let temperature = 35

if (temperature >= 30) {
    console.log("Está muito quenta lá fora!")
} else {
    console.log("O tempo está agradável.")
}

//média
let grade = 7.5

if (grade >= 9) {
    console.log("Aprovado!")
} else if (grade >= 6) {
    console.log("Aprovado na média!")
} else {
    console.log("Reprovado. Estude mais na próxima vez.")
}

//Triângulos
const sideA = 3
const sideB = 5
const sideC = 4

if (sideA === sideB && sideB === sideC) {
    console.log("O triângulo é equilátero.")
} else if (sideA === sideB || sideB === sideC || sideC === sideA) {
    console.log("O triângulo é isósceles.")
} else {
    console.log("O triângulo é escaleno.")
}

//Bonus
const performance = 'ótimo'
const salario = 3000
let bonus = 0

if (performance === 'ótimo') {
    bonus = salario * 0.2
} else if (performance === 'muito bom') {
    bonus = salario * 0.15
} else if (performance === 'bom') {
    bonus = salario * 0.1
} else if (performance === 'regular') {
    bonus = salario * 0.05
} else {
    console.log("salario não reconhecido. Sem bonus")
}

console.log(`Bonus calculado: R$${bonus.toFixed(2)}`)

//questionário
const rl = require("node:readline")

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
})

let bank = 3000

console.log(`O valor total no banco: R$${bank.toFixed(2)}`)
prompt.question("💵 Digite o valor que deseja transferir: ", answer => {
    let quant = answer
    quant = quant.replace(',','.')
    quant = Number(quant)

    if (Number.isNaN(quant) || quant <= 0) {
        console.log("❌ O que você digitou não é um número válido")
    } else if (quant > bank) {
        console.log("❌ O valor digitado é maior do que o total")
    } else {
        bank -= quant
        bank = bank.toFixed(2)
        bank = bank.replace('.',',')

        console.log(`✔️  Você transferiu ${quant} reais`)
        console.log(`Agora o valor total no banco é: R$${bank} reais`)
    }
    prompt.close()
})