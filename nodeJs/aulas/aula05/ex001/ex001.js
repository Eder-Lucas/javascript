import express from 'express'
import chalk from 'chalk'
import 'dotenv/config'

const app = express()
const PORT = 3000
const SERVER_IP = process.env.SERVER_IP

// Estilo do chalk
const title = chalk.rgb(255, 23, 189)
const link = chalk.rgb(255, 225, 0)

// Middleware: o express interpreta o JSON recebido
// Disponibilizando como um objeto javascript no req.body
// Sem essa linha o req.body retorna undefined
app.use(express.json())

app.get('/', (req, res) => {
    res.send("aula 05")
})

app.post('/user', (req, res) => {
    res.json({
        mensagem: "Dados recebidos",
        dados: req.body
    })
})

const users = [
    {
        id: 1,
        nome: "Pedro",
        idade: 19
    },
    {
        id: 2,
        nome: "Lucas",
        idade: 35
    }
]

// Rota que cria um usuário na memória
app.post('/create', (req, res) => {
    const { nome, idade } = req.body

    let newUser = {
        id: users.length + 1,
        nome: nome,
        idade: idade
    }
    
    users.push(newUser)

    res.status(201).json(users)
})

// Rota que deleta um usuário por id
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id

    const deleteUser = users.findIndex(u => u.id == id)

    users.splice(deleteUser, 1)

    res.json({
        user: deleteUser,
        todos: users
    })
})

// Cria a rota de atualização
app.put('/update/:id', (req, res) => {
    const id = req.params.id

    const user = users.find(u => u.id == id)

    if (!user) {
        return res.status(404).json({
            erro: "Usuário não encontrado"
        })
    }

    user.nome = req.body.nome
    user.idade = req.body.idade

    res.json(user)
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(title("Servidor: " + title.bgRgb(1,1,1)(" 05_EX001 ") + " rodando na porta " + title.bgRgb(1,1,1)(` ${PORT} `)))
    console.log("Acesso local: " + link.underline((`http://localhost:${PORT}/`)))
    console.log("Acesso por IP: " + link.underline((`http://${SERVER_IP}:${PORT}/`)))
})