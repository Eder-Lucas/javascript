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
        const id = req.params.id
               
        const usuario = usuariosService.buscar(id)

        res.status(200).json({
            user: usuario
        })

    } catch (erro) {
        next(erro) // Os erros do service que chegam são encaminhados para o express
    }
}