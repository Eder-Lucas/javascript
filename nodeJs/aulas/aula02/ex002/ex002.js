import express from "express"
const app = express()
const PORT = 5000

app.get('/', (req, res) => {
    res.send("Página inicial do servidor")
})

app.get('/sobre', (req, res) => {
    res.send("barbearia do joaquim")
})

// Responde varias coisas ao mesmo tempo
app.get('/servicos', (req, res) => {
    res.json({
        servicos: servicos,
        URL: req.url,
        IP: req.ip,
        METODO: req.method
    })
})

// Assim aceita outras conexões
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor 02_EX002 rodando na porta ${PORT}`)
    console.log("Acesse: http://192.168.1.16:5000/")
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
