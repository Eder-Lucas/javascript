const listaResposta = document.querySelector('p#resposta')
const mostrarUsuarios = document.querySelector('p#usuarios')
const btnEnviar = document.querySelector('input#enviar')
const campoNome = document.querySelector('input#nome')
const campoIdade = document.querySelector('input#idade')

async function carregar() {
    const resposta = await fetch("http://192.168.1.16:4000/")
    const dados = await resposta.json()

    listaResposta.innerHTML = dados.mensagem
}

btnEnviar.addEventListener('click', salvarUsuario)

async function salvarUsuario() {
    const resposta = await fetch("http://192.168.1.16:4000/usuarios", {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: campoNome.value,
            idade: campoIdade.value
        })
    })

    const usuario = await resposta.json()

    listaResposta.innerHTML = usuario.mensagem
    
    listaUsuarios()
}

async function listaUsuarios() {
    const resposta = await fetch("http://192.168.1.16:4000/usuarios")
    const usuarios = await resposta.json()

    mostrarUsuarios.innerHTML = ""
    usuarios.forEach(u => {
        mostrarUsuarios.innerHTML += `<br> Nome: ${u.nome} | Idade: ${u.idade}`
    });
}

listaUsuarios()
carregar()

setInterval(listaUsuarios, 5000)