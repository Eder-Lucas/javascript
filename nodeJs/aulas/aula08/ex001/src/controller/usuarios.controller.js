import * as usuariosService from '../services/usuarios.service.js'

export function criar(req, res, next) {
    try {
        const {nome, idade} = req.body

        const usuario = usuariosService.criar(nome, idade)

        res.status(201).json({
            mensagem: "Usuário criado",
            usuario: usuario
        })

    } catch (erro) {
        next(erro)
    }
}

export function buscar(req, res, next) {
    try {
        const id = Number(req.params.id)
        
        if (isNaN(id) || id <= 0) {
            const erro = new Error("Campo ID preenchido incorretamente")
            erro.status = 400

            throw erro
        }
        
        const usuario = usuariosService.buscar(id)

        res.status(200).json({
            user: usuario
        })

    } catch (erro) {
        next(erro)
    }
}