var agora = new Date()
var dia_da_semana = agora.getDay()//pega os dias da semana
/*  
    getDay()
    0 = domingo
    1 = segunda
    2 = terça
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sabado
*/

//testar valores pontuais

switch (dia_da_semana) {//testa a expressão dia_da_semana
    case 0://caso seja 0
        console.log('Hoje é Domingo')
        break;//necessario o uso de break no final de cada caso
    case 1:
        console.log('Hoje é Segunda-feira')
        break;
    case 2:
        console.log('Hoje é Terça-feira')
        break;
    case 3:
        console.çog('Hoje é Quarta-feira')
        break;
    case 4:
        console.log('Hoje é Quinta-feira')
        break;
    case 5:
        console.log('Hoje é Sexta-feira')
        break;
    case 6:
        console.log('Hoje é Sábado')
        break;
    
    default://caso não seja nenhum dos casos anteriores
        console.log('[ERROR] Dia inválido!')
        break;
}