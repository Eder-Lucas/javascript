//ESTRUTURA DE REPETIÇÃO FOR

// for(inicialização, condição, execução) {}

for (let i = 0; i <= 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000*i)
}

const itens = ['maça', 'banana', 'uva', 'melancia']

for (let i = 0; i < itens.length; i++) {
    console.log(itens[i])
}

const texto = "Preciso me dedicar muito para aprender coisas novas."
const letra = 'a'
let vezes = 0

for (let caractere of texto) {
    if (caractere === letra) vezes++ //sim
}
console.log(`🔍 A letra (${letra}) se repetiu: ${vezes > 0 ? vezes+' vezes 👏' : 'nenhuma ❌'}`)