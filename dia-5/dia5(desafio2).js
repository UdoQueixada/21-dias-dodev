//DESAFIO DIA #5:2 - DoDev thru
//1.1 - Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina: abastecer com gasolina, com álcool ou calibrar os pneus.
//1.2 - Se o usuário escolher abastecer com gasolina, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de gasolina = R$5) 
//1.3 - Se o usuário escolher abastecer com álcool, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de álcool = R$3)
//1.4 - Se o usuário escolher calibrar os pneus, exiba no console a mensagem: "pneus calibrados com sucesso".


const opcao = prompt("Você quer abastecer com gasolina, com álcool ou calibrar os pneus?");
let quantosLitros;
const litroDeGasolina = 5; // O preço por litro de gasolina é 5 reais
const litroDeAlcool = 3;   // O preço por litro de álcool é 3 reais

switch (opcao) {
    case "gasolina":
        quantosLitros = prompt("Quantos litros de gasolina você quer colocar?");
        const totalGasolina = quantosLitros * litroDeGasolina;
        console.log("Você abasteceu " + quantosLitros + " litros de gasolina. Total a pagar: R$" + totalGasolina);
        break;
    case "álcool":
        quantosLitros = prompt("Quantos litros de álcool você quer colocar?");
        const totalAlcool = quantosLitros * litroDeAlcool;
        console.log("Você abasteceu " + quantosLitros + " litros de álcool. Total a pagar: R$" + totalAlcool);
        break;
    case "calibrar os pneus":
        console.log("Pneus calibrados com sucesso");
        break;
}
