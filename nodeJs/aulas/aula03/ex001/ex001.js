import express from "express"
const app = express()
const PORT = 3000

// Usando parâmetros
app.get("/usuarios/:id/:nome", (req, res) => {
    console.log(req.params.id) // Coleta apenas o id
    console.log(req.params) // Traz tudo

    res.send("OK")
})

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
