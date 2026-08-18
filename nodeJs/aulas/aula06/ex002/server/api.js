import express from 'express'
import cors from 'cors'
import chalk from 'chalk'
import 'dotenv/config'

export function startServer() {   
    const app = express()
    const PORT = 4000
    const SERVER_IP = process.env.SERVER_IP

    // Origens permitidas
    const LIVE_SERVER = 'http://127.0.0.1:56974'
    const GITHUB_PAGES = 'https://eder-lucas.github.io'
    const origens = [LIVE_SERVER, GITHUB_PAGES]

    // Nesse exercício, o front e back estão em origens diferentes
    // Isso causa erro de CORS
    app.use(express.json())

    // As requisições so podem vim dessa origem
    app.use(cors({
        origin: origens
    }))

    // Estilo do chalk
    const title = chalk.rgb(255, 23, 189)
    const link = chalk.rgb(255, 225, 0)

    app.get('/', (req, res) => {
        res.json({
            mensagem: "Servidor ativo!"
        })
    })

    const usuarios = []
    app.post('/usuarios', (req, res) => {
        const { nome, idade } = req.body

        const novoUsuario = {
            id: usuarios.length + 1,
            nome: nome,
            idade: idade
        }

        usuarios.push(novoUsuario)

        res.status(200).json({
            mensagem: "Usuário adicionado com sucesso!"
        })
    })

    app.get('/usuarios', (req, res) => {
        res.json(usuarios)
    })

    app.listen(PORT, () => {
        console.log(title("Servidor: " + title.bgRgb(1,1,1)(" 06_EX002 ") + " rodando na porta " + title.bgRgb(1,1,1)(` ${PORT} `)))
        console.log("Acesso local: " + link.underline((`http://localhost:${PORT}/`)))
        console.log("Acesso por IP: " + link.underline((`http://${SERVER_IP}:${PORT}/`)))
    })
}
