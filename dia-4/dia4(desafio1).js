//DESAFIO DIA #4: 1 - Jantar especial
//1.1 - Crie um sistema que pergunte ao seu usuário se ele está com fome, se tem dinheiro e se o restaurante está aberto.
//1.2 - Se estiver sem fome ou sem dinheiro exiba no console: "Hoje a janta será em casa"
//1.3 - Se estiver com fome e tiver dinheiro mas o restaurante estiver fechado exiba no console: "Peça um delivery!"
// 1.4 - Se estiver com fome, tiver dinheiro e o restaurante estiver aberto exiba no console: "Hoje o jantar será no seu restaurante preferido!"


///// Udo´s way ////
let fome = prompt('Você está com fome?')
let dinheiro = prompt('Você tem dinheiro?')
let restauranteAberto = prompt('O restaurante está aberto?')

if(fome === "não" || dinheiro === "não"){
    console.log('Hoje a janta será em casa');
}

if(fome === "sim" && dinheiro === "sim" && restauranteAberto === "não"){
    console.log('Peça um delivery!');
}

if(fome === "sim" && dinheiro === "sim" && restauranteAberto === "sim"){
    console.log('Hoje o jantar será no seu restaurante preferido!');
}
