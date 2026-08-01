import readline from "node:readline/promises"
import { spawn } from "node:child_process"
import fs from "node:fs/promises"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const aulas = await aula()

// Contabiliza todas as aulas
async function totalArchive() {
   const totalArchive = (await fs.readdir("./aulas")).length
   return totalArchive
}

// Retorna um objeto com todas as aulas
async function aula() {
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
async function list() {
    const total = await totalArchive()

    for (let i = 1; i <= total; i++) {
        let numberLesson = String(i).padStart(2, "0")

        console.log(`[ ${i} ] 💻 AULA_${numberLesson}`)
    }
    console.log("")
    console.log("[ 0 ] ❌ Sair")
}

// Executa os prompts
async function questions() {
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
            
            continue
        }

        // Adiciona zeros ao começo da string
        const lesson = option.padStart(2, "0")
        
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
    
        const ex = await (await rl.question("> ")).trim()

        if (ex === "0") {
            console.log("")
            await start()
            
            continue
        }

        const numExercise = Number(ex)

        if (numExercise > n || numExercise < n || isNaN(numExercise)) {
            console.log("Exercicío não encontrado")
            console.log("")
            continue
        }

        const exercise = ex.padStart(3, "0")

        spawn("node", ["--watch", `./aulas/aula${lesson}/ex${exercise}/ex${exercise}.js`], {
            stdio: "inherit"
        })

        break
    }
}

// Inicializa a aplicação
async function start() {
    console.log("===============")
    console.log(" NODE ARCHIVES")
    console.log("===============")

    await list()
    questions()
}

start()