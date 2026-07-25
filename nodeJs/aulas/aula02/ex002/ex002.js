import express from "express"
const app = express()
const PORT = 5000

// Assim aceita outras conexões
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor ex002 rodando na porta ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("Página inicial do servidor")
})

app.get('/sobre', (req, res) => {
    res.send("barbearia do joaquim")
})

app.get('/servicos', (req, res) => {
    res.json(servicos)
})

const servicos = [
    {
        id: 1, 
        nome: "corte americano", 
        preco: 20, 
        tempo: "20min"
    },
        {
        id: 2, 
        nome: "degradê alto", 
        preco: 25, 
        tempo: "26min"
    },
]
