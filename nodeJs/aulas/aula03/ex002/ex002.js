import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = 2050
const SERVER_IP = process.env.SERVER_IP

// Base de dados
const products = [
    { id: 1, name: "Mouse" },
    { id: 2, name: "Teclado" },
    { id: 3, name: "Monitor" }
]

// Rota inicial
app.get('/', (req, res) => {
        res.json({
        title: "AULA 03 EX002",
        server: "03_EX002",
        topic: "treinando parâmetros de rota"
    })
})

// Busca produto pelo id usando Find
app.get('/buscar/:id', (req, res) => {
    const id = req.params.id

    const product = products.find(p => p.id == id)

    if (product == undefined) {
        res.status(404).json({
            mensagem: "Produto não encontrado"
        })
    }
    else {
        res.send(product)
    }
})

// Rota para criar um produto
app.get('/criar/:id/:name', (req, res) => {
    const id = req.params.id
    const name = req.params.name

    products.push({id: Number(id), name})

    res.send(products)
})

// Rota que remove um produto
app.get('/remove/:id', (req, res) => {
    const id = req.params.id

    // Descobre o index e remove
    const removeIndex = products.findIndex(obj => obj.id == id)
    products.splice(removeIndex, 1)

    if (removeIndex == -1) {
        res.status(404).json({
            mensagem: "Produto não encontrado"
        })
    }
    else {
        res.send(products)
    }
})

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor 03_EX002 rodando na porta ${PORT}`)
    console.log(`Acesse: http://${SERVER_IP}:${PORT}/`)
})