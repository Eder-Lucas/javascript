import express from 'express'
const app = express()
const PORT = 2026

const users = [
    {id: 1, name: "João", idade: 18},
    {id: 2, name: "João", idade: 24},
    {id: 3, name: "Maria", idade: 56},
    {id: 4, name: "Ricardo", idade: 15}
]

app.get('/usuarios', (req, res) => {
    res.json({
        filter: req.query,
        users: users
    })
})

app.get('/userFilter', (req, res) => {
    const { name } = req.query

    if (name) {
        const filtrados = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()))

        return res.json(filtrados)
    }

    res.json(users)
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor 04_EX001 rodando na porta ${PORT}`)
    console.log(`Acesse: http://192.168.1.16:${PORT}/`)
})