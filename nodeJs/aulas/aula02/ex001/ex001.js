// Criando uma API

// GET -- sempre pelo navegador
// POST -- PATCH
// DELETE

// JSON -- anotação de objeto javascript

import express from "express"
import 'dotenv/config'

const app = express()
const PORT = 3000
const SERVER_IP = process.env.SERVER_IP

// Qual porta ele deve escutar e o que deve executar caso tudo esteja correto
app.listen(PORT, '0.0.0.0', () => {
   console.log(`Servidor 02_EX001 rodando na porta ${PORT}`)
    console.log(`Acesse: http://${SERVER_IP}:${PORT}/`)
})

// req > tudo que o cliente enviou
// res > tudo que o servidor vai devolver
app.get('/', (req, res) => {
    res.send("Ola mundo!")
})

app.get('/usuarios', (req, res) => {
    const users = [
        {
            nome: "player",
            idade: 19,
            profissao: "programador"
        },
        {
            nome: "Jack",
            idade: 17,
            profissao: "motorista"
        }
    ]
    res.json(users)
})