const listaResposta = document.querySelector('p#resposta')
const btnEnviar = document.querySelector('input#enviar')
const campoNome = document.querySelector('input#nome')
const campoIdade = document.querySelector('input#idade')

async function carregar() {
    const resposta = await fetch("http://192.168.1.16:4000/")
    const dados = await resposta.json()

    listaResposta.innerText = dados.mensagem
}

carregar()

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

    listaUsuarios()

    listaResposta.innerHTML = usuario.mensagem
}