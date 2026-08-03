import express from 'express'
import chalk from 'chalk'
import 'dotenv/config'

// Estilo do chalk
const title = chalk.rgb(255, 23, 189)
const link = chalk.rgb(255, 225, 0)

const app = express()
const PORT = 2026
const SERVER_IP = process.env.SERVER_IP

// Base de usuários
const users = [
    {id: 1, name: "João", idade: 18},
    {id: 2, name: "João Pedro", idade: 24},
    {id: 3, name: "Maria", idade: 56},
    {id: 4, name: "Maria Clara", idade: 15},
    {id: 5, name: "Pedro", idade: 45}
]

const routers = [
    "/usuarios",
    "/userFilter"
]

app.get('/', (req, res) => {
    res.json(routers)
})

app.get('/usuarios', (req, res) => {
    res.json({
        filter: req.query, // Retorna como objeto
        users: users
    })
})

// Para filtrar usamos "/userFilter?name=João"
app.get('/userFilter', (req, res) => {
    const { name } = req.query // Já retorna salvo na variável

    // Grava apenas users que contém o nome coletado
    if (name) {
        const filtrados = users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()))

        return res.json(filtrados)
    }

    res.json(users)
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(title("Servidor: " + title.bgRgb(1,1,1)(" 04_EX001 ") + " rodando na porta " + title.bgRgb(1,1,1)(` ${PORT} `)))
    console.log("Acesse: " + link.underline((`http://${SERVER_IP}:${PORT}/`)))
})