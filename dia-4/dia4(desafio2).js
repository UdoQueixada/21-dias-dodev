//DESAFIO DIA #4: 2 - Motorista
//1.1 - Crie um sistema que peça para o seu usuário as seguintes informações: nome, idade, se possuí carta de motorista e se tem algum carro.
//1.2 - Se o usuário não for maior de idade ou não tiver carta exiba no console: "Giovanni, você não pode dirigir".
//1.3 - Se o usuário for maior de idade, tiver carta mas não tiver carro exiba no console: "Giovanni, você pode dirigir mas não tem um carro".
//1.4 - Se o usuário for maior de idade, tiver carta e carro exiba no console: "Giovanni, você será o motorista!"


const nome = prompt('Qual é o seu nome')
const idade = parseInt(prompt('Quantos anos você tem?'))
const temCarta = prompt('Você tem carteira de motorista? (sim/não)')
const temCarro = prompt('Você tem carro? (sim/não)')


if(idade < 18 || temCarta === "não"){
    console.log(nome + " Você não pode dirigir");
} else if(idade >= 18 && temCarta === "sim" && temCarro === "não"){
    console.log(nome + " Você pode dirigir, mas não tem um carro");
} else{
    console.log(nome + " Você será o motorista")
} 