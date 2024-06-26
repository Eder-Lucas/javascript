var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()
var dia = agora.getDate()
var mês = agora.getMonth() + 1// janeiro é igual a 0
var ano = agora.getFullYear()
console.log(`Agora são extamente ${hora} Horas ${minutos} Minutos e ${segundos} Segundos do dia ${dia} do mês ${mês} do ano de ${ano}`)

if (hora >= 7 && hora < 12) {
    console.log('Bom Dia!')
}
else if ( hora == 12) {
    console.log('Meio Dia!')
}
else if (hora > 12 && hora < 19 ) {
    console.log('Boa Tarde!')
}
else if (hora >= 19 && hora < 24) {
    console.log('Boa Noite!')
}
else if (hora == 0) {
    console.log('Meia Noite!')
}
else {
    console.log('Boa Madrugada!')
}// condição aninhada