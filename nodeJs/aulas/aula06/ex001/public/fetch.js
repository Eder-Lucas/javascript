const p = document.querySelector("p#o")
const btn = document.querySelector("button#a")

btn.addEventListener('click', lista)
async function lista() {
    const resposta = await fetch("http://192.168.1.16:5000/user")

    const itens = await resposta.json()

    p.innerText = "A API retornou: " + itens.mensagem
    console.log(mensagem)
}