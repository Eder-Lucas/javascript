const mostraCod = document.querySelector('p#resposta')
const btnCod = document.querySelector('button#cod')
const nome = document.querySelector('input#nome')
const btnEnviar = document.querySelector('input#enviar')

btnCod.addEventListener('click', servidorAtivo)

async function servidorAtivo() {
    try {
        const controlador = new AbortController()

        setTimeout(() => controlador.abort(), 2000)

        const resposta = await fetch(
            'http://192.168.1.15:5050/',
            {
                signal: controlador.abort()
            }
        )
        const processo = await resposta.json()

        mostraCod.textContent = ""
        mostraCod.textContent = processo.mensagem

        return true
    } catch (error) { // Se não consegui realizar o fetch o servidor está inativo
        mostraCod.textContent = "Servidor está inativo"

        return false
    }
}

btnEnviar.addEventListener('click', SalvarUsuario)

async function SalvarUsuario() {
    const resposta = await fetch('http://192.168.1.15:5050/usuarios', {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome.value,
        })
    })

    const usuarios =  await resposta.json()

    mostraCod.textContent = ""
    mostraCod.textContent = usuarios.mensagem
}