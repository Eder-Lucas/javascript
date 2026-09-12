import express from 'express'

const router = express.Router()

router.get('/status', (req, res) => {
    // Não armazena a resposta no cache, fazendo sempre requisições novas
    res.set("Cache-Control", "no-store") 

    res.status(200).json({
        status: "Servidor respondendo"
    })
})

export default router