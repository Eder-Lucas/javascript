const btnEnviar = document.querySelector('input#enviar')
const campoNome = document.querySelector('input#nome')
const campoIdade = document.querySelector('input#idade')
const res = document.querySelector('p#resposta')

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

        if(!resposta.ok) dados.mensagem
        
        res.textContent = `Usuário: ${dados.usuario.nome} adicionado!`

    } catch (erro) {
        console.log('Erro: ', erro)
    }

}