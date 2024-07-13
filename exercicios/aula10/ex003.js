//selecionando os elementos
var msg = window.document.querySelector('strong#msg')
var statusNet = window.document.querySelector('strong#status')
var caixaInteração = window.document.querySelector('div#caixa')

//quando clicar na caixa de interação ela vai chamar uma função que analisa se o usuário está conectado ao wi-fi
caixaInteração.addEventListener('click', clicar)
temErro = false//não tem erros
function clicar() {
    if (navigator.onLine && temErro == false) {//se tiver conectado 
        url = 'https://github.com/Eder-Lucas'
        window.location.href = url//vai mandar para esse link
        caixaInteração.style.background = 'lime'//muda a cor de fundo
        msg.textContent = 'Navegação Permitida'//muda o texto

        /*faz a caixa de interação voltar a suas configurações originais depois de um certo tempo caso o dispositivo não consiga por algum motivo( comum em dispositivos movéis )*/
        setTimeout(() => {
            caixaInteração.style.background = 'gray'
            msg.innerHTML = ''
        }, 15000);//mantém a função rodando por 15s após isso reseta o texto e a cor
    } else if (!navigator.onLine && temErro == false) {//se não tiver conectado ao wifi
        alert('Sem conexão com a internet')
        caixaInteração.style.background = 'red'
        msg.style.color = 'white'
        msg.innerHTML = 'Navegação proibida'
    } else {//quando tiver algum erro
        alert('algum problema ocorreu')
    }
}

//escuta as mudanças de online e offline e chama uma função
window.addEventListener('online', VerificaNet)
window.addEventListener('offline', VerificaNet)

function VerificaNet() {//analisa se o navegador está online ou offline  
    if (!navigator.onLine) {//estando offline
        console.log('página offline')
        statusNet.style.color = 'red'
        statusNet.textContent = ' Offline'
    } else {//estando online
        console.log('página online')
        statusNet.style.color = 'lime'
        statusNet.textContent = ' Online'

        //reseta as configurações do offline quando trocar para online
        caixaInteração.style.background = ''
        msg.innerHTML = ''
    }
}

//quando a página tiver totalmente carregada
window.onload = () => {
    console.log('página totalmente carregada, tentando executar a função VerificaNet')

    try {//vai tentar chamar a função
        VerificaNet()
        //se não tiver erros
        console.log('função VerificaNet rodando sem problemas')
    } catch (error) {//se encontrar algum erro
        console.error('Erro ao carregar a função', error)
        statusNet.textContent = ' [Error]'
        msg.textContent = '[Error]'
        alert('algum problema ocorreu')
        temErro = true//impossibilita a função clicar de funcionar
    }   
}