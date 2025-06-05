const rl = require("node:readline")

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

function question(query) {
    return new Promise((resolve) => {
        prompt.question(query, resolve)
    })
}

async function main() {
    let numero

    //executa primeiro depois vem a condição
    do {
        const answer = await question('Digite um número qualquer: ')
        numero = Number(answer)

        if (Number.isNaN(numero)) {
            console.log("❌ O que você digitou é inválido!")
        }

    } while(Number.isNaN(numero))

    prompt.close()

    console.log(`Você digitou ${numero} `)
}
main()