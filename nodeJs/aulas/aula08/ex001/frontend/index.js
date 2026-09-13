const btnEnviar = document.querySelector('input#enviar')
const campoNome = document.querySelector('input#nome')
const campoIdade = document.querySelector('input#idade')
const res = document.querySelector('p#resposta')
const res_server = document.querySelector('p#resposta-server')
const btnId = document.querySelector('input#enviaID')
const campoID = document.querySelector('input#id')

const URL_API = 'http://192.168.1.15:4040'

btnEnviar.addEventListener('click', SalvarUsuario)

async function SalvarUsuario() {
    try {
        const resposta = await fetch(`${URL_API}/usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: campoNome.value,
                idade: campoIdade.value
            })
        })

        const dados = await resposta.json()

        if(!resposta.ok) {
            res.textContent = dados.erro

            return
        }
        res.textContent = `Usuário: ${dados.usuario.nome} adicionado!`

    } catch (erro) {
        console.log('Erro: ', erro)
    }
}

async function Status() {
    try {
        const controlador = new AbortController()

        setTimeout(()=> controlador.abort(), 2000)

        const resposta = await fetch(
            `${URL_API}/status`,
            {
                signal: controlador.signal
            } 
        )

        if (resposta.ok) {
            const dados = await resposta.json()
            res_server.textContent = dados.status
        }
    } catch (erro) {
        if (erro.name === "AbortError") {
            res_server.textContent = "Servidor demorou demais"
        } else {
            res_server.textContent = "Não foi possivel conectar ao servidor"
        }
    }  
}

setInterval(() => {
    Status()
}, 2000)

btnId.addEventListener('click', buscarUsuario)

async function buscarUsuario() {
    const resposta = await fetch(`${URL_API}/usuarios/${campoID.value}`)
    console.log(campoID.value)
    const dados = await resposta.json()

    if(!resposta.ok) {
        res.textContent = dados.erro
        return
    }
    
    res.textContent = JSON.stringify(dados.user)
}