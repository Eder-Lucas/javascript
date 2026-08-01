import readline from "node:readline/promises"
import { spawn } from "node:child_process"
import fs from "node:fs/promises"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const aulas = await classroom()

// Contabiliza todas as aulas
async function totalArchive() {
   const totalArchive = (await fs.readdir("./aulas")).length
   return totalArchive
}

// Retorna um objeto com todas as aulas
async function classroom() {
    const aulas = await fs.readdir('./aulas') // Pega todo o diretorio de /aulas

    let arquivos = {}
    let n = 0

    // Pega o diretorio de cada uma dessas aulas, no caso, os exercicios
    for (const aula of aulas) {
        const ex = await fs.readdir(`./aulas/${aula}`) 
        n++

        arquivos[n] = ex
    }

    return arquivos
}

// Lista todas as aulas
async function listClass() {
    const total = await totalArchive()

    for (let i = 1; i <= total; i++) {
        let numberLesson = String(i).padStart(2, "0")

        console.log(`[ ${i} ] 💻 AULA_${numberLesson}`)
    }
    console.log("")
    console.log("[ 0 ] ❌ Sair")
}

// Executa os prompts
async function questionsClass() {
    while(true) {
        const option = await (await rl.question("> ")).trim()

        // Opção de fechamento
        if(option === "0") {
            console.log("Node Archives fechado!")
            console.log("")

            process.exit(0)
        }
        // Se opcao for um número ausente em aulas, retorna undefined entrando no if de validação
        else if (!aulas[option]) {
            console.log("Aula não encontrada")
            console.log("")
            await listClass()
            
            continue
        }

        // Adiciona zeros ao começo da string
        const lesson = option.padStart(2, "0")

        let n = listLesson(lesson, option)
        await questionsLesson(n, lesson, option)

        break
    }
}

async function questionsLesson(totalExercise, lesson, option) {
    while(true) {
        const ex = await (await rl.question("> ")).trim()

        if (ex === "0") {
            console.log("")
            await start()
            
            break
        }

        const numExercise = Number(ex)

        if (numExercise > totalExercise || numExercise < totalExercise || isNaN(numExercise)) {
            console.log("Exercicío não encontrado")
            listLesson(lesson, option)
            continue
        }

        const exercise = ex.padStart(3, "0")

        const URL = `./aulas/aula${lesson}/ex${exercise}/ex${exercise}.js`
        spawn("node", ["--watch", URL], {
            stdio: "inherit"
        })

        break
    }
}

function listLesson(lesson, option) {   
    console.log("")
    console.log(`--- AULA ${lesson} ---`)
    console.log("")

    let n = 0
    for (const arquivo of aulas[option]) {
        n++
        console.log(`[ ${n} ] 📝 ${arquivo}`);         
    } 
    console.log("")
    console.log("[ 0 ] << Voltar")

    return n
}

// Inicializa a aplicação
async function start() {
    console.log("===============")
    console.log(" NODE ARCHIVES")
    console.log("===============")

    await listClass()
    questionsClass()
}

start()