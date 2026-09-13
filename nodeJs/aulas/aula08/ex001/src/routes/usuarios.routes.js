import express from 'express'
import * as usuariosController from '../controller/usuarios.controller.js'
const router = express.Router()

router.post('/usuarios', usuariosController.criar)
router.get('/usuarios/:id', usuariosController.buscar)

export default router // Exporta esse router que contém várias rotas para os usuários