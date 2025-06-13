//Bibliotecas

//Código de outras pessoas
//npmjs

import chalk from "chalk"
import { intro, outro, text } from "@clack/prompts"

async function main() {
    intro(chalk.bgYellow.black(" ■ JavaScript ■ "))
    intro("Bem vindo(a) ao programa!")

    const nome = await text({ message: chalk.cyan("Qual é o seu nome?") })

    outro(`Olá, ${chalk.yellow.bold(nome + '!')}`)
}
main()