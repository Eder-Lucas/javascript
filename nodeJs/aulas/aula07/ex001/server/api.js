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

        if (!campoNome || !isNaN(campoNome)) {
            res.status(400).json({
                mensagem: "[ERRO 400] Campo Nome inválido"
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

    // Rota para buscar usuários   
    app.get('/usuarios/:id', (req, res) => {
        const id = Number(req.params.id)

        // Valida o envio
        if (isNaN(id)) {
            res.status(400).json({
                mensagem: "[ERROR 400] o campo ID deve conter apenas números"
            })

            return
        }

        const usuario = usuarios.find(u => u.id === id)

        // Valida se o usuário existe
        if (!usuario) {
            res.status(404).json({
                mensagem: "[ERRO 404] Usuário não encontrado"
            })

            return
        }

        res.status(200).send(usuario)
    })

    app.listen(PORT, '0.0.0.0', () => {
        console.log(title("Servidor: " + title.bgRgb(1,1,1)(" 07_EX001 ") + " rodando na porta " + title.bgRgb(1,1,1)(` ${PORT} `)))
        console.log("Acesso local: " + link.underline((`http://localhost:${PORT}/`)))
        console.log("Acesso por IP: " + link.underline((`http://${SERVER_IP}:${PORT}/`)))
    })
}