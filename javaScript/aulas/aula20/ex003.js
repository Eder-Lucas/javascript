//Desestruturação

function main() {
    const nickname = "Eder"
    
    const player = {
        nickname: "Lusk",
        health: 20,
        inventory: { //objeto
            items: ["Sword", "Shield", "Bow"],
            potions: [
                { type: "Regeneration", duration: 8},
                { type: "Defense", duration: 8}
            ]
        }
    }

    const {nickname: nick} = player //renomeou para nick
    console.log(`Primeiro nome: ${nickname}`)
    console.log(`Segundo nome: ${nick}`)

    // const { inventory: { items, potions } } = player
    // acessa items e potions mas nao o inventory completo
    // acessando os elementos e o proprio inventory:
    const { inventory } = player
    const { items } = inventory
    console.log(items)
    console.log(inventory)

    //array de objetos

    const { inventory: { potions } } = player //cria a variavel potions que é um array
    
    //pega os dois valores do array renomeando o nome do segundo
    const [{ type, duration }, { type: secondType, duration: secondDuration }] = potions
    
    //printa eles
    console.log(type, duration)
    console.log(secondType, secondDuration)
}
main()