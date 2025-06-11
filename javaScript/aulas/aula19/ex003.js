//Escopos

//Léxico part 1

const myName = "Eder" //escopo global

function main() { //escopo acima
    console.log(myName) //é possivel acessar

    let number = 1 //variavel
    function secondary() {
        console.log(number) //busca o valor no escopo acima
    }
    secondary()
}
main()