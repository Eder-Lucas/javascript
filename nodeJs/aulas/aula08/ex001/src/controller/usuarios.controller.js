import * as usuariosService from '../services/usuarios.service.js'

export function criar(req, res) {
    try {
        const {nome, idade} = req.body

        const usuario = usuariosService.criar(nome, idade)

        res.status(201).json({
            mensagem: "Usuário criado",
            usuario: usuario
        })
    } catch (erro) {
        res.status(400).json({
            erro: erro.message
        })
    }
}

export function buscar(req, res) {
    try {
        const id = Number(req.params.id)
        console.log(id)
        const usuario = usuariosService.buscar(id)

        res.status(200).json({
            user: usuario
        })
    } catch (erro) {
        console.log(erro)
        res.status(400).json({
            erro: erro.message
        })
    }
}