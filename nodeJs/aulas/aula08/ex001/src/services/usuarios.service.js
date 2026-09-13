const usuarios = []

export function criar(nome, idade) {
    idade = Number(idade)

    if (nome == "" || idade == 0) throw new Error('Os dados não foram enviados corretamente')
    
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
        throw new Error("Usuário não encontrado");      
    }
    
    return usuarioBuscado
}