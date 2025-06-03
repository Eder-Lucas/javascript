const rl = require("node:readline")

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

prompt.question("Qual número deseja ver a tabuada? ", answer => {
    const n = Number(answer)

    console.log(`A tabuada de ${n} é:`)
    if (Number.isNaN(n) || Number.isInteger(n) === false) {
        console.log("❌ O número não é valido")
    } else {
        for (let i = 1; i<=10; i++) {
            console.log(`${i} x ${n} = ${i*n}`)
        }
    }

    prompt.close()
})