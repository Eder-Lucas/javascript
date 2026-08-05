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
        categoria: "Periferico",
        preco: 200
    },
    {
        id: 2,
        nome: "Mouse Gamer",
        categoria: "Periferico",
        preco: 150
    },
    {
        id: 3,
        nome: "Mouse Gamer",
        categoria: "Periferico",
        preco: 98
    },
    {
        id: 4,
        nome: "Monitor 24",
        categoria: "Periferico",
        preco: 980
    },
    {
        id: 5,
        nome: "Notebook",
        categoria: "Computador",
        preco: 4500
    }
]

// Rota root
app.get('/', (req, res) => {
    res.send("server online na porta " + PORT)
})

app.get('/preco', (req, res) => {
    let { min, max } = req.query

    // Converte para números para realizar as comparações
    min = Number(min)
    max = Number(max)

    // Se o filtro for informado
    // Salva os produtos na faixa de preco
    // Retorna apenas os dentro da faixa
    if (min || max) {
        const filtrados = produtos.filter(p => {
            const faixa = p.preco >= min || p.preco <= max
            
            if (faixa) return p.nome // Retorna os que estão na faixa       
        })

        res.json(filtrados)
    }
})

app.get('/produtos', (req, res) => {
    const filtros = req.query

    if (filtros) {
        let produtosFiltrados = produtos

        // for percorre todos os filtros
        // filter percorre cada index do array de objetos Produtos
        // Permite filtrar com mais de dois filtros:
        // >> /produtos?nome=Mouse&categoria=periferico&preco=98
        for (const campo in filtros) {
            produtosFiltrados = produtosFiltrados.filter(produtos => {
                const p = String(produtos[campo])
                const f = String(filtros[campo])

                return p.toLowerCase().includes(f.toLowerCase())
            })
        }
        
        res.json(produtosFiltrados)
    }    

    // Se não tiver filtros mostra todos os produtos
    res.json(produtos)
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(title("Servidor: " + title.bgRgb(1,1,1)(" 04_EX002 ") + " rodando na porta " + title.bgRgb(1,1,1)(` ${PORT} `)))
    console.log("Acesso local: " + link.underline((`http://localhost:${PORT}/`)))
    console.log("Acesso por IP: " + link.underline((`http://${SERVER_IP}:${PORT}/`)))
})