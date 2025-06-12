//Desestruturação

function main() {
  
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

    // const type = player.inventory.potions[0].type
    //const duration = player.inventory.potions[1].duration
    const { inventory: { potions: [{ type, duration} ]} } = player
    console.log(type, duration)
}
main()