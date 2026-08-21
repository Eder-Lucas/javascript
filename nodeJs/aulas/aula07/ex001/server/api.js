import express from 'express'
import cors from 'cors'
import chalk from 'chalk'
import 'dotenv/config'

export function start() {
    const app = express()
    const PORT = 5050
    const SERVER_IP = process.env.SERVER_IP

    app.use(express.json())
    app.use(cors({
        origin: 'http://127.0.0.1:56113'
    }))

    // Estilo do chalk
    const title = chalk.rgb(255, 23, 189)
    const link = chalk.rgb(255, 225, 0)

    app.get('/', (req, res) => {
        res.json({
            mensagem: "Servidor respondendo!"
        })
    })

    app.listen(PORT, '0.0.0.0', () => {
        console.log(title("Servidor: " + title.bgRgb(1,1,1)(" 07_EX001 ") + " rodando na porta " + title.bgRgb(1,1,1)(` ${PORT} `)))
        console.log("Acesso local: " + link.underline((`http://localhost:${PORT}/`)))
        console.log("Acesso por IP: " + link.underline((`http://${SERVER_IP}:${PORT}/`)))
    })
}