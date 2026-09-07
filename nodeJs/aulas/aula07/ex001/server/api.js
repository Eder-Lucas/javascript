import express from 'express'
import cors from 'cors'
import chalk from 'chalk'
import 'dotenv/config'

export function start() {
    const app = express()
    const PORT = 5050
    const SERVER_IP = process.env.SERVER_IP

    // Origens permitidas
    const LIVE_SERVER = ''
    const GITHUB_PAGES = 'https://eder-lucas.github.io'
    const origens = [LIVE_SERVER, GITHUB_PAGES]

    app.use(express.json())
    app.use(cors({
        origin: origens
    }))

    // Estilo do chalk
    const title = chalk.rgb(255, 23, 189)
    const link = chalk.rgb(255, 225, 0)

    app.get('/', (req, res) => {
        res.json({
            mensagem: "Servidor respondendo!"
        })
    })

    // Rota post para adicionar usuários
    const usuarios = []
    app.post('/usuarios', (req, res) => {
        const campoNome = req.body.nome

        if (!campoNome) {
            res.status(400).json({
                mensagem: "[ERRO 400] Nome é obrigatório"
            })

            return
        }

        const novoUsuario = {
            id: usuarios.length + 1,
            nome: campoNome
        }

        usuarios.push(novoUsuario)

        res.status(200).json({
            mensagem: "Um usuário adicionado!"
        })
    })

    app.listen(PORT, '0.0.0.0', () => {
        console.log(title("Servidor: " + title.bgRgb(1,1,1)(" 07_EX001 ") + " rodando na porta " + title.bgRgb(1,1,1)(` ${PORT} `)))
        console.log("Acesso local: " + link.underline((`http://localhost:${PORT}/`)))
        console.log("Acesso por IP: " + link.underline((`http://${SERVER_IP}:${PORT}/`)))
    })
}