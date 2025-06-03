// ESTRUTURA CONDICIONAL IF

// if (expressão) {}

let temperature = 35

if (temperature >= 30) {
    console.log("Está muito quenta lá fora!")
} else {
    console.log("O tempo está agradável.")
}

let grade = 7.5

if (grade >= 9) {
    console.log("Aprovado!")
} else if (grade >= 6) {
    console.log("Aprovado na média!")
} else {
    console.log("Reprovado. Estude mais na próxima vez.")
}

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

const rl = require("node:readline")

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
})

let bank = 3000

console.log(`O valor total no banco: ${bank}`)
prompt.question("💵 Digite o valor que deseja transferir ", answer => {
    const quant = answer.replace(',','.')
    Number(quant)

    if (Number.isNaN(quant) || quant <= 0) {
        console.log("❌ O que você digitou não é um número válido")
    } else if (quant > bank) {
        console.log("❌ O valor digitado é maior do que o total")
    } else {
        bank -= quant
        bank = bank.toFixed(2)
        bank = bank.replace('.',',')
        
        console.log(`✔️  Você transferiu ${quant} reais`)
        console.log(`Agora o valor total no banco é: ${bank} reais`)
    }
    prompt.close()
})