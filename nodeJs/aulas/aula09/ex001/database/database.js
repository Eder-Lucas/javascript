import database from 'better-sqlite3'
import path from 'path'

function start() {
    // Como os projetos são executados num caminho diferente do atual,
    // usa o path para retornar o caminho atual do diretório e criar o .db
    const db = new database(path.join(import.meta.dirname, "./database.db"))

    db.exec(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            idade INTEGER NOT NULL
        )    
    `)

    const inserirUsuario = db.prepare(`
        INSERT INTO usuarios(nome, idade)
        VALUES(?,?)
    `)

    inserirUsuario.run('Joao', 19)
    inserirUsuario.run('Pedro', 8)
    inserirUsuario.run('Ricardo', 21)

    const buscaUsuarios = db.prepare(`
        SELECT * FROM usuarios
    `)
    const usuarios = buscaUsuarios.all()

    const buscaUsuarioEspecifico = db.prepare(`
        SELECT * FROM usuarios
        WHERE id = ?    
    `)
    const pessoa = buscaUsuarioEspecifico.get(2)

    console.log("=== UTILIZANDO BANCO DE DADOS ===")
    console.log("Usuarios adicionados!")

    console.log(`Usuários: ${JSON.stringify(usuarios)}`)
    console.log(`Usuário de ID 2: ${JSON.stringify(pessoa)}`)
}

export default start