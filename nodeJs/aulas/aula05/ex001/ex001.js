import express from 'express'
import chalk from 'chalk'
import 'dotenv/config'

const app = express()
const PORT = 3000
const SERVER_IP = process.env.SERVER_IP

// Estilo do chalk
const title = chalk.rgb(255, 23, 189)
const link = chalk.rgb(255, 225, 0)

app.get('/', (req, res) => {
    res.send("aula 05")
})

app.post('/user', (req, res) => {
    res.json({
        mensagem: "Dados recebidos",
        dados: req.body
    })
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(title("Servidor: " + title.bgRgb(1,1,1)(" 05_EX001 ") + " rodando na porta " + title.bgRgb(1,1,1)(` ${PORT} `)))
    console.log("Acesso local: " + link.underline((`http://localhost:${PORT}/`)))
    console.log("Acesso por IP: " + link.underline((`http://${SERVER_IP}:${PORT}/`)))
})