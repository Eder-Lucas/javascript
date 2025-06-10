// objetos

const player = {
    nickname: "Lusk013",
    health: 20,
    isDead: false,

    present(){ //metodo
        console.log("Meu nick é:", this.nickname)
    }
}
player.name = "Eder"

console.log(player)
player.present() //executa o metodo

//apenas o nome das propriedades do objeto
for(const prop in player) {
    console.log(prop)
}