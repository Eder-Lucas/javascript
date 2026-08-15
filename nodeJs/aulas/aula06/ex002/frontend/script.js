const listaResposta = document.querySelector('p#resposta')

async function carregar() {
    const resposta = await fetch("http://192.168.1.16:4000/usuarios")
    const dados = await resposta.json()

    console.log(dados)
    listaResposta.innerText = JSON.stringify(dados)
}

carregar()