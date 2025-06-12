//Desestruturação

function main() {
   
    const person = {
        name: "Lusk",
        age: 17,
        isProgrammingStudent: true
    }

    // const name = person.name
    const { name, age, isProgrammingStudent } = person //extrai do objeto person

    console.log(`
        O nome dele é ${name}
        Tem ${age} anos
        ${isProgrammingStudent? "É um": "Não é"} estudante de programação
    `)
}
main()