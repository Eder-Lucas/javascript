// objetos

const ramMemory = {
    name: "Hyperx",
    size: 16000
}

const computer = {
    motherBoard: "B360M",
    videoCard: "RTX 2070",
    cpu: "intel i7 8700",
    font: {
        name: "XPG Core Reactor",
        watts: 800
    },
    case: {
        name: "Draco GameMax",
        color: "black"
    },
    ram: [ramMemory, ramMemory]
}

console.log("Informações do computador")
console.log("Placa mãe:", computer.motherBoard)
console.log("Placa de vídeo:", computer.videoCard)
console.log("CPU:", computer.cpu)
console.log("Font:", computer.font.name, computer.font.watts, "Watts")
console.log("Gabinete:", computer.case.name, "Cor:", computer.case.color)
console.log("Ram:")
for( const ram of computer.ram) {
    console.log(ram.name, ram.size, "MBs")
}