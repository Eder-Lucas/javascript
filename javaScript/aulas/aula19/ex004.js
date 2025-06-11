//Escopo

//Léxico part 2

const myName = "Eder" //declarada como global mas ignorada

function main() {
    const myName = "Martinez" //variavel de mesmo nome com valor diferente

    function secondary() {
        console.log(myName) //procura a variavel no escopo acima
    }
    secondary() //o valor 'Martinez' é mostrado
}
main()