import express from 'express'
import cors from 'cors'
import chalk from 'chalk'
import 'dotenv/config'
import usuariosRoutes from './routes/usuarios.routes.js'
import statusRoutes from './routes/status.routes.js'

export default function start() {
    const app = express()
    const PORT = 4040
    const SERVER_IP = process.env.SERVER_IP

    // Origens permitidas 
    const LIVE_SERVER = ''
    const DEVICES = ''
    const GITHUB_PAGES = 'https://eder-lucas.github.io'
    const origens = [DEVICES, LIVE_SERVER, GITHUB_PAGES]

    // Midlleware
    app.use(express.json())
    app.use(cors({
        origin: origens
    }))

    // Rotas
    app.use(usuariosRoutes)
    app.use(statusRoutes)

    // Estilo do chalk
    const title = chalk.rgb(255, 23, 189)
    const link = chalk.rgb(255, 225, 0)

    app.listen(PORT, '0.0.0.0', () => {
            console.log(title("Servidor: " + title.bgRgb(1,1,1)(" 08_EX001 ") + " rodando na porta " + title.bgRgb(1,1,1)(` ${PORT} `)))
        console.log("Acesso local: " + link.underline((`http://localhost:${PORT}/`)))
        console.log("Acesso por IP: " + link.underline((`http://${SERVER_IP}:${PORT}/`)))
    })
}