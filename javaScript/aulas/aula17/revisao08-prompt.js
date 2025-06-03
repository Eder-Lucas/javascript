const rl = require("node:readline")

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
})

console.log("Bem vindo ao programa!")
console.log("[1] 📅 Data atual")
console.log("[2] ⏰ Horário atual")
console.log("[3] 🐄 Ver animais")
console.log("[4] 🍕 Ver comidas")
console.log("[5] 💻 Ver linguagens")
console.log("[0] ❌ Sair")


prompt.question("> Selecione o que deseja fazer ", answer => {
    switch (answer) {
        case '1':{
            const agora = new Date()
            const dia = String(agora.getDate()).padStart(2, "0")
            const mes = String(agora.getMonth()).padStart(2, "0")
            const ano = agora.getFullYear()

            console.log(`Hoje é ${dia}/${mes}/${ano}`)
            break;
        }
        case "2":{
            const agora = new Date()
            const hora = String(agora.getHours()).padStart(2, "0")
            const minutos = String(agora.getMinutes()).padStart(2, "0")
            
            console.log(`Agora são ${hora}:${minutos}`)
            break;
        }
        case "3":{
            console.log("🐄 Vaca")
            console.log("🐔 Galinha")
            console.log("🐶 Cachorro")
            break;
        }
        case "4":{
            console.log("🍕 Pizza")
            console.log("🍔 Hamburger")
            console.log("🍦 Sorvete")
            break;
        }
        case "5":{
            console.log("JavaScript")
            console.log("C#")
            console.log("PHP")
            break;
        }
               
        default:
            console.log("Fim do programa")
            break;
    }

    prompt.close()
})