const rl = require("node:readline")

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
})

function list() {
    console.log("Bem vindo ao programa!")
    console.log("[1] 📅 Data atual")
    console.log("[2] ⏰ Horário atual")
    console.log("[3] 🐄 Ver animais")
    console.log("[4] 🍕 Ver comidas")
    console.log("[5] 💻 Ver linguagens")
    console.log("[0] ❌ Sair")
}

function pergunta() {
    prompt.question("> Selecione o que deseja fazer ", answer => {
        switch (answer) {
            case '1': {
                const agora = new Date()
                const dia = String(agora.getDate()).padStart(2, "0")
                const mes = String(agora.getMonth() + 1).padStart(2, "0")
                const ano = agora.getFullYear()

                console.log(`Hoje é ${dia}/${mes}/${ano}`)
                pergunta()
                break;
            }
            case "2": {
                const agora = new Date()
                const hora = String(agora.getHours()).padStart(2, "0")
                const minutos = String(agora.getMinutes()).padStart(2, "0")

                console.log(`Agora são ${hora}:${minutos}`)
                pergunta()
                break;
            }
            case "3": {
                console.log("🐄 Vaca")
                console.log("🐔 Galinha")
                console.log("🐶 Cachorro")
                pergunta()
                break;
            }
            case "4": {
                console.log("🍕 Pizza")
                console.log("🍔 Hamburger")
                console.log("🍦 Sorvete")
                pergunta()
                break;
            }
            case "5": {
                console.log("JavaScript")
                console.log("C#")
                console.log("PHP")
                pergunta()
                break;
            }
            case "0": {
                console.log("Fim do Programa!")
                prompt.close()
                break;
            }
            default:
                console.log("Opção inválida")
                pergunta()
                break;
        }
    })
}

list()
pergunta()