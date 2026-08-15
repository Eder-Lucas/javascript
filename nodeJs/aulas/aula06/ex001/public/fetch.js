const p = document.querySelector("p#o")
const btn = document.querySelector("button#a")
const nome = document.querySelector("input#nome")
const listUser = document.querySelector("p#lista")

btn.addEventListener('click', lista)
async function lista() {
    const resposta = await fetch("http://192.168.1.16:5000/user")
    const salvaNome = await fetch("http://192.168.1.16:5000/salvar", {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome.value
        })
    })

    const users = await salvaNome.json()
    const itens = await resposta.json()
    const ultimo = users[users.length - 1]

    p.innerHTML = "A API retornou: " + itens.mensagem + "<br>"
    p.innerHTML += "Novo usuário: " + JSON.stringify(ultimo)
    listUser.innerText = JSON.stringify(users)  
}