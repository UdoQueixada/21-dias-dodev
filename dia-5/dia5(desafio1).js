
const numero1 = parseFloat(prompt("Entre com o primeiro número"))
const numero2 = parseFloat(prompt("Entre com o o segundo número"))
const opção = prompt("Escolha qual operação:soma, subtração, multiplicação ou divisão")

soma = numero1 + numero2 
subtração = numero1 - numero2 
multiplicação = numero1 * numero2
divisão = numero1 / numero2


switch(opção){
    case "soma":
        console.log("A operação feita foi de soma " + soma);
        break;
    case "subtração":
        console.log("A operação feita foi de subtração " + subtração);
        break;
    case "multiplicação":
        console.log("A operação feita foi de multiplicação " + multiplicação);
        break;
    case "divisão":
        console.log("A operação feita foi de divisão " + divisão);
        break;
} 

