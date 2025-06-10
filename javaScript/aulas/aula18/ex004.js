//configurações da posição da roda
const posicaoRodas = [
    { posicao: "Dianteiro", lado: "Esquerdo" },
    { posicao: "Dianteiro", lado: "Direito" },
    { posicao: "Traseiro", lado: "Esquerdo" },
    { posicao: "Traseiro", lado: "Direito" },
]

//configurações da roda
const rodas = {
    tipo: "Aro 15",
    posicao: "",
    lado: "",
    condicao: "Ótima",
}

const carros = {
    sobre: {
        marca: "Volkswagen",
        modelo: "Fuscão",
        cor: "Preto",
        ano: 1980,
    },
    config: {
        cambio: "manual",
        numeroPortas: 4,
        roda: [//array de objetos
            { ...rodas }, //copias separadas
            { ...rodas },
            { ...rodas },
            { ...rodas },
        ],
        motor: {
            cilindradas: 1200,
            combustivel: "Gasolina",
            velocidadeMaxima: 120
        },
    },
    estado: {
        ligado: null,
        condicao: "Ótima",
        velocidade: 0,
    },

    //metodo ligar
    ligarCarro() {
        if (this.estado.ligado === true) {
            console.log("O carro já tá ligado")
        } else {
            carros.estado.ligado = true
            console.log("Ligando o carro")
        }
    },

    //metodo desligar
    desligarCarro() {
        if (this.estado.ligado) {
            carros.estado.ligado = false
            console.log("desligando...")
        } else {
            console.log("ligue o carro antes")
        }

        if (this.estado.velocidade !== 0) {
            console.log("O carrou andou um pouco mesmo desligado")
        }
    },

    //metodo acelerar
    acelerar(vel = 10) {
        if (this.estado.ligado) {
            console.log("você acelerou", vel + "km/h")
            this.estado.velocidade += vel
            console.log("carro andando a:", carros.estado.velocidade + "km/h")
        } else {
            console.log("ligue o carro")
        }
    },

    //metodo frear
    frear(vel = 10) {
        if (this.estado.ligado && carros.estado.velocidade > 0 && vel < carros.estado.velocidade) {
            console.log("você freou", vel + "km/h")
            this.estado.velocidade -= vel
            console.log(`${this.estado.velocidade == 0 ? 'O carro parou' : 'Carro andando a:', this.estado.velocidade + "km/h"}`)
        } else if (vel > this.estado.velocidade) {
            console.log("você freou", vel + "km/h")
            this.estado.velocidade = 0
            console.log("O carro parou bruscamente!")
        } else {
            console.log("ligue o carro")
        }
    }
}

//posição e lado de cada roda
carros.config.roda.forEach((rodas, index) => {
    rodas.posicao = posicaoRodas[index].posicao
    rodas.lado = posicaoRodas[index].lado
})

//testando
carros.ligarCarro()
carros.acelerar(30)
carros.frear(50)
carros.desligarCarro()

console.log(`Velocidade do carro: ${carros.estado.velocidade}km/h`)
console.log(`
    Meu carro é um: ${carros.sobre.modelo}
    Com a cor: ${carros.sobre.cor}
    Movido a: ${carros.config.motor.combustivel}
    Com câmbio: ${carros.config.cambio}
    Rodas do tipo: ${carros.config.roda[0].tipo}
`)