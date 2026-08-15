const retorno = document.querySelector("p#retornoServidor")
const btnAdicionar = document.querySelector("button#btnAdicionar")
const campoNome = document.querySelector("input#nome")
const listaUsuarios = document.querySelector("p#listaUsuarios")

btnAdicionar.addEventListener('click', lista)
async function lista() {
    const resposta = await fetch("http://192.168.1.16:5000/user")
    const salvaNome = await fetch("http://192.168.1.16:5000/salvar", {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: campoNome.value
        })
    })

    const itens = await resposta.json()
    const usuarios = await salvaNome.json()   
    
    const ultimoUsuario = usuarios[usuarios.length - 1]

    retorno.innerHTML = "A API retornou: " + itens.mensagem + "<br>"
    retorno.innerHTML += "Novo usuário: " + JSON.stringify(ultimoUsuario)
    listaUsuarios.innerText = JSON.stringify(usuarios)  
}