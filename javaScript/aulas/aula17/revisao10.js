// REPETIÇÃO WHILE

// while(condição){}

let count = 0

while (count <= 10){
    console.log(count)
    count++
}

const x = 20
let playerX = 0

while (playerX < x) {
    console.log("🚶‍♂️".padStart(playerX, " "))
    playerX++
}

let numero
let vezes = 0
const expectativa = 5

while (numero !== expectativa) {
    numero = Math.floor(Math.random() * 10) // gera números até 9
    console.log(`Número gerado: ${numero}`)
    vezes++
}
console.log(`Expectativa de 13 foi atingida! 👏`)
console.log(`Foi preciso ${vezes} tentativa${vezes > 1 ? 's' : ''} 😅`)