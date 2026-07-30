import readline from "node:readline"
import { spawn } from "node:child_process"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const aulas = {
    1: ["ex001.js"],
    2: ["ex001.js", "ex002.js"],
    3: ["ex001.js", "ex002.js"]
}

console.log("===============")
console.log(" NODE ARCHIVES")
console.log("===============")
console.log("[ 1 ] AULA_01")
console.log("[ 2 ] AULA_02")
console.log("[ 3 ] AULA_03")

rl.question("> ", async (opcao) => {
    if (opcao === "2") {
        console.log("")
        console.log("--- AULA 02 ---")
        console.log("")

        let n = 1
        for (const arquivo of aulas[2]) {
            console.log(`[ ${n} ] ${arquivo}`);
            n++
        }
      
        rl.question("> ", async (ex) => {
            await import(`./aulas/aula02/ex00${ex}/ex00${ex}.js`)

            rl.close()
        })       
    }
    if (opcao === "3") {
        console.log("")
        console.log("--- AULA 03 ---")
        console.log("")

        let n = 1
        for (const arquivo of aulas[3]) {
            console.log(`${n} - ${arquivo}`);
            n++
        }
        
        rl.question("> ", async (ex) => {
            spawn("node", ["--watch", `./aulas/aula03/ex00${ex}/ex00${ex}.js`], {
                stdio: "inherit"
            })

            rl.close()
        })       
    }
})