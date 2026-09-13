const usuarios = []

export function criar(nome, idade) {
    idade = Number(idade)

    if (nome == "" || idade == 0) {
        const erro = new Error('Os dados não foram enviados corretamente')
        erro.status = 400

        throw erro
    }
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: nome,
        idade: idade
    }
    usuarios.push(novoUsuario)

    return novoUsuario
}

export function buscar(id) {
    const usuarioBuscado = usuarios.find(u => u.id === id)

    if (!usuarioBuscado) {
        const erro = new Error("Usuário não encontrado");     
        erro.status = 404

        throw erro 
    }
    
    return usuarioBuscado
}