import express from 'express'
import chalk from 'chalk'
import 'dotenv/config'
import path from 'path'

const app = express()
const PORT = 5000
const SERVER_IP = process.env.SERVER_IP

app.use(express.json())

// express.static > executa todos os arquivos do front presentes em "public"
// como o projeto é executado num caminho diferente do atual
// usa o path para retornar o caminho atual do diretório até a pasta "public"
app.use(express.static(path.join(import.meta.dirname,"public")))

// Estilo do chalk
const title = chalk.rgb(255, 23, 189)
const link = chalk.rgb(255, 225, 0)

app.get('/user', (req, res) => {
    res.json({
        mensagem: "Essa mensagem veio do servidor"
    })
})

const usuarios = []

app.post('/salvar', (req, res) => {
    const name = req.body.nome

    const newUser = {
        id: usuarios.length + 1,
        nome: name
    }

    usuarios.push(newUser)

    res.status(200).json(usuarios)
})

app.listen(PORT, () => {
    console.log(title("Servidor: " + title.bgRgb(1,1,1)(" 06_EX001 ") + " rodando na porta " + title.bgRgb(1,1,1)(` ${PORT} `)))
    console.log("Acesso local: " + link.underline((`http://localhost:${PORT}/`)))
    console.log("Acesso por IP: " + link.underline((`http://${SERVER_IP}:${PORT}/`)))
})