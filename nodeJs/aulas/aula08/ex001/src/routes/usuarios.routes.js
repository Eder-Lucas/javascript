import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        mensagem: "Servidor respondendo!"
    })
})

const usuarios = []
router.post('/usuarios', (req, res) => {
    const {nome, idade} = req.body

    const novoUsuario = {
        id: usuarios.length + 1,
        nome: nome,
        idade: idade
    }
    usuarios.push(novoUsuario)

    res.status(201).json({
        usuario: novoUsuario,
        mensagem: "Usuário criado!"
    })
})

export default router // Exporta esse router que contém várias rotas para os usuários