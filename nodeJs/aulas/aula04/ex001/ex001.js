import express from 'express'
const app = express()
const PORT = 2026

// Base de usuários
const users = [
    {id: 1, name: "João", idade: 18},
    {id: 2, name: "João Pedro", idade: 24},
    {id: 3, name: "Maria", idade: 56},
    {id: 4, name: "Maria Clara", idade: 15}
]

app.get('/usuarios', (req, res) => {
    res.json({
        filter: req.query,
        users: users
    })
})

// Para filtrar usamos "/userFilter?name=João"
app.get('/userFilter', (req, res) => {
    const { name } = req.query

    // Grava apenas users que contém o nome coletado
    if (name) {
        const filtrados = users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()))

        return res.json(filtrados)
    }

    res.json(users)
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor 04_EX001 rodando na porta ${PORT}`)
    console.log(`Acesse: http://192.168.1.16:${PORT}/`)
})