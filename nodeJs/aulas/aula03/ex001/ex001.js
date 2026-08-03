import express from "express"
import 'dotenv/config'

const app = express()
const PORT = 3000
const SERVER_IP = process.env.SERVER_IP

app.get("/", (req, res) => {
    res.json({
        titulo: "AULA 03 EX001",
        server: "03_EX001"
    })

})

// Usando parâmetros
app.get("/usuarios/:id/:nome", (req, res) => {
    console.log(req.params.id) // Coleta apenas o id
    console.log(req.params) // Traz tudo

    res.send("OK")
})

// Base de dados simples
const usuarios = [
    { id: 1, nome: "Pedro" },
    { id: 2, nome: "Maria" },
    { id: 3, nome: "Bruno" }
]

// Pesquisa por um usuário existente usando o id
app.get("/usuariosBuscar/:id", (req, res) => {
    const id = Number(req.params.id) // Converte pois sempre vem como string

    // Pega cada elemento da base de dados: "usuarios"
    // Coloca na variavel u e percorre
    // u = { id:2, nome "João" }, quando acha retorna o objeto
    const usuario = usuarios.find(u => u.id == id)

    // Quando não acha retorna Undefined, o js considera isso false
    // Status define a resposta http
    // Envia uma mensagem em json
    if(!usuario) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        })
    }

    res.send(usuario)
})

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor 03_EX001 rodando na porta ${PORT}`)
    console.log(`Acesse: http://${SERVER_IP}:${PORT}/`)
})