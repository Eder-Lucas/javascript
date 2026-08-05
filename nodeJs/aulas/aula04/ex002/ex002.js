import express from 'express'
import chalk from 'chalk'
import "dotenv/config"

const app = express()
const PORT = 3100
const SERVER_IP = process.env.SERVER_IP

// Estilo do chalk
const title = chalk.rgb(255, 23, 189)
const link = chalk.rgb(255, 225, 0)

// Dados 
const produtos = [
    {
        id: 1,
        nome: "Teclado",
        preco: 200
    },
    {
        id: 2,
        nome: "Mouse Gamer",
        preco: 150
    },
    {
        id: 3,
        nome: "Mouse x100V",
        preco: 98
    },
    {
        id: 4,
        nome: "Monitor 24",
        preco: 980
    },
    {
        id: 5,
        nome: "Notebook",
        preco: 4500
    }
]

app.get('/', (req, res) => {
    res.send("server online na porta " + PORT)
})

app.get('/preco', (req, res) => {
    let { min, max } = req.query
    min = Number(min)
    max = Number(max)

    if (min || max) {
        const filtrados = produtos.filter(p => {
            const faixa = p.preco >= min || p.preco <= max
            
            if (faixa) return p.nome          
        })

        res.json(filtrados)
    }
})

app.get('/produtos', (req, res) => {
    const filtros = req.query
    
    let produtosFiltrados = produtos

    // for percorre todos os filtros
    // filter percorre cada index do array de objetos Produtos
    for (const campo in filtros) {
        produtosFiltrados = produtosFiltrados.filter(produtos => {
            produtos[campos] == filtros[campos]
        })
    }
    
    res.json(produtosFiltrados)
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(title("Servidor: " + title.bgRgb(1,1,1)(" 04_EX002 ") + " rodando na porta " + title.bgRgb(1,1,1)(` ${PORT} `)))
    console.log("Acesso local: " + link.underline((`http://localhost:${PORT}/`)))
    console.log("Acesso por IP: " + link.underline((`http://${SERVER_IP}:${PORT}/`)))
})

