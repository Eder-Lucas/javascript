// Criando uma API

// GET -- sempre pelo navegador
// POST -- PATCH
// DELETE

// JSON -- anotação de objeto javascript

import express from "express"

const app = express()
const PORT = 3000

// Qual porta ele deve escutar e o que deve executar caso tudo esteja correto
app.listen(PORT, () => {
   console.log(`Servidor 02_EX001 rodando na porta ${PORT}`)
    console.log("Acesse: http://192.168.1.16:3000/")
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