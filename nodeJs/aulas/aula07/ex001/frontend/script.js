const mostraCod = document.querySelector('p#resposta')
const btnCod = document.querySelector('button#cod')

btnCod.addEventListener('click', clique)

async function clique() {
    try {
        const resposta = await fetch('http://192.168.1.17:5050/')
        const processo = await resposta.json()

        mostraCod.textContent = processo.mensagem
    } catch (error) { // Se não consegui realizar o fetch o servidor está inativo
        mostraCod.textContent = "Servidor offline"
    }
    
}