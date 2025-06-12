//Praticando

function main() {

    //configurações da posição da roda
    const posicaoRodas = [
        { posicao: "Dianteiro", lado: "Esquerdo" },
        { posicao: "Dianteiro", lado: "Direito" },
        { posicao: "Traseira", lado: "Esquerda" },
        { posicao: "Traseiro", lado: "Direito" },
    ]

    //configurações da roda
    const rodas = {
        tipo: "Aro 15",
        posicao: "",
        lado: "",
        condicao: "Otimo",
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
        }
    }

    //posição e lado de cada roda
    carros.config.roda.forEach((rodas, index) => {
        rodas.posicao = posicaoRodas[index].posicao
        rodas.lado = posicaoRodas[index].lado
    })

    //acessando as rodas
    const { config: {roda: [, , {posicao, lado, condicao}]} } = carros //condição da terceira roda

    //acessando sobre o carro
    const { sobre: {modelo, cor} } = carros

    console.log(`Analisando a roda ${posicao.toLowerCase()} ${lado.toLowerCase()} do ${modelo}`)

    console.log(`
        ${condicao === "Ruim"
            ? "É preciso trocar a roda"
            : "Não é preciso trocar a roda"
        }
        do ${modelo} ${cor}
    `)
}
main()