// objetos

const rl = require("node:readline")

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

prompt.question(console.log("oi"))
prompt.close()
