import express from 'express'
import chalk from 'chalk'
import "dotenv/config"

// Estilo do chalk
const title = chalk.rgb(255, 23, 189)
const link = chalk.rgb(255, 225, 0)

const app = express()
const PORT = 3100
const SERVER_IP = process.env.SERVER_IP

app.get('/', (req, res) => {
    res.send("server online na porta " + PORT)
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(title("Servidor: " + title.bgRgb(1,1,1)(" 04_EX002 ") + " rodando na porta " + title.bgRgb(1,1,1)(` ${PORT} `)))
console.log("Acesse: " + link.underline((`http://${SERVER_IP}:${PORT}/`)))
})

