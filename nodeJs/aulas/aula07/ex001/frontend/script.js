const mostraCod = document.querySelector('p#resposta')
const btnCod = document.querySelector('button#cod')
const nome = document.querySelector('input#nome')
const btnEnviar = document.querySelector('input#enviar')
const btnEnviarId = document.querySelector('input#enviarId')
const id = document.querySelector('input#id')

const API_URL = 'http://192.168.1.15:5050/'

btnCod.addEventListener('click', servidorAtivo)

async function servidorAtivo() {
    try {
        const controlador = new AbortController()

        setTimeout(() => controlador.abort(), 2000)

        const resposta = await fetch(
            API_URL,
            {
                signal: controlador.signal
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

btnEnviarId.addEventListener('click', BuscarUsuario)

async function BuscarUsuario() {
    const resposta = await fetch(`${API_URL}usuarios/${id.value}`)
    const usuarios =  await resposta.json()

    mostraCod.textContent = ""

    if (resposta.ok) 
        mostraCod.textContent = JSON.stringify(usuarios.nome)
    else 
        mostraCod.textContent = JSON.stringify(usuarios.mensagem)
    
}