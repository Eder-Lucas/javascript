//Desestruturação

//Array

function main() {
    
    const colors = ["verde", "amarelo", "azul", "rosa", "laranja"]

    const [cor01] = colors //pega na ordem
    const [, , , cor04] = colors //pula os elementos
    console.log(cor01)
    console.log(cor04)
}
main()